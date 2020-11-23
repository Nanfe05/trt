import React from 'react';

import GoogleMapReact from 'google-map-react';
import BusinessIcon from '../BusinessIcon/businessIcon';

import businessLocations from '../../context/locations.json';
import mapStyle from '../../context/mapStyle.json';

const Map = () =>{

    const center = {
        lat:4.640350815354163,
        lng:-74.06226301494553
    };
    const containerStyle = {
        minWidth: '100vw',
        minHeight: '400px',
        flex:'1 0 auto'
      };

    return(
    <div style={containerStyle}>
        <GoogleMapReact 
            bootstrapURLKeys={{
                key:process.env.REACT_APP_GOOGLE_MAPS_API,
                language:'es',
                region:'col'
            }}
            defaultCenter={center}
            defaultZoom={17}
            options={(maps)=>{
                return ({
                    styles:mapStyle,
                    fullscreenControl:false
                });
            }}
        >
            {businessLocations.map((el,i)=>{
                return(
                        <BusinessIcon
                        key={`map-marker-${i}`}
                        lat={el.lat}
                        lng={el.lng}
                        element={el}
                        />
                );
            })}
        </GoogleMapReact>
    </div>
    );
}


export default React.memo(Map);