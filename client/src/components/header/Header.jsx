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
            <a href="/register">register</a>
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