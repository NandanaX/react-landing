import './Styles/app.scss';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';
import FilterSection from './components/FilterSection';

function App() {
  return (
    <div className="App">
     <NavBar></NavBar>
     <HeroSection></HeroSection>
     <hr style={{padding:0}}></hr>
     <FilterSection></FilterSection>
    </div>
  );
}

export default App;
