import React from "react";
import { Card, Col, Row } from "antd";

const newsData = [
  {
    title: "New Services Offered",
    content: "We now provide additional services for our patients.",
  },
  {
    title: "Upcoming Events",
    content: "Join us for the health awareness event on January 15th.",
  },
  {
    title: "Upcoming Events",
    content: "Join us for the health awareness event on January 15th.",
  },
  {
    title: "Upcoming Events",
    content: "Join us for the health awareness event on January 15th.",
  },
  // Add more news items as needed
];

const Currentnews = () => {
  return (
    <>
      <div className="services-header">
        <h1>Current News</h1>
      </div>
      <div className="services-container">
        <Row gutter={16}>
          {newsData.map((news, index) => (
            <Col key={index} xs={24} sm={12} md={8} lg={6}>
              <Card title={news.title} bordered={false}>
                <p>{news.content}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Currentnews;
