import React from 'react'

import Link from "next/link";

function Article({title, body, lien}) {
    return (
        <div className='col-12 col-md-6 col-xl-4' >
            <div className='card h-100 shadow-sm' >
                <div className='card-body' >
                    <h5 className='card-title' > {title} </h5>
                    <p className='card-text' >
                        {body}
                    </p>
                    <Link href={lien} >
                        Lire cet article
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Article