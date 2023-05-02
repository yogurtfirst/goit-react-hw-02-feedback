import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import style from './Feedback.module.scss';
import PropTypes from 'prop-types';

export const Feedback = ({ state, onLeaveFeedback, countTotalFeedback, countPositiveFeedbackPercentage, }) => {
    return (
        <div className={style.feedback}>
            <Section title="Please leave your feedback" countTotalFeedback={countTotalFeedback}>
                <FeedbackOptions state={state} onLeaveFeedback={onLeaveFeedback} />
            </Section>

            {countTotalFeedback() === 0 ? ( <Notification message="There is no feedback" /> ) : (
                <Section title="Statistics" countTotalFeedback={countTotalFeedback}>
                    <Statistics state={state} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />
                </Section>
            )}
        </div>
    );
};

Feedback.propTypes = {
    state: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    countTotalFeedback: PropTypes.func.isRequired,
    countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Feedback;