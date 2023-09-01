import { Link } from "react-router-dom";
function Header(){
    return(
        <div className='header'>
            <button><Link to='/home'>Discovery</Link></button>
            <button>Subscribe</button>
        </div>
    );
}

export default Header;