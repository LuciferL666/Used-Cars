export default function Home() {
    return(
        <div className="homePage">
            <h1>Welcome to our Used Car Marketplace!</h1>
            <p>Sell your car with us today and find the best deals.</p>
            <button>Sell Your Car</button>

            <div id="home-page">
                <h1>Best Deals!</h1>

                {/* <!-- Display div: with information about every game (if any) --> */}
                <div class="Car">
                    <div class="image-wrap">
                        <img src="./images/CoverFire.png"/>
                    </div>
                    <h3>Cover Fire</h3>
                    <div class="rating">
                        <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
                    </div>
                    <div class="data-buttons">
                        <a href="#" class="btn details-btn">Details</a>
                    </div>
                </div>
                {/* <!-- Display paragraph: If there is no games  --> */}
                <p class="no-articles">No Offers Yet</p>
            </div>
            </div>
    )
}