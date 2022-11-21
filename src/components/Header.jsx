import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <Link to="/">
                <h2>Anime<br /> Paradise</h2>
            </Link>  
            
            <div className="logo">
                <Link to="/favourite">
                    <i className="ri-heart-fill ri-2x red"></i>
                </Link>
                <Link to="/search">
                    <i className="ri-search-line ri-2x"></i>
                </Link>    
            </div>
        </header>
    )
}