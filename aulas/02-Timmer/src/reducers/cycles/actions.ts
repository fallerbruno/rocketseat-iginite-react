import { Cycle } from './reducer'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  START_NEW_CYCLE = 'START_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_AS_FINISHED = 'MARK_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.START_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}

export function markAsFinishedCycleAction() {
  return {
    type: ActionTypes.MARK_AS_FINISHED,
  }
}
