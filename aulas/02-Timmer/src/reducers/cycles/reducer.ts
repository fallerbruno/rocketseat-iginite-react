import { ActionTypes } from './actions'
import { produce } from 'immer'

export interface Cycle {
  id: string
  task: string
  minutesAmout: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case ActionTypes.START_NEW_CYCLE:
      // IMUTAVEL SEM IMMER
      // return {
      //   ...state,
      //   cycles: [...state.cycles, action.payload.newCycle],
      //   activeCycleId: action.payload.newCycle.id,
      // }
      // COM IMMER
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ActionTypes.INTERRUPT_CURRENT_CYCLE:
      // IMUTAVEL SEM IMMER
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, interruptedDate: new Date() }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null,
      // }
      // Com IMMER

      return produce(state, (draft) => {
        draft.activeCycleId = null

        const index = draft.cycles.findIndex((cycle) => {
          return cycle.id === state.activeCycleId
        })

        if (index < 0) {
          return state
        }

        draft.cycles[index].interruptedDate = new Date()
      })

    case ActionTypes.MARK_AS_FINISHED:
      // IMUTAVEL SEM IMMER
      // return {
      //   ...state,
      //   cycles: state.cycles.map((cycle) => {
      //     if (cycle.id === state.activeCycleId) {
      //       return { ...cycle, finishedDate: new Date() }
      //     } else {
      //       return cycle
      //     }
      //   }),
      //   activeCycleId: null,
      // }
      // COM IMMER
      return produce(state, (draft) => {
        draft.activeCycleId = null

        const index = draft.cycles.findIndex((cycle) => {
          return cycle.id === state.activeCycleId
        })

        if (index < 0) {
          return state
        }

        draft.cycles[index].finishedDate = new Date()
      })

    default:
      return state
  }
}
