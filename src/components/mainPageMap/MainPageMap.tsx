import React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { MainPageMapWrapper } from './MainPageMapElements'

const MainPageMap = () => {

    const position: any = [51.505, -0.09]

    return (
        <MainPageMapWrapper>
            <MapContainer className="map-container" center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </MainPageMapWrapper>
    )
}

export default MainPageMap
