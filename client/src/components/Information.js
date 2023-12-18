import React from "react";
import { Card, Col, Row } from "antd";
import openingImage from "../images/opening-hour-bg.svg";
import mapImage from "../images/map-bg.svg";
import contactImage from "../images/contact-us-bg.svg";

const Information = () => {
  return (
    <>
      <div className="info-container">
        <Row gutter={8}>
          <Col span={8} className="info-col">
            <Card bordered={false} className="info-card">
              <div className="card-text">
                <h3>Opening Hours</h3>
                <p>9 AM till 6 PM</p>
              </div>
              <div className="card-image">
                <img alt="example" width="100%" src={openingImage} />
              </div>
            </Card>
          </Col>
          <Col span={8} className="info-col">
            <Card bordered={false} className="info-card">
              <div className="card-text">
                <h3>Location</h3>
                <p>Vettersstraße 54/110, 09126, Chemnitz</p>
              </div>
              <div className="card-image">
                <img alt="example" width="100%" src={mapImage} />
              </div>
            </Card>
          </Col>
          <Col span={8} className="info-col">
            <Card bordered={false} className="info-card">
              <div className="card-text">
                <h3>Contact Us</h3>
                <p>Available 24 hours</p>
              </div>
              <div className="card-image">
                <img alt="example" width="100%" src={contactImage} />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Information;
