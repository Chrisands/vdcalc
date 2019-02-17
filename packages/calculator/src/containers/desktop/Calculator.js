import { connect } from 'react-redux'
import Calculator from '../../components/desktop/Calculator'
import { changeAmount, changeCost, changePercent, changePositions } from '../../actions'

export default connect(
  state => ({
    providers: state.calculator.providers,
  }),
  dispatch => ({
    onChangeCost: (value, providerIndex, positionIndex) => dispatch(changeCost(value, providerIndex, positionIndex)),
    onChangeAmount: (value, providerIndex, positionIndex) => dispatch(
      changeAmount(value, providerIndex, positionIndex),
    ),
    onChangePercent: (value, providerIndex) => dispatch(changePercent(value, providerIndex)),
    onChangePositions: (value, providerIndex) => dispatch(changePositions(value, providerIndex)),
  }),
)(Calculator)
