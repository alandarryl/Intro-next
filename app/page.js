import Image from "next/image";

import Link from "next/link";


export default function Home() {


  return (
    <>
      <div className="container px-4 pt-5">
        <h1>welcome in my blog (inserez le titre que vous voulez)</h1>
        <p>
          Lorem ipsum dolor sit amet, consecteur adpisicing elit,
          saepe culpa.
        </p>
        {/* CARD 1 */}
        <div className="row mt-5" >

          <div className="col-12 col-sm-6" style={{minHeight: "15rem" }} >
            <div className="card w-100 h100" >
              <div className="card-body" >
                <h5 className="card-title" >Card Title</h5>
                <h6 className="card-subtitle mb-2 text-muted" > 
                  Votre card blog 
                </h6>
                <p>
                  some quick example text to build 
                  on the card and make up 
                  the bulk of the card's content.
                </p>
                  <Link href="/blog" >visitez le blog</Link>
              </div>
            </div>
          </div>

          {/* CARD 2 */}

          <div className="col-12 col-sm-6" style={{minHeight: "15rem" }} >
            <div className="card w-100 h100" >
              <div className="card-body" >
                <h5 className="card-title" >Liste de membres</h5>
                <h6 className="card-subtitle mb-2 text-muted" > 
                  Membres
                </h6>
                <p>
                  some quick example text to build 
                  on the card and make up 
                  the bulk of the card's content.
                </p>
                  <Link href="/boss" >Découvrez la liste de membres</Link>
              </div>
            </div>
          </div>

        </div>
        {/* FIN CARD 1  */}

    </div>
    </>
  );
}
