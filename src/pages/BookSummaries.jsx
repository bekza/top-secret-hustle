import React from 'react';
import { Card, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';
import img from '../assets/richDadPoorDad.jpg';
const BookSummaries = () => {
  const { Meta } = Card;
  const navigate = useNavigate();
  return (
    <div
      className='site-card-wrapper'
      style={{
        margin: '0 auto',
        maxWidth: '980px',
      }}
    >
      <h1>Book Summaries</h1>
      <Row gutter={24}>
        <Col span={8}>
          <Card
            onClick={() => navigate('/rich-dad-poor-dad')}
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt='example' src={img} />}
          >
            <Meta title='Rich Dad Poor Dad' description='Robert Kiyosaki' />
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Atomic Habits' bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title='Card title' bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BookSummaries;
