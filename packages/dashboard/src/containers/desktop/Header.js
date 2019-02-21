import { connect } from 'react-redux'
import { addProvider, removeProvider } from '@vd/calculator/src/actions'
import Header from '../../components/desktop/Header'

export default connect(
  null,
  dispatch => ({
    onAddProvider: () => dispatch(addProvider()),
    onRemoveProvider: () => dispatch(removeProvider()),
  }),
)(Header)
