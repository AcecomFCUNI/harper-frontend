import { combineReducers } from "redux"
import areasReducer from "./areasReducer"
import menuMobileReducer from "./menuMobileReducer"
import membersReducer from "./membersReducer"
import slideMoreInfoReducer from "./slideMoreInfoReducer"

const rootReducer = combineReducers({
  areas: areasReducer,
  members: membersReducer,
  handleMenuMobile: menuMobileReducer,
  slideMoreInfo: slideMoreInfoReducer,
})

export default rootReducer
