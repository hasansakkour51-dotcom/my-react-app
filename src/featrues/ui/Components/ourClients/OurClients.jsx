import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  ourClientsIcons,
  ourClientsCards,
} from "../../../../featrues/data/ourClientsServices";
import "./OurClients.css";
import { DiAndroid, DiAtom, DiBackbone } from "react-icons/di";
import OurClientsTile from "./OurClientsTile/OurClientsTile";
import { useEffect, useState } from "react";

const OurClients = () => {

  const [clientsIcon, setClientsIcon] = useState([]);
  const [clientsCard, setClientsCard] = useState([]);
  useEffect(() => {
    setClientsIcon(ourClientsIcons);
    setClientsCard(ourClientsCards);
  }, []);
  return (
    <section className="OurClients">
      <Container>
        <Row>
          <Col lg={12}>
            <div className="OurClientsContent text-center">
              <h2>Our Clients</h2>
              <p>We have been working with some Fortune 500+ clients</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="OurClientsgrid">
              {clientsIcon.map((service, index) => (
                <div key={index}>
                  <img src={service.icon} alt="icon" />
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center my-4">
          <Col lg={5}>
            <div className="OurClientsContent text-center">
              <h2>Manage your entire community in a single system</h2>
              <p>Who is Nextcent suitable for?</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="OurClientsCardGrid mt-3 mb-2">
              {clientsCard.map((service, index) => (
                <OurClientsTile
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default OurClients;
