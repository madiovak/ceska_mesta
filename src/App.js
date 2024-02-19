import './App.css';
import { cities } from './cz-cities.js';
import { City } from './components/City/City.js';

const App = () => (
  <div className="container">
    <div className="cities">
      {cities.map((city) => (
        <City
          key={city.name}
          photo={city.photo}
          name={city.name}
          population={city.population}
          area={city.area}
          district={city.district}
        />
      ))}
    </div>
  </div>
);

export default App;
