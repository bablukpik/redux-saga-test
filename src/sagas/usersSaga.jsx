import { call, put, takeEvery } from 'redux-saga/effects'

const usersApi = `https://jsonplaceholder.typicode.com/users`;
function getUsersApi() {
    return fetch(usersApi, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then(response => response.json())
        .catch((error) => { throw error })
}

function* fetchUsers(action) {
    try {
        const users = yield call(getUsersApi);
        yield put({ type: 'GET_USERS_SUCCESS', users: users });
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message });
    }
}

function* usersSaga() {
    yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
}

export default usersSaga;