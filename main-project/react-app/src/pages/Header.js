import { Link } from "react-router-dom";
function Header(){
    return(
        <div className='header'>
            <button><Link to='/feed'>Discovery</Link></button>
            <button>Subscribe</button>
        </div>
    );
}

export default Header;