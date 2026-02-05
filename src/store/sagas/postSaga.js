import { call, put, takeEvery } from "redux-saga/effects";
// import axios from "axios";
import { postActions } from "../slices/postSlice";
import { postApi } from "../../features/demo/api/postApi";

// const fetchPostApi = () => axios.get("https://jsonplaceholder.typicode.com/posts")

export function* handleFetchPosts() {
  try {
    const response = yield call(postApi.fetchPosts);
    yield put(postActions.fetchPostsSuccess(response.data));
  } catch (error) {
    yield put(postActions.fetchPostsFailed(error.message));
  }
}

export function* watchPostSaga() {
  yield takeEvery(postActions.fetchPostsRequest.type, handleFetchPosts);
}
