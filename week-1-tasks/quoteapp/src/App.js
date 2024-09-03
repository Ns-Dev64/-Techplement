
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Quotes from './components/Quotes/Quotes';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import '../node_modules/font-awesome/css/font-awesome.min.css';
function App() {
 

  return (
   <>
   <div className='background'>
   <Header></Header>
   <Quotes ></Quotes>
   <Footer></Footer>
   </div>
   </>
  );
}

export default App;
