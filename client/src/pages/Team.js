import React from "react";
import { Card, Col, Row } from "antd";
import { doctorTeam } from "../data/teamdata";

const Team = () => {
  return (
    <>
      <div className="services-header">
        <h2>Our Team</h2>
      </div>

      <div className="services-container">
        <Row gutter={8}>
          {doctorTeam.map((member, index) => (
            <Col key={index} span={8} className="info-col">
              <Card title={member.name} bordered={false} className="info-card">
                <img
                  src={member.photo}
                  alt={member.name}
                  style={{ width: "100%", height: "50%" }}
                />
                <p>{member.profession}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Team;
