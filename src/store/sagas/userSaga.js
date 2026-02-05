import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { userActions } from "../slices/userSlice";

const fetchUserApi = (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

export function* handleFetchUser(action) {
    try {
        const response = yield call(fetchUserApi, action.payload);
        
        yield put(userActions.fetchSuccess(response.data));

    } catch(error) {
        yield put(userActions.fetchFailed(error.message));
        console.error("Saga Catch Error:", error.message);
    }
}

export function* watchUserSaga() {
    yield takeEvery(userActions.fetchRequest.type, handleFetchUser);
}
