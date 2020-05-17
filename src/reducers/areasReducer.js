import { FETCH_AREAS } from "../constants"

const initialState = {
  loading: false,
  currentArea: {},
  error: "",
  data: [],
}

const areasReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_AREAS.REQUEST:
      return { ...state, loading: true }
    case FETCH_AREAS.SUCCESS:
      return { ...state, loading: false, data: payload }
    case FETCH_AREAS.FAIL:
      return { ...state, loading: false, error: payload }
    case FETCH_AREAS.GET_ONE_AREA:
      return {
        ...state,
        currentArea: state.data.find(({ name }) => name === payload),
      }
    default:
      return state
  }
}

export default areasReducer
