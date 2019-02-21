import { connect } from 'react-redux'
import { addProvider, removeProvider, copyData, clearData } from '@vd/calculator/src/actions'
import Header from '../../components/desktop/Header'

export default connect(
  null,
  dispatch => ({
    onAddProvider: () => dispatch(addProvider()),
    onRemoveProvider: () => dispatch(removeProvider()),
    onCopy: () => dispatch(copyData()),
    onClear: () => dispatch(clearData()),
  }),
)(Header)
