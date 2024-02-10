// export const FeedbackOptions = ({ children, ...props }) => {
//   return <ButtonsPanel {...props}>{children}</ButtonsPanel>;
// };

import { FeedbackOptionsItem } from 'components';
import { ButtonsPanel } from './FeedbackOptions.module';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsPanel>
      {options.map(key => {
        return (
          <FeedbackOptionsItem
            key={key}
            option={key}
            onLeaveFeedback={onLeaveFeedback}
          />
        );
      })}
    </ButtonsPanel>
  );
};
