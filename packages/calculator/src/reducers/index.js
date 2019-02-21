/* eslint-disable no-param-reassign */
import { createReducer } from '@vd/utils'
import * as actions from '../constants'

const initialState = {
  providers: [
    {
      name: 'Loving Hut',
      percent: 10,
      keys: [
        {
          cost: 0,
          amount: 1,
        },
      ],
    },
  ],
  deliveryCost: 0,
  currierSurcharge: 0,
}

export default createReducer(initialState, {
  [actions.change]: (state, { field, value }) => ({ ...state, [field]: value }),
  [actions.changeCost]: (state, { value, providerIndex, positionIndex }) => {
    const newState = {
      ...state,
      providers: [
        ...state.providers.slice(0, providerIndex),
        {
          ...state.providers[providerIndex],
          keys: [
            ...state.providers[providerIndex].keys.slice(0, positionIndex),
            {
              ...state.providers[providerIndex].keys[positionIndex],
              cost: value,
            },
            ...state.providers[providerIndex].keys.slice(positionIndex + 1),
          ],
        },
        ...state.providers.slice(providerIndex + 1),
      ],
    }

    return {
      ...newState,
    }
  },
  [actions.changeAmount]: (state, { value, providerIndex, positionIndex }) => {
    const newState = {
      ...state,
      providers: [
        ...state.providers.slice(0, providerIndex),
        {
          ...state.providers[providerIndex],
          keys: [
            ...state.providers[providerIndex].keys.slice(0, positionIndex),
            {
              ...state.providers[providerIndex].keys[positionIndex],
              amount: value,
            },
            ...state.providers[providerIndex].keys.slice(positionIndex + 1),
          ],
        },
        ...state.providers.slice(providerIndex + 1),
      ],
    }

    return {
      ...newState,
    }
  },
  [actions.changePercent]: (state, { value, providerIndex }) => {
    state.providers[providerIndex].percent = value


    return ({
      ...state,
    })
  },
  [actions.addPosition]: (state, { providerIndex }) => {
    const newState = {
      ...state,
      providers: [
        ...state.providers.slice(0, providerIndex),
        {
          ...state.providers[providerIndex],
          keys: [
            ...state.providers[providerIndex].keys,
            {
              cost: 0,
              amount: 1,
            },
          ],
        },
        ...state.providers.slice(providerIndex + 1),
      ],
    }

    return ({
      ...newState,
    })
  },
  [actions.removePosition]: (state, { providerIndex }) => {
    const array = state.providers[providerIndex].keys

    const newState = {
      ...state,
      providers: [
        ...state.providers.slice(0, providerIndex),
        {
          ...state.providers[providerIndex],
          keys: [
            ...array.filter((item, index) => index !== array.length - 1),
          ],
        },
        ...state.providers.slice(providerIndex + 1),
      ],
    }

    return ({
      ...newState,
    })
  },
  [actions.addProvider]: (state) => {
    const newState = {
      ...state,
      providers: [
        ...state.providers.slice(0, state.providers.length),
        initialState.providers[0],
        ...state.providers.slice(state.providers.length + 1),
      ],
    }

    return ({
      ...newState,
    })
  },
  [actions.removeProvider]: (state) => {
    const newState = {
      ...state,
      providers: state.providers.filter((item, index, array) => index !== array.length - 1),
    }

    return ({
      ...newState,
    })
  },
})
