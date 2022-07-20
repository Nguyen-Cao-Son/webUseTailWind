import Content from './components/Content';
import { Footer } from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import {Switch,Route} from 'react-router-dom';
import Home from "./page"
import About from './page/About';
import Menu from './page/Menu';


function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Mennu' exact component={Menu} />

        <Route path='/About' exact component={About} />

    </Switch>
    <Footer />
    </>
  );
}

export default App;
