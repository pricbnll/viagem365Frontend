import cardTravel from "../assets/card travel.png";
import Card from "react-bootstrap/Card";
import styles from "./localCard.module.css";
import PropTypes from "prop-types";

function LocalCard({ totalLocais }) {
  return (
    <>
      <Card style={{ width: "18rem" }} className={styles.cardContainer}>
        <Card.Body>
          <Card.Title>Seus destinos</Card.Title>
          <div className={styles.cardLocal}>
            <p className={styles.totalText}>Total: {totalLocais}</p>
            <img
              className={styles.module}
              src={cardTravel}
              alt="Ícone de avião em mapa"
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

LocalCard.propTypes = {
  totalLocais: PropTypes.number.isRequired,
};

export default LocalCard;
