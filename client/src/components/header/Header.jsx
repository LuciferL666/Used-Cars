export default function Header() {
    return(
        <header>
      <nav className="site-navigation">
        <ul>
          <li>
            <a class="usedCars" href="/home">Used Cars</a>
          </li>
          <li>
            <a href="/catalog">Catalog</a>
          </li>
          <li>
            <a href="/register">register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/logout">logout</a>
          </li>
        </ul>
      </nav>
    </header>
    )
}