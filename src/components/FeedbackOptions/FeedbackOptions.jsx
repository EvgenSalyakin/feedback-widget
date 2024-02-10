import Styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={Styles.buttons}>
      {options.map(key => {
        return (
          <button
            className={Styles.btn}
            key={key}
            onClick={() => {
              onLeaveFeedback(key);
            }}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
