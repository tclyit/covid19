import React, { memo, useRef, useEffect } from "react";
import { useSelector } from 'react-redux';
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from 'mapbox-gl-geocoder';
import lookup from "country-code-lookup";
import Typography from '@material-ui/core/Typography';
import DataLoader from '../shared/loader/data-loader';

import "./world-map.scss";
// map box css
import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
mapboxgl.accessToken = "pk.eyJ1IjoidGNseWl0IiwiYSI6ImNrOHVtYjh6bDAxNmkzZG80bDU5Nmtod28ifQ.rCTstxUNoVV0waLr5B1azg";

const WorldMap = () => {
    // DOM element for rendering map
    const mapboxElRef = useRef(null);
    const { data } = useSelector(state => state.loadMapDataReducer);
    // map data to right format geometry json
    const mapData = data && data.map((point, index) => ({
        type: "Feature",
        geometry: {
            type: "Point",
            coordinates: [
                point.coordinates.longitude,
                point.coordinates.latitude
            ]
        },
        properties: {
            id: index, // unique identifier in this case the index
            country: point.country,
            province: point.province,
            cases: point.stats.confirmed,
            deaths: point.stats.deaths
        }
    }));
    useEffect(() => {
        if (mapData) {
            const map = new mapboxgl.Map({
                container: mapboxElRef.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: [10, 40],
                zoom: 1.5
            });

            map.once("load", function () {
                // Add our SOURCE
                // with id "points"
                map.addSource("points", {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: mapData
                    }
                });

                // Add our layer
                map.addLayer({
                    id: "circles", // id used for mouse event behaviors
                    source: "points", // this should be the id of the source
                    type: "circle",
                    // paint properties
                    paint: {
                        "circle-opacity": 0.75,
                        "circle-stroke-width": [
                            "interpolate",
                            ["linear"],
                            ["get", "cases"],
                            1, 0.3,
                            100000, 0.5,
                        ],
                        "circle-radius": [
                            "interpolate",
                            ["linear"],
                            ["get", "cases"],
                            1, 10,
                            1000, 14,
                            4000, 18,
                            8000, 22,
                            12000, 26,
                            100000, 34
                        ],
                        "circle-color": [
                            "interpolate",
                            ["linear"],
                            ["get", "cases"],
                            1, '#FFA07A',
                            5000, '#FA8072',
                            10000, '#CD5C5C',
                            25000, '#FF6347',
                            50000, '#FF4500',
                            75000, '#DC143C',
                            100000, '#FF0000'
                        ],
                    }
                });
            });

            // mapbox popup setup
            const popup = new mapboxgl.Popup({
                closeButton: false,
                closeOnClick: false
            });
            // hold the active country/province on hover
            let selectedId;

            // mouse move
            map.on("mousemove", "circles", evt => {
                const id = evt.features[0].properties.id;
                // only different id
                if (id !== selectedId) {
                    selectedId = id;

                    // pointer type
                    map.getCanvas().style.cursor = "pointer";
                    const { cases, deaths, country, province } = evt.features[0].properties;
                    const coordinates = evt.features[0].geometry.coordinates.slice();
                    // data for tooltip
                    const countryISO = lookup.byCountry(country)?.iso2 || lookup.byInternet(country)?.iso2;
                    const countryFlagHtml = Boolean(countryISO) ? `<img src="//www.countryflags.io/${countryISO}/flat/64.png"></img>` : "";
                    const provinceHtml = province !== "null" ? `<p>Province: <b>${province}</b></p>` : "";
                    const mortalityRate = ((deaths / cases) * 100).toFixed(2);

                    const Html = `<p>Country: <b>${country}</b></p>
                                    ${provinceHtml}
                                    <p>Cases: <b>${cases}</b></p>
                                    <p>Deaths: <b>${deaths}</b></p>
                                    <p>Mortality Rate: <b>${mortalityRate}</b></p>
                                    ${countryFlagHtml}`;
                    // keep popup when map is zoomed
                    while (Math.abs(evt.lngLat.lng - coordinates[0]) > 180) {
                        coordinates[0] += evt.lngLat.lng > coordinates[0] ? 360 : -360;
                    }
                    // setup popup html
                    popup.setLngLat(coordinates)
                        .setHTML(Html)
                        .addTo(map);
                }
            });

            // mouse leave event
            map.on("mouseleave", "circles", () => {
                // reset selected id
                selectedId = undefined;
                map.getCanvas().style.cursor = "";
                popup.remove();
            });

            // search box to map
            const geocoder = new MapboxGeocoder({
                accessToken: mapboxgl.accessToken, // Set the access token
                mapboxgl: mapboxgl, // Set the mapbox-gl instance
                marker: false, // Do not use the default marker style,
                zoom: 14,
                placeholder: 'Search for country / places', // Placeholder text for the search bar
                position: 'top-left'
            });
            map.addControl(geocoder, "top-left");
            // add navigation control
            map.addControl(new mapboxgl.NavigationControl(), "bottom-left");
        }
    }, [mapData]);

    return (
        <>
            <Typography variant="h5" component="h5">Covid19 - World map</Typography>
            <div className="map">
                <div className="mapContainer">
                    <div className="mapBox" ref={mapboxElRef} />
                </div>
                <DataLoader open={!data} />
            </div>
        </>
    );
};

export default memo(WorldMap);
