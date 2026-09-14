import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Banner.css";
import { bannerServices } from "../../../../featrues/data/bannerServices";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Container, Row, Col } from "react-bootstrap";
import { Navigation, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

const Banner = () => {
    const [banner, setBannerServices] = useState([]);
    useEffect(() => {
        setBannerServices(bannerServices);
    }, []);
  return (
    <>
      <div className="banner">
        <Container>
          <Row>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
            >
              {banner.map((service, index) => (
                <SwiperSlide key={index}>
                  <Row className="rowBanner align-items-center">
                    <Col lg={7}>
                      <div className="bannerContent d-flex flex-column gap-3">
                        <h1>
                          {service.title} <span>{service.titleSpan}</span>
                        </h1>
                        <p>{service.description}</p>
                        <Col lg={3}>
                          <a href="">{service.btnText}</a>
                        </Col>
                      </div>
                    </Col>
                    <Col lg={5}>
                      <div className="bannerImage">
                        <img src={service.imageBanner} alt="banner" />
                      </div>
                    </Col>
                  </Row>
                </SwiperSlide>
              ))}
            </Swiper>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Banner;
