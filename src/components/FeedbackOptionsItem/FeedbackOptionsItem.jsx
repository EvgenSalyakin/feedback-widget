import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import style from './FeedbackOptionsItem.module.css';

//const icons = [<BsEmojiSmile />, <BsEmojiNeutral />, <BsEmojiFrown />];

export const FeedbackOptionsItem = ({ option, onLeaveFeedback }) => {
  return (
    <a
      className={style.btn}
      onClick={() => {
        onLeaveFeedback(option);
      }}
    >
      <IconContext.Provider
        className="icon"
        value={{ color: 'palevioletred', size: '24px' }}
      >
        {option === 'good' ? (
          <BsEmojiSmile />
        ) : option === 'bad' ? (
          <BsEmojiFrown />
        ) : (
          <BsEmojiNeutral />
        )}
      </IconContext.Provider>
      {option}
    </a>
  );
};
