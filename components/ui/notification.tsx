import ReactDOM from 'react-dom';

import classes from './notification.module.css';

export default function Notification(props: any) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;
  const notificationRoot = document.getElementById('notifications')

  return notificationRoot
    ? ReactDOM.createPortal(
      <div className={cssClasses}>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>,
      notificationRoot
    )
    : null;
}


