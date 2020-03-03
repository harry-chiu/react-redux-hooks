import { counterConstants } from '../constants';

const { INCREASE, DECREASE } = counterConstants;

const increase = () => ({ type: INCREASE });

const decrease = () => ({ type: DECREASE });

export const counterActions = {
    increase,
    decrease
};