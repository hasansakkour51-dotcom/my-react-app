import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AboutUsFirstSection.css"
import { Container, Row , Col} from "react-bootstrap";

const AboutUsFirstSection = ({ title, description, image ,btnText}) => {
  return (
    <section className="AboutUsSection">
      <Container>
        <Row className="align-items-center">
          <Col lg={6}>
            <div>
              <img src={image} alt="aboutUsImage" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="aboutUsContent d-flex flex-column gap-3">
              <h3>{title}</h3>
              <p>{description}</p>
              <Col lg={3}>
                <a href="">{btnText}</a>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUsFirstSection;
