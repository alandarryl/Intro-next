import React from 'react';

import { URL } from '../../utils/constant/url.js';

import Link from "next/link";

async function UsersGet() {
    
    const res = await fetch (URL.USERS_GET, {next: {revalidate: 60} } )

    if (!res) throw new Error("Failes to fetch users")

        return res.json()

}

async function Liste() {

    const users = await UsersGet()

    return (
        <div>
            <h1>La liste des users</h1>
            {users.map((user) =>(
                <div key={user.id} >
                    <p>{user}</p>
                    <Link></Link>
                </div>
            ) )}
        </div>
    )
}

export default Liste;