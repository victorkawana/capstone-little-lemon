import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Specials from './Specials';
import Chicago from './Chicago';
import {Routes , Route} from  'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';


function App() {
  return (
    <ChakraProvider>
      <Header />
      <Nav />
      <Main />
      <Specials />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

