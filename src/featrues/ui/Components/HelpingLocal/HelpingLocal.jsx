import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { helpingLocal } from "../../../data/helpingLocalServices";
import { FaUsers, FaProjectDiagram, FaAward, FaGlobe } from "react-icons/fa";
import HelpingLocalTile from "./HelpingLocalTile/HelpingLocalTile";
import "./HelpingLocal.css";
const HelpingLocal = () => {
  const iconMap = {
    FaUsers: <FaUsers size={40} color="#4CAF4F" />,
    FaProjectDiagram: <FaProjectDiagram size={40} color="#4CAF4F" />,
    FaAward: <FaAward size={40} color="#4CAF4F" />,
    FaGlobe: <FaGlobe size={40} color="#4CAF4F" />,
  };
  return (
    <section className="HelpingLocal">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="HelpingLocalContent">
              <Col lg={8}>
                <h2>
                  {helpingLocal.left.title}{" "}
                  <span>{helpingLocal.left.titleSpan}</span>
                </h2>
              </Col>
              <p>{helpingLocal.left.description}</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="helpingLocalTiles">
              {helpingLocal.right.map((tile, i) => (
                <HelpingLocalTile
                  label={tile.label}
                  icon={iconMap[tile.icon]}
                  number={tile.number}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HelpingLocal;
