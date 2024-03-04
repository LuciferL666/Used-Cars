import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header>
            <h1><Link className="usedCars" to="/">Used Cars</Link></h1>
      <nav className="site-navigation">
        
            <Link to="/catalog">Catalog</Link>
            
            <div id='user'>
            <Link to="/create">Create</Link>
            <Link to="/logout">Logout</Link>
            </div>

            <div id='guest'>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            </div>
      </nav>
    </header>
    )
}