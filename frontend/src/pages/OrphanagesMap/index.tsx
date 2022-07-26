import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlus } from "react-icons/fi";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import mapMarkerImg from "../../assets/images/map-marker.svg";

import "./styles.css";

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :</p>
        </header>

        <footer>
          <strong>Jahu</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <MapContainer
        center={[-22.0678185, -48.7492684]}
        zoom={15}
        style={{ width: "100%", height: "100%" }}
      >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/${z}/${x}/${y}.png" /> */}
        {/* <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        /> */}
      </MapContainer>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
