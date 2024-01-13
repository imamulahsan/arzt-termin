import React from "react";
import { Col, Row } from "antd";
import familyImage from "../images/family-bg.svg";
import diagnosisImage from "../images/diagnosis-bg.svg";
import activityImage from "../images/activity-bg.svg";

const Services = () => {
  const gutter = {
    xs: 8,
    sm: 16,
    md: 24,
    lg: 32,
    xl: 20,
  };
  // Custom styles for Row components
  const rowStyle = {
    marginBottom: 20, // Increase the bottom margin
    padding: 20, // Increase the padding
  };
  return (
    <>
      <div className="services-header">
        <h2>Our Services</h2>
      </div>
      <div className="services-container">
        <Row gutter={gutter} style={rowStyle}>
          <Col
            xs={20}
            sm={16}
            md={12}
            lg={2}
            xl={4}
            className="centered-column"
          >
            <div className="centered-content">
              <p>Family Plan</p>
            </div>
          </Col>
          <Col
            xs={20}
            sm={16}
            md={12}
            lg={2}
            xl={4}
            className="centered-column"
          >
            <div className="centered-content">
              <img alt="example" src={familyImage} />
            </div>
          </Col>
          <Col xs={2} sm={4} md={6} lg={20} xl={16} className="centered-column">
            We advise and treat you holistically and individually to maintain
            and improve your physical and mental well-being. We ensure
            comprehensive, holistic and continuous care for the entire family –
            from toddlers to grandparents.
          </Col>
        </Row>

        <Row gutter={gutter} style={rowStyle}>
          <Col
            xs={24}
            sm={16}
            md={12}
            lg={2}
            xl={4}
            className="centered-column"
          >
            <div className="centered-content">
              <p>Diagnosis</p>
            </div>
          </Col>

          <Col
            xs={20}
            sm={16}
            md={12}
            lg={2}
            xl={4}
            className="centered-column"
          >
            <div className="centered-content">
              <img alt="example" src={diagnosisImage} />
            </div>
          </Col>

          <Col
            xs={24}
            sm={4}
            md={6}
            lg={20}
            xl={16}
            className="centered-column"
          >
            Laboratory tests ECG examinations Spirometry Long-term blood
            pressure measurement We carry out all vaccinations and all
            preventive services from statutory and private health insurance
            companies.
          </Col>
        </Row>

        <Row gutter={gutter} style={rowStyle}>
          <Col
            xs={24}
            sm={16}
            md={12}
            lg={2}
            xl={4}
            className="centered-column"
          >
            <div className="centered-content">
              <p>Personal Monitioring</p>
            </div>
          </Col>

          <Col
            xs={20}
            sm={16}
            md={12}
            lg={2}
            xl={4}
            className="centered-column"
          >
            <div className="centered-content">
              <img alt="example" src={activityImage} />
            </div>
          </Col>
          <Col
            xs={24}
            sm={4}
            md={6}
            lg={20}
            xl={16}
            className="centered-column"
          >
            The aim is to improve the early detection and treatment of mental
            illnesses when they occur as a concomitant illness of somatic
            complaints. You choose your family doctor as the first point of
            contact for all medical questions and, together with him, you
            benefit from many advantages.
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Services;
