import { Fragment } from 'react';
import style from './Statistics.module.scss';
import PropTypes from 'prop-types';

export const Statistics = ({ state, total, positivePercentage }) => (
    <Fragment>
        {Object.keys(state).map(value => (
            <p key={value} name={value} className={`${style.statistics__item} ${style.statistics__state}`}>
                {value}: {state[value]}
            </p>
        ))}
        <p className={style.statistics__item}>Total: {total()}</p>
        <p className={style.statistics__item}>Positive feedback: {positivePercentage()}%</p>
    </Fragment>
);

Statistics.propTypes = {
    state: PropTypes.object.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};