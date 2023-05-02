import style from './FeedbackOptions.module.scss';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ state, onLeaveFeedback }) => (
    <div className={style.buttonWrapper}>
        {Object.keys(state).map(value => (
            <button key={value} onClick={onLeaveFeedback} name={value} className={style.btn}>
                {value}
            </button>
        ))}
    </div>
);

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    state: PropTypes.object.isRequired,
};