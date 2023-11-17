import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import './App.css';
import './index.css';
import states from './states.js';
import ReactSlider from 'react-slider';
import Select from 'react-select';
mapboxgl.accessToken = 'pk.eyJ1IjoiYWhta2huIiwiYSI6ImNsbjF4NW5tbjAyd3Qya213eWs2ejc0NDUifQ.dAQ6snVKM7ga1ApOfs0jsQ';
export default function App() {
  const mapRef=useRef(null);
  console.log(states);
  let geoJSONArray=[];
  states.forEach(element =>{
    console.log(element);
    let tempObj = {};
    tempObj['geometry'] = {
        "type": "Polygon",
        "coordinates" : element['geometry']
    }
    tempObj['property'] = {
        "id": element['id'],
        "area": element['CENSUSAREA']
    }
    geoJSONArray.push(tempObj);
  });
  let geoJSONStruc = {
    "type" : "geojson",
    "data" : geoJSONArray
  }
  console.log(geoJSONArray);
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(3);
  const selectOptions=[
    {value:'on  ',label:'Display Map: ON'},
    {value:'off',label:'Display Map : OFF'},
  ]
  function setVal(value,index){
    //setSliderValue(value);
    mapRef.current.setPaintProperty('ari-outline','line-opacity',value/100);
    mapRef.current.setPaintProperty('col-outline','line-opacity',value/100);
    mapRef.current.setPaintProperty('maine-outline','line-opacity',value/100);
    mapRef.current.setPaintProperty('arizona','fill-opacity',value/100);
    mapRef.current.setPaintProperty('colorado','fill-opacity',value/100);
    mapRef.current.setPaintProperty('maine','fill-opacity',value/100);
  }
  const sliderWrapperStyle={
    position:'absolute',
    top:'20px',
    left:'20px',
    zIndex:1,
    width:'10rem',
    color:'white',
  };
  function setDropDownVal(value,index){
    if(value.value=='off'){
        mapRef.current.setLayoutProperty('maine','visibility','none');
        mapRef.current.setLayoutProperty('arizona','visibility','none');
        mapRef.current.setLayoutProperty('colorado','visibility','none');
        mapRef.current.setPaintProperty('ari-outline','line-opacity',0);
        mapRef.current.setPaintProperty('col-outline','line-opacity',0);
        mapRef.current.setPaintProperty('maine-outline','line-opacity',0);
    } else{
        mapRef.current.setLayoutProperty('maine','visibility','visible')
        mapRef.current.setLayoutProperty('arizona','visibility','visible');
        mapRef.current.setLayoutProperty('colorado','visibility','visible');
        mapRef.current.setPaintProperty('ari-outline','line-opacity',1);
        mapRef.current.setPaintProperty('col-outline','line-opacity',1);
        mapRef.current.setPaintProperty('maine-outline','line-opacity',1);
    }
  }
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWhta2huIiwiYSI6ImNsbjF4NW5tbjAyd3Qya213eWs2ejc0NDUifQ.dAQ6snVKM7ga1ApOfs0jsQ';
    mapRef.current = new mapboxgl.Map({
        container: 'map',
        style:'mapbox://styles/mapbox/outdoors-v12',
        center: [-68.137343, 45.137451],
        zoom: 5
    });
    mapRef.current.on('load', () => {
        if(!mapRef.current.getSource('maine'))
        {
            mapRef.current.addSource('maine', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
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
        }
        mapRef.current.addLayer({
            'id': 'maine',
            'type': 'fill',
            'source': 'maine',
            'layout': {
            },
            'paint': {
                'fill-color': '#0080ff',
            }
        });
        mapRef.current.addLayer({
            'id': 'maine-outline',
            'type': 'line',
            'source': 'maine',
            'layout': {
            },
            'paint': {
                'line-color': '#000',
                'line-width': 3,
            }
        });
        if(!mapRef.current.getSource('arizona'))
        {
            mapRef.current.addSource('arizona', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                [-112.5989, 36.9993],
                                [-110.8630, 37.0004],
                                [-109.0475, 37.0004],
                                [-109.0503, 31.3325],
                                [-111.0718, 31.3325],
                                [-114.8126, 32.4935],
                                [-114.8099, 32.5184],
                                [-114.8044, 32.5827],
                                [-114.7992, 32.6246],
                                [-114.7474, 32.6700],
                                [-114.7014, 32.7457],
                                [-114.6176, 32.7342],
                                [-114.5819, 32.7422],
                                [-114.5393, 32.7584],
                                [-114.5095, 32.8167],
                                [-114.4696, 32.8450],
                                [-114.4817, 32.9107],
                                [-114.4803, 32.9741],
                                [-114.5256, 33.0317],
                                [-114.6094, 33.0259],
                                [-114.6588, 33.0317],
                                [-114.7096, 33.0904],
                                [-114.6849, 33.2065],
                                [-114.7220, 33.2846],
                                [-114.6973, 33.3546],
                                [-114.7258, 33.4051],
                                [-114.6533, 33.4120],
                                [-114.5888, 33.5016],
                                [-114.5599, 33.5317],
                                [-114.5187, 33.6306],
                                [-114.5297, 33.6786],
                                [-114.4940, 33.7083],
                                [-114.5036, 33.7609],
                                [-114.5284, 33.8157],
                                [-114.5325, 33.8545],
                                [-114.5380, 33.9285],
                                [-114.5235, 33.9530],
                                [-114.4748, 34.0049],
                                [-114.4308, 34.0299],
                                [-114.4363, 34.0891],
                                [-114.3526, 34.1357],
                                [-114.2908, 34.1720],
                                [-114.2255, 34.2044],
                                [-114.1685, 34.2595],
                                [-114.1301, 34.2572],
                                [-114.1397, 34.3037],
                                [-114.2276, 34.3664],
                                [-114.2633, 34.4012],
                                [-114.3388, 34.4534],
                                [-114.3608, 34.4930],
                                [-114.3811, 34.5292],
                                [-114.4377, 34.5959],
                                [-114.4569, 34.6547],
                                [-114.5297, 34.7506],
                                [-114.5847, 34.8172],
                                [-114.6341, 34.8724],
                                [-114.6313, 34.9490],
                                [-114.6351, 35.0342],
                                [-114.6451, 35.1019],
                                [-114.6190, 35.1233],
                                [-114.5682, 35.1716],
                                [-114.5984, 35.3364],
                                [-114.6643, 35.4506],
                                [-114.6753, 35.5780],
                                [-114.6547, 35.6171],
                                [-114.6918, 35.6528],
                                [-114.7028, 35.7053],
                                [-114.7093, 35.8050],
                                [-114.6602, 35.8679],
                                [-114.7426, 35.9836],
                                [-114.7536, 36.0891],
                                [-114.6794, 36.1124],
                                [-114.6327, 36.1423],
                                [-114.4872, 36.1301],
                                [-114.3690, 36.1445],
                                [-114.3038, 36.0746],
                                [-114.3172, 36.0602],
                                [-114.2451, 36.0163],
                                [-114.1438, 36.0402],
                                [-114.1150, 36.0979],
                                [-114.1274, 36.1101],
                                [-114.1054, 36.1190],
                                [-114.0463, 36.1989],
                                [-114.0450, 36.3638],
                                [-114.0508, 37.0001]
                            ]
                        ]
                    }
                }
            });
        }
        
        if(!mapRef.current.getLayer('arizona'))
        {
            mapRef.current.addLayer({
                'id': 'arizona',
                'type': 'fill',
                'source': 'arizona',
                'layout': {
                },
                'paint': {
                    'fill-color': '#0080ff',
                }
            });
        }
        if(!mapRef.current.getLayer('ari-outline'))
        {
            mapRef.current.addLayer({
                'id': 'ari-outline',
                'type': 'line',
                'source': 'arizona',
                'layout': {
                },
                'paint': {
                    'line-color': '#000',
                    'line-width': 3,
                }
            });
        }
        
        if(!mapRef.current.getSource('colorado'))
        {
            mapRef.current.addSource('colorado', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'geometry': {
                        'type': 'Polygon',
                        'coordinates': [
                            [
                                [-109.0448, 37.0004],
                                [-102.0424, 36.9949],
                                [-102.0534, 41.0006],
                                [-109.0489, 40.9996],
                                [-109.0448, 37.0004]
                            ]
                        ]
                    }
                }
            });
        }
        if(!mapRef.current.getLayer('colorado')){
            mapRef.current.addLayer({
                'id': 'colorado',
                'type': 'fill',
                'source': 'colorado',
                'layout': {},
                'paint': {
                    'fill-color': '#0080ff',
                }
            });
        }
        if(!mapRef.current.getLayer('col-outline'))
        {
            mapRef.current.addLayer({
                'id': 'col-outline',
                'type': 'line',
                'source': 'colorado',
                'layout': {},
                'paint': {
                    'line-color': '#000',
                    'line-width': 3
                }
            });
        }
    });
  });
  return (
    <div>
      <div id="map" style={{ width: '100%', height: '1000px' }}>
        <div style={sliderWrapperStyle}>
            <ReactSlider
                    className="horizontal-slider"
                    thumbClassName="example-thumb"
                    trackClassName="example-track"
                    onChange={setVal} // 
                    renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
            <Select options={selectOptions} className="selector" onChange={setDropDownVal}></Select>
        </div>
      </div>
    </div>
  );

}