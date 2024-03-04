import { Link } from 'react-router-dom'

export default function Header() {
    return(
        <header>
            <h1><Link className="usedCars" to="/">Used Cars</Link></h1>
      <nav className="site-navigation">
      </nav>
    </header>
    )
}