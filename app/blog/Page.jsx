
import Link from "next/link";
import { URL } from "../../utils/constant/url.js";


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

    console.log(articles);

    return(
        <div className="container px-4 py-5" >
            <h1 className="text-center" >welcome Bro</h1>
            <p className="text-center" >Les articles</p>
            <div className="row g-3 mt-4" >
                {/* Affichage des articles ici !  */}
            </div>
        </div>
    );
}
