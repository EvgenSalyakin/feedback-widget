import style from './Notification.css';

export const Notification = ({ message }) => {
  return <p className={style.p}>{message}</p>;
};
