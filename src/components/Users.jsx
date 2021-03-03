import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import usersAction from '../actions/usersAction';
import Card from './Card';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users);

    useEffect(() => {
        dispatch(usersAction([
            {
                id: 1,
                name: 'Bablu Ahmed',
                company: {
                    name: "ABC",
                    catchPhrase: "Software Development, Software Company",
                }
            }
        ]));
    }, [])

    return (
        <>
            {users.length > 0 && users.map((user) => (
                <Card key={user.id} user={user} />
            ))}
            {users.length === 0 && <p>No users available!</p>}
        </>
    )
}

export default Users;