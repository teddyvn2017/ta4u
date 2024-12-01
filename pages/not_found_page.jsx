import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 style={{ fontSize: '3rem', color: '#ff0000' }}>404</h1>
      <h2>Oops! Trang bạn tìm kiếm không tồn tại.</h2>
      <p>Vui lòng kiểm tra lại URL hoặc quay về trang chủ.</p>
      <Link to="/" style={{ color: '#007bff', textDecoration: 'none', fontSize: '1.2rem' }}>
        ⬅️ Quay lại Trang Chủ
      </Link>
    </div>
  );
};

export default NotFoundPage;
