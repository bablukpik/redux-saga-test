import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import usersAction from '../actions/usersAction';
import Card from './Card';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);
    const loading = useSelector(state => state.usersReducer.loading);
    const error = useSelector(state => state.usersReducer.error);

    useEffect(() => {
        dispatch(usersAction());
    }, [])

    return (
        <>
            {users.loading && <p>Loading...</p>}
            {users.length === 0 && !loading && <p>No users available!</p>}
            {error && !loading && <p>{error}</p>}
            {users.length > 0 && users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
        </>
    )
}

export default Users;