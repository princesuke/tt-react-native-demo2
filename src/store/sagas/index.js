import { all } from "redux-saga/effects";
import { watchUserSaga } from "./userSaga";
import { watchPostSaga } from "./postSaga";

export default function* rootSaga() {
    yield all([
        watchUserSaga(),
        watchPostSaga()
    ]);
}