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
    // console.log(action.type); //GET_USERS
    try {
        yield put({ type: 'GET_USERS_REQUESTED' });
        const users = yield call(getUsersApi);
        yield put({ type: 'GET_USERS_SUCCESS', users: users });
    } catch (e) {
        yield put({ type: 'GET_USERS_FAILED', message: e.message });
    }
}

function* usersSaga() {
    yield takeEvery('GET_USERS', fetchUsers); // here catching the action type and accordingly calling a function for dispatch to reducer.
}

export default usersSaga;