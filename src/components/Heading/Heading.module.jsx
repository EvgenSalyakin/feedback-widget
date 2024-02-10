import Styles from './Heading.module.css';

export const Heading = () => {
  return (
    <div className={Styles.heading}>
      <div className={Styles.info}>
        <h1 className={Styles.h1}>Expresso</h1>
      </div>
    </div>
  );
};
