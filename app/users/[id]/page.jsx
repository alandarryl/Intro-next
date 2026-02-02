import React from 'react'

import { URL } from '@/utils/constant/url';

async function GetUserById(id) {
    const res = await fetch(URL.USERS_GET + '/' + id)


    if(!res)throw new Error('Article not found');

    return res.json();

}

async function UserById({params}) {

    const {id} = await params;

    const user = await GetUserById(id)

    return (
        <div>
            <h1>{user.name} </h1>
            <h2>{user.username} </h2>
            <p>{user.email} </p>
            <p>{user.adress} </p>
            <p>{user.website} </p>
            <p>{user.phone} </p>
        </div>
    )
}

export default UserById