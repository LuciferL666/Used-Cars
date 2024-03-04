import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header>
      <nav className="site-navigation">
        <ul>
          <li>
            <a className="usedCars" href="/">Used Cars</a>
          </li>
          <li>
            <a href="/create">Create</a>
          </li>
          <li>
            <a href="/catalog">Catalog</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
    )
}