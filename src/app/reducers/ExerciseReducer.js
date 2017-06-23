import { EXERCISE_ACTIONS } from '../utilities/constants';
import update from 'immutability-helper';

const defaultState = { showModal: false };

export const exerciseData = (state=defaultState, action) => {
  switch(action.type) {
    case EXERCISE_ACTIONS.closeModal:
      return toggleExerciseModalDislpay(state, action.payload);
    default:
      return state;
  }
};

const toggleExerciseModalDislpay = (state, payload) => {
  return update(state, {
    showModal: { $set: payload }
  });
};
