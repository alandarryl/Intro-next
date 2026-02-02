
import Link from "next/link";
import { URL } from "../../utils/constant/url.js";
import {v4 as uuidv4} from "uuid"

import Article from "./Article.jsx";


    async function fetchArticles() {
        const res = await fetch(URL.ARTICLE_GET, {next: {revalidate: 60} } );
        //Revalidate touts les 60 secondes 
        if(!res.ok){
            throw new Error('Failes to fetch articles');
        }
        return res.json();
    }


export default async function index(){
    const articles = await fetchArticles();

    const tenArticles = articles.slice(0, 10);

    return(
        <div className="container px-4 py-5" >
            <h1 className="text-center" >welcome Bro</h1>
            <p className="text-center" >Les articles</p>
            <div className="row g-3 mt-4" >
                {/* Affichage des articles ici !  */}
                {tenArticles?.map((article) =>(
                        <Article 
                            key={uuidv4()}
                            title={article.title}
                            body={article.body}
                            lien={`/blog/${article.id.toString()}`}
                        />
                ) ) }
            </div>
        </div>
    );
}
