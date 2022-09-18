import { StockOutlined, ReadOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const items = [
  {
    label: 'Book Summaries',
    key: 'book-summaries',
    icon: <ReadOutlined />,
  },
  {
    label: 'Stocks',
    key: 'stocks',
    icon: <StockOutlined />,
    // disabled: true,
  },
  {
    label: 'Real Estate',
    key: 'real-estate',
    icon: <HomeOutlined />,
  },
];

const Navigation = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState('/');

  const onClick = (e) => {
    console.log('click ', e);
    navigate(`/${e.key}`);
    setCurrent(e.key);
  };

  return (
    <Menu
      theme='dark'
      onClick={onClick}
      selectedKeys={[current]}
      mode='horizontal'
      items={items}
    />
  );
};

export default Navigation;
