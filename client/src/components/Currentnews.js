import React from "react";
import { Card, Col, Row } from "antd";

const newsData = [
  {
    title: "New Services Offered",
    content:
      "We now provide additional services for our patients including eye and dental care.",
  },
  {
    title: "Upcoming Events",
    content:
      "Join us for the health awareness event on January 2024. Free health kits to be provided.",
  },
  {
    title: "Free Health Checkup",
    content:
      "If you have TK insurance you can have free health checkup on February 21st onwards.",
  },
  {
    title: "Vaccination",
    content:
      "We will be starting Corona vaccination campagin for March 2024 onwards",
  },
  // Add more news items as needed
];

const Currentnews = () => {
  return (
    <>
      <div className="currentnews-header">
        <h2>Current News</h2>
      </div>
      <div className="currentnews-container">
        <Row gutter={16}>
          {newsData.map((news, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              className="currentnews-col"
            >
              <Card
                title={news.title}
                bordered={false}
                className="currentnews-card"
              >
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
