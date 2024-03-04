import { useNavigate } from 'react-router-dom';

import * as carService from '../../services/carService'

export default function Create() {
    const createCarSubmitHandler = async (e) => {
      e.preventDefault();

      const carData = Object.fromEntries(new FormData(e.currentTarget));

      console.log(carData);

      const result = await create(carData);
      console.log(result);
    }

    return (
        <div class="create">
        <form id="create" onSubmit={createCarSubmitHandler}>
        <div class="container">
          <h1>Create Post</h1>
          <label htmlFor="img">Image:</label>
          <input
            type="text"
            id="imageUrl"
            name="img"
            placeholder="Upload a photo..."
          />
          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            placeholder="Enter car brand..."
          />
  
          <label htmlFor="model">Model:</label>
          <input
            type="text"
            id="model"
            name="model"
            placeholder="Enter car model"
          />
  
          <label htmlFor="year">Year:</label>
          <input
            type="text"
            id="year"
            name="year"
            placeholder="Enter car year build"
          />
  
          <label htmlFor="month">Month:</label>
          <input
            type="text"
            id="month"
            name="month"
            placeholder="Enter car month build"
          />
  
          <label htmlFor="body">Body:</label>
          <input
            type="text"
            id="body"
            name="body"
            placeholder="Enter car body type"
          />
  
          <label htmlFor="fuel">Fuel:</label>
          <input
            type="text"
            id="fuel"
            name="fuel"
            placeholder="Enter car fuel type"
          />
  
          <label htmlFor="transmission">Transmission:</label>
          <input
            type="text"
            id="transmission"
            name="transmission"
            placeholder="Enter car transmission"
          />
  
          <label for="performance">Performance:</label>
          <input
            type="text"
            id="performance"
            name="performance"
            placeholder="Enter car performance"
          />
  
          <label for="kilometers">Kilometers:</label>
          <input
            type="text"
            id="kilometers"
            name="kilometers"
            placeholder="Enter car kilometers"
          />
  
          <label for="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Enter car price"
          />
          <label htmlFor="summary">Summary:</label>
          <textarea name="summary" id="summary"></textarea>
          <input className="btn submit" type="submit" value="Create Post" />
        </div>
        </form>
      </div>
    )
}