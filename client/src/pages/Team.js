import React from "react";
import { Card, Col, Row, Image } from "antd";
import { doctorTeam } from "../data/teamdata";
import Navbar from "../components/Navbar";

const Team = () => {
  return (
    <>
      <Navbar />
      <div className="team-header">
        <h2>Our Team</h2>
      </div>
      <div className="team-description">
        <p>
          Meet our dedicated team of healthcare professionals committed to
          providing quality care.
        </p>
        <p>
          "Our strength is in our unity, and our passion is in our service."
        </p>
      </div>

      <div className="team-container">
        <Row gutter={8}>
          {doctorTeam.map((member, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={8} className="team-col">
              <Card bordered={false} className="team-card">
                <h2>{member.name}</h2>
                <h3>{member.specialization}</h3>
                <p>{member.experience}</p>
                <p>{member.timings}</p>
                <Image src={member.photo} alt={member.name} preview={true} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Team;
