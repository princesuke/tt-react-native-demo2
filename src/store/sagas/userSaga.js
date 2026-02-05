import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

const fetchUserApi = (id) => axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)

export function* handlerFetchUser(action) {
    try {

        const response = yield call(fetchUserApi, action.payload);
        
        // yield put()

    } catch(error) {

    }
}
