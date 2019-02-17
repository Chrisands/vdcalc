/* eslint-disable no-param-reassign */
import { createReducer } from '@vd/utils'
import * as actions from '../constants'

const initialState = {
  providers: [
    {
      name: 'Loving Hut',
      percent: 20,
      costs: [250, 150],
      amounts: [1, 2],
    },
  ],
}

export default createReducer(initialState, {
  [actions.changeCost]: (state, { value, providerIndex, positionIndex }) => {
    state.providers[providerIndex].costs[positionIndex] = value

    return {
      ...state,
    }
  },
  [actions.changeAmount]: (state, { value, providerIndex, positionIndex }) => {
    state.providers[providerIndex].amounts[positionIndex] = value

    return {
      ...state,
    }
  },
  [actions.changePercent]: (state, { value, providerIndex }) => {
    state.providers[providerIndex].percent = value

    return ({
      ...state,
    })
  },
  [actions.addPositions]: (state, { providerIndex }) => {
    const provider = state.providers[providerIndex]

    provider.costs.splice(provider.costs.length, 0, 0)
    provider.amounts.splice(provider.amounts.length, 0, 0)

    return ({
      ...state,
    })
  },
  [actions.removePositions]: (state, { providerIndex }) => {
    const provider = state.providers[providerIndex]


    provider.costs.splice(provider.costs.length - 1, 1)
    provider.amounts.splice(provider.amounts.length - 1, 1)

    return ({
      ...state,
    })
  },
})
