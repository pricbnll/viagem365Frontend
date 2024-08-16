import { Marker, Popup, useMap } from "react-leaflet";
import PropTypes from "prop-types";
import { useEffect } from "react";

function MarcadoresMap({ localidades }) {
  const map = useMap();

  useEffect(() => {
    if (localidades && localidades.length > 0) {
      const primeiroDestino = localidades[0];
      map.flyTo(
        {
            lat: parseFloat(primeiroDestino.latitude),
            lng: parseFloat(primeiroDestino.longitude),
        },
        13,
        { animate: true }
      );
    }
  }, [localidades, map]);

  if (!localidades || localidades.length === 0) {
    return null;
  }

  return (
    <>
      {localidades.map((localidade) => (
        localidade.latitude && localidade.longitude && (
          <Marker
            position={[parseFloat(localidade.latitude), parseFloat(localidade.longitude)]}
            key={localidade.id}
          >
            <Popup>
              <p>{localidade.descricao}</p>
              <strong>{localidade.destino}</strong>
            </Popup>
          </Marker>
        )
      ))}
    </>
  );
}

MarcadoresMap.propTypes = {
  localidades: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      latitude: PropTypes.string.isRequired,
      longitude: PropTypes.string.isRequired,
      descricao: PropTypes.string.isRequired,
      destino: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MarcadoresMap;
