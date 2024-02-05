import React, { useState, useEffect } from 'react';

const Notification = ({ message, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(false);
      onClose();
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [onClose]);

  return (
    <div className={`notification ${visible ? 'show' : 'hide'}`}>
      <p className="text-center font-weight-bold">{message}</p>
    </div>
  );
};

export default Notification;