import { all, fork } from "redux-saga/effects"
import areasSaga from "./areasSaga"
import membersSaga from "./membersSaga"
import sendEmailSaga from "./sendEmailSaga"

export default function* rootSaga() {
  yield all([fork(areasSaga), fork(membersSaga), fork(sendEmailSaga)])
}
