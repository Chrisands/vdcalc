import { connect } from 'react-redux'
import { addProvider, removeProvider, copyData } from '@vd/calculator/src/actions'
import Header from '../../components/mobile/Header'

export default connect(
  null,
  dispatch => ({
    onAddProvider: () => dispatch(addProvider()),
    onRemoveProvider: () => dispatch(removeProvider()),
    onCopy: () => dispatch(copyData()),
  }),
)(Header)
