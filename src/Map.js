import React, { useEffect,useState,useRef } from 'react';
import mapboxgl from 'mapbox-gl';

export default function App() {
    const mapContainer = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(9);
    useEffect(() => {
      // Set your Mapbox access token
      if(map.current) return;
      mapboxgl.accessToken = 'pk.eyJ1IjoiYWhta2huIiwiYSI6ImNsbjF4NW5tbjAyd3Qya213eWs2ejc0NDUifQ.dAQ6snVKM7ga1ApOfs0jsQ';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
            style: 'mapbox://styles/mapbox/light-v11', // style URL
            center: [-68.137343, 45.137451], // starting position
            zoom: 5 // starting zoom
        });
        map.on('load', () => {
            // Add a data source containing GeoJSON data.
            map.addSource('maine', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        // These coordinates outline Maine.
                        'coordinates': [
                            [
                                [-67.13734, 45.13745],
                                [-66.96466, 44.8097],
                                [-68.03252, 44.3252],
                                [-69.06, 43.98],
                                [-70.11617, 43.68405],
                                [-70.64573, 43.09008],
                                [-70.75102, 43.08003],
                                [-70.79761, 43.21973],
                                [-70.98176, 43.36789],
                                [-70.94416, 43.46633],
                                [-71.08482, 45.30524],
                                [-70.66002, 45.46022],
                                [-70.30495, 45.91479],
                                [-70.00014, 46.69317],
                                [-69.23708, 47.44777],
                                [-68.90478, 47.18479],
                                [-68.2343, 47.35462],
                                [-67.79035, 47.06624],
                                [-67.79141, 45.70258],
                                [-67.13734, 45.13745]
                            ]
                        ]
                    }
                }
            });
  
            // Add a new layer to visualize the polygon.
            map.addLayer({
                'id': 'maine',
                'type': 'fill',
                'source': 'maine', // reference the data source
                'layout': {},
                'paint': {
                    'fill-color': '#0080ff', // blue color fill
                    'fill-opacity': 0.5
                }
            });
            // Add a black outline around the polygon.
            map.addLayer({
                'id': 'outline',
                'type': 'line',
                'source': 'maine',
                'layout': {},
                'paint': {
                    'line-color': '#000',
                    'line-width': 3
                }
            });
        });
    }, []);

return (
    <div>
      <div className="map">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
    );
}