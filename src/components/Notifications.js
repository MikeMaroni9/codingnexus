import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NotificationComponent = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Fetch notifications from the backend API
    axios.get('/api/get-notifications')
      .then(response => setNotifications(response.data))
      .catch(error => console.error('Error fetching notifications', error));
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            {notification.sender.username} {notification.notification_type} your {notification.post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationComponent;