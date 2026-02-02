import React from 'react'

import {URL} from "../../../utils/constant/url.js";

async function ArticleById(id) {
    const res = await fetch(URL.ARTICLE_GET_BY_ID + '/' + id)

    if(!res)throw new Error('Article not found');

    return res.json();

}

export default async function ArticlePage({params}){

    const {id} = await params;

    const article = await ArticleById(id)

    // console.log(id);
    console.log(article);
    // console.log(URL.ARTICLE_GET_BY_ID);


    return(
        <div className='container px-4 pt-5'>
            <h1 className='text-center mb-4' >{article.title}</h1>
            <p>{article.body} </p>
        </div>
    )

}