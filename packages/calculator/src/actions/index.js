import { Decimal } from 'decimal.js-light'
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

export const changeProvider = (field, value, providerIndex) => ({
  type: actions.changeProvider,
  field,
  value,
  providerIndex,
})

export const changeProviderSum = (field, value, providerIndex) => async (dispatch, getState) => {
  const { providers } = getState().calculator

  if (providers[providerIndex].sum !== value) {
    dispatch({
      type: actions.changeProvider,
      field,
      value,
      providerIndex,
    })
  }
}

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

export const copyData = () => async (dispatch, getState) => {
  const textArea = document.createElement('textarea')
  const { providers, deliveryCost, currierSurcharge } = getState().calculator

  let managerProfit = new Decimal(0)
  let itemsCost = new Decimal(0)

  for (let i = 0; i < providers.length; i += 1) {
    let providerSum = new Decimal(0)
    for (let j = 0; j < providers[i].keys.length; j += 1) {
      const item = providers[i].keys[j]
      itemsCost = itemsCost
        .plus(new Decimal(item.cost)
          .times(item.amount))
      managerProfit = managerProfit
        .plus(new Decimal(
          new Decimal(item.cost)
            .times(item.amount))
          .times(new Decimal(providers[i].percent)
            .dividedBy(100)))
      providerSum = providerSum.plus((new Decimal(item.cost)
        .times(item.amount))
        .minus(new Decimal(
          new Decimal(item.cost)
            .times(item.amount))
          .times(new Decimal(providers[i].percent)
            .dividedBy(100))))
    }
  }

  const items = (provider) => {
    const list = provider.keys.map(key => `- ${key.cost} * ${key.amount}`)

    return list.reduce((a, b) => `${a}\n ${b}`)
  }

  const providersItems = providers.map(provider => `${provider.name}, скидка ${provider.percent}%
    
 ${items(provider)}
 
 ${provider.sum} заплатить в ${provider.name}
    `,
  )

  textArea.value = `${providersItems.reduce((a, b) => `${a}\n ${b}`)}
 ${itemsCost.plus(deliveryCost).toNumber()} клиент, ${deliveryCost + currierSurcharge} курьеру, ${managerProfit.minus(
  currierSurcharge).toNumber()} менеджеру
 `

  document.body.appendChild(textArea)

  textArea.select()
  document.execCommand('copy')
  document.body.removeChild(textArea)
}
