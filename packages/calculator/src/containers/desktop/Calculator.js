import { connect } from 'react-redux'
import Calculator from '../../components/desktop/Calculator'
import { change, changeAmount, changeCost, changePercent, changePositions } from '../../actions'

export default connect(
  state => ({
    providers: state.calculator.providers,
    deliveryCost: state.calculator.deliveryCost,
    currierSurcharge: state.calculator.currierSurcharge,
  }),
  dispatch => ({
    onChangeCost: (value, providerIndex, positionIndex) => dispatch(changeCost(value, providerIndex, positionIndex)),
    onChangeAmount: (value, providerIndex, positionIndex) => dispatch(
      changeAmount(value, providerIndex, positionIndex),
    ),
    onChangePercent: (value, providerIndex) => dispatch(changePercent(value, providerIndex)),
    onChangePositions: (value, providerIndex) => dispatch(changePositions(value, providerIndex)),
    onChangeDeliveryCost: value => dispatch(change('deliveryCost', value)),
    onChangeCurrierSurcharge: value => dispatch(change('currierSurcharge', value)),
  }),
)(Calculator)
