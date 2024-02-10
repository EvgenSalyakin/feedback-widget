import style from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={style.section}>
      {title}: {children}
    </section>
  );
};
