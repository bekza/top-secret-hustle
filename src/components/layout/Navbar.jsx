import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Col, Row, Button, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HolderOutlined } from '@ant-design/icons';
import Navigation from './Navigation';
const { Text, Title } = Typography;

function Navbar({ title }) {
  return (
    <div className='nav-bar' style={{ margin: '0 auto', maxWidth: '980px' }}>
      <Row>
        <Col
          xs={{ span: 12 }}
          s={{ span: 12 }}
          md={{ span: 8 }}
          lg={{ span: 6 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Link to='/'>
            <Title level={4}>
              <Text code style={{ color: '#fff', display: 'inline' }}>
                <HolderOutlined />
                {title}
              </Text>
            </Title>
          </Link>
        </Col>
        <Col
          xs={{ span: 12 }}
          s={{ span: 12 }}
          md={{ span: 16 }}
          lg={{ span: 18 }}
        >
          {/* <Link to='/'>
            <Title level={4}>
              <Text code style={{ color: '#fff', display: 'inline' }}>
                All Posts
              </Text>
            </Title>
          </Link> */}
          <Navigation />
        </Col>
      </Row>
    </div>
  );
}

Navbar.defaultProps = {
  title: 'TopSecretHustle',
};

Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
