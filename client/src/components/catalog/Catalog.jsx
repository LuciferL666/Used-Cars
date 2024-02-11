export default function Catalog() {
    return (
        <section id='catalog'>
        <div className="allCars-info">
          <img
            src="https://www.playlek.se/images/zoom/chevroletimpalasportsedan1967blackgreenlight2.jpg"
            alt=""
          />
          <h4>brand</h4>
          <h4>model</h4>
          <h4>year</h4>
          <h4>month</h4>
          <h4>body</h4>
          <h4>fuel</h4>
          <h4>transmission</h4>
          <h4>performance</h4>
          <h4>kilometers</h4>
          <h4>price</h4>
          <h4>_ownerId</h4>
          <a href="#" class="details-button">Details</a>
        </div>


      <h3 class="no-cars">No posted cars yet</h3>
      </section>
    )
}