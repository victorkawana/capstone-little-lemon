import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Specials from './Specials';
import Chicago from './Chicago';
import Testimonials from './CustomersSay'
import {Routes , Route} from  'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Nav />
      <Main />
      <Specials />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;

