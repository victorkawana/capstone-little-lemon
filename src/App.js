import './App.css';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import Specials from './Specials';
import Chicago from './Chicago';
import {Routes , Route} from  'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'

const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    Button,
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Nav />
      <Main />
      <Specials />
      <Footer />
    </ChakraProvider>
  );
}

export default App;

