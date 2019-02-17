import * as actions from '../constants'

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

  if (value > providers[providerIndex].costs.length) {
    dispatch({
      type: actions.addPositions,
      providerIndex,
    })
  } else if (value < providers[providerIndex].costs.length) {
    dispatch({
      type: actions.removePositions,
      providerIndex,
    })
  }
}

// eslint-disable-next-line no-unused-vars
export const changeProviders = value => async (dispatch, getState) => {
  console.log(value)
}
