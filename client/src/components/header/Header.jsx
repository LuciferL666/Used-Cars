export default function Header() {
    return(
        <header>
      <nav className="site-navigation">
        <ul>
          <li>
            <a class="usedCars" href="/home">Used Cars</a>
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
            <a href="/Logout">Logout</a>
          </li>
        </ul>
      </nav>
    </header>
    )
}