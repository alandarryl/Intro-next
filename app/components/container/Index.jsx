

import Link from 'next/link';

const Index = () => {
    return (
        <>
            <nav className='navbar navbar-dark bg-primary' >
                <div className='container-fluid justify-content-center' >
                    <Link className='navbar-brand mx-4' href="/" >Acceuil</Link>
                    <Link className='navbar-brand mx-4' href="/blog" >Blog</Link>
                    <Link className='navbar-brand mx-4' href="/users" >Liste</Link>
                </div>
            </nav>
        </>
    );
}


export default Index;