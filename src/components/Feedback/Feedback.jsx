import { Component } from 'react';
import {
  FeedbackDiv,
  FeedbackBtnDiv,
  FeedbackBtn,
  FeedbackText,
} from './Feedback.styled';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
    //console.log(this.state.good);
  };
  handleClickNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleClickBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  countTotalFeedback = state => {
    return state.good + state.neutral + state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback(this.state);
    return total > 0 ? ((100 * good) / total).toFixed(0) : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback(this.state);
    const positiveFeedback = this.countPositiveFeedbackPercentage(this.state);
    return (
      <FeedbackDiv>
        <h1>Please leave feedback</h1>
        <FeedbackBtnDiv>
          <FeedbackBtn onClick={this.handleClickGood}>Good</FeedbackBtn>
          <FeedbackBtn onClick={this.handleClickNeutral}>Neutral</FeedbackBtn>
          <FeedbackBtn onClick={this.handleClickBad}>Bad</FeedbackBtn>
        </FeedbackBtnDiv>
        <h2>Statistics</h2>
        <FeedbackText>Good:{this.state.good}</FeedbackText>
        <FeedbackText>Neutral:{this.state.neutral}</FeedbackText>
        <FeedbackText>Bad: {this.state.bad}</FeedbackText>
        <FeedbackText>Total: {totalFeedback}</FeedbackText>
        <FeedbackText>Positive feedback: {positiveFeedback} %</FeedbackText>
      </FeedbackDiv>
    );
  }
}
