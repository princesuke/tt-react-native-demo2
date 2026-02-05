import { call, put, takeEvery } from "redux-saga/effects";
// import axios from "axios";
import { userActions } from "../slices/userSlice";
import { userApi } from "../../features/demo/api/userApi";

// const fetchUserApi = (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

export function* handleFetchUser(action) {
    // console.log('id=>', action.payload)
    try {
        const response = yield call(userApi.fetchUser, action.payload);
        
        yield put(userActions.fetchSuccess(response.data));

    } catch(error) {
        yield put(userActions.fetchFailed(error.message));
        console.error("Saga Catch Error:", error.message);
    }
}

export function* watchUserSaga() {
    // console.log('watchUserSaga')
    yield takeEvery(userActions.fetchRequest.type, handleFetchUser);
}
