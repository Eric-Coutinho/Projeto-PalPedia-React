import React from "react";
import { ImageOverlay, MapContainer, TileLayer } from 'react-leaflet';
import gameMapTile from './GameMap.png'

const GameMap = () => {
    const position = [0, 0];
    return(
        <MapContainer center={position} zoom={1} style={{ width: "100%", height: "50vh" }}>
             <TileLayer url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0B-WKACEHoJ5PJ8xqY2p9HKRjBiGivT0UfacC1_15t5Y29LliKAD4lDCH62ZCZSUwuM&usqp=CAU/{z}/{x}/{y}.png" />
        </MapContainer>
    )
}

export default GameMap;