import Feedback from './Feedback/Feedback';
import React, { Component } from 'react';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    onLeaveFeedback = event => {
        this.setState(prevState => ({[event.target.name]: prevState[event.target.name] + 1}));
    };

    countTotalFeedback = () => Object.values(this.state).reduce((total, next) => total + next, 0);

    countPositiveFeedbackPercentage = () => {
        const positivePercentage = Math.round(this.state.good * 100 / this.countTotalFeedback());
        return !positivePercentage ? 0 : positivePercentage;
    };

    render() {
        return (
            <Feedback
                state={this.state}
                onLeaveFeedback={this.onLeaveFeedback}
                countTotalFeedback={this.countTotalFeedback}
                countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />
        );
  };
}