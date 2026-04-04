import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1 className="display-1 fw-bold text-secondary">404</h1>
      <p className="text-secondary mb-4">Page not found</p>
      <Link to="/" className="btn btn-primary-custom px-4">Go Home</Link>
    </div>
  );
}

export default NotFound;
