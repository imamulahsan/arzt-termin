import React from "react";
import { Card, Col, Row } from "antd";
import { doctorTeam } from "../data/teamdata";
import Navbar from "../components/Navbar";

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="services-header">
        <h2>Our Team</h2>
      </div>

      <div className="services-container">
        <Row gutter={8}>
          {doctorTeam.map((member, index) => (
            <Col key={index} span={8} className="info-col">
              <Card title={member.name} bordered={false} className="info-card">
                <p>{member.specialization}</p>
                <p>{member.experience}</p>
                <p>{member.timings}</p>
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ width: "100%", height: "50%" }}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Team;
