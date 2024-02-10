import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from 'react-icons/bs';
import { IconContext } from 'react-icons';

//const icons = [<BsEmojiSmile />, <BsEmojiNeutral />, <BsEmojiFrown />];

export const FeedbackOptionsItem = ({ option, onLeaveFeedback }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        onLeaveFeedback(option);
      }}
    >
      <IconContext.Provider value={{ color: 'palevioletred', size: '24px' }}>
        {option === 'good' ? (
          <BsEmojiSmile />
        ) : option === 'bad' ? (
          <BsEmojiFrown />
        ) : (
          <BsEmojiNeutral />
        )}
      </IconContext.Provider>
      {option}
    </button>
  );
};
