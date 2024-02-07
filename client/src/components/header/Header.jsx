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
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/login">login</a>
          </li>
          <li>
            <a href="/logout">logout</a>
          </li>
        </ul>
      </nav>
    </header>
    )
}