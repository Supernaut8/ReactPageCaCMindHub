import './styles/App.css';
import './styles/AppBarMUI.css';
import Home from './components/home';
import AppBarMUI from './components/AppBarMUI';
import SwiperCarousel from './components/SwiperCarousel';
import BottomAppBarMUI from './components/BottomAppBarMUI';

function App() {
  return (
    <div className="App">
      <AppBarMUI />
      <Home />
      <SwiperCarousel />
      <BottomAppBarMUI />
      
    </div>
  );
}

export default App;
