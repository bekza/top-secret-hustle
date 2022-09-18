import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import RichDadPoorDad from './pages/RichDadPoorDad';
import BookSummaries from './pages/BookSummaries';
import NotFound from './pages/NotFound';
import 'antd/dist/antd.min.css';

const { Header, Footer, Content } = Layout;
const footerYear = new Date().getFullYear();

function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <Navbar />
        </Header>

        {/* <Content style={{ maxWidth: '980px', margin: '20px auto' }}> */}
        <Content style={{ padding: '20px' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/rich-dad-poor-dad' element={<RichDadPoorDad />} />
            <Route path='/book-summaries' element={<BookSummaries />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </Content>
        <Footer
          style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
          }}
        >
          TopSecretHustle {footerYear}
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
