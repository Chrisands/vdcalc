import { createReducer } from '@vd/utils'

const initialState = {
  apiUrl: process.env.API_URL,
}

export default createReducer(initialState, {})
