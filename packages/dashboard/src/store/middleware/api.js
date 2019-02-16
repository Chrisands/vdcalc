export default history => ({ dispatch, getState }) => next => (action) => {
  if (typeof action === 'function') {
    action(dispatch, getState, history)
  } else {
    next(action)
  }
}
