import React from 'react';

const CardHeader = ({ children, className = '' }) => (
  <div className={`p-4 border-b ${className}`}>
    {children}
  </div>
);

export default CardHeader;
