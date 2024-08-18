import PropTypes from "prop-types";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarcadoresMap from "./MarcadoresMap";
import styles from "./map.module.css";

function Map({ localidades }) {
 const position = [-27.614160537150866, -48.504904703694876];

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MarcadoresMap localidades={localidades} />
      </MapContainer>
    </div>
  );
}

Map.propTypes = {
  localidades: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      descricao: PropTypes.string.isRequired,
      destino: PropTypes.string.isRequired,
    }).isRequired
  )
};

export default Map;
