import * as actions from '../constants'

export const change = (field, value) => ({
  type: actions.change,
  field,
  value,
})

export const changeCost = (value, providerIndex, positionIndex) => ({
  type: actions.changeCost,
  value,
  providerIndex,
  positionIndex,
})

export const changeAmount = (value, providerIndex, positionIndex) => ({
  type: actions.changeAmount,
  value,
  providerIndex,
  positionIndex,
})

export const changePercent = (value, providerIndex) => ({
  type: actions.changePercent,
  value,
  providerIndex,
})

export const changePositions = (value, providerIndex) => async (dispatch, getState) => {
  const { providers } = getState().calculator

  if (value > providers[providerIndex].keys.length) {
    dispatch({
      type: actions.addPosition,
      providerIndex,
    })
  } else if (value < providers[providerIndex].keys.length) {
    dispatch({
      type: actions.removePosition,
      providerIndex,
    })
  }
}

export const addProvider = () => ({
  type: actions.addProvider,
})

export const removeProvider = () => async (dispatch, getState) => {
  const { providers } = getState().calculator

  if (providers.length > 1) {
    dispatch({
      type: actions.removeProvider,
    })
  }
}
