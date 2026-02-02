
"use client"

import React,  { useState } from "react";

const LikeBoutton = () =>{

    const [like, setLike] = useState(0);


    const increaseLike = () =>{

        setLike(like + 1)
    }



    return (
        <div>
            <span onClick={increaseLike} >Like ({like})</span>
        </div>
    )

}

export default LikeBoutton;
