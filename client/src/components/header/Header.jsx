export default function Header() {
    return(
        <header>
      <nav className="site-navigation">
        <ul>
          <li>
            <a class="usedCars" href="/home">used Cars</a>
          </li>
          <li>
            <a href="/catalog">catalog</a>
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