import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

function NotFound() {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '200px',
  };
  return (
    <div style={style}>
      <h1>Oops!</h1>
      <h3>404 - Page not found</h3>
      <br />
      <h3>
        <Link to='/'>
          <Button type='primary'>
            <HomeOutlined /> Back To Home
          </Button>
        </Link>
      </h3>
    </div>
  );
}

export default NotFound;
