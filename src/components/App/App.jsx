import { Heading, FeedbackOptions, Statistics, Notification } from 'components';
import { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total !== 0) return (100 * this.state.good) / total;
    else return 0;
  };

  handleClick = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  render() {
    const total = this.countTotalFeedback();
    return (
      <>
        <Heading />
        <FeedbackOptions
          options={Object.getOwnPropertyNames(this.state)}
          onLeaveFeedback={this.handleClick}
        />
        {total !== 0 ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </>
    );
  }
}

export default App;
