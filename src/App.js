import './App.css';
import Sidebar from './sidebar/sidebar'
import Header from './header/header';
import Footer from './footer/footer';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHouse, faSearch, faBook, faPlus, faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHouse, faSearch, faBook, faPlus, faGlobe)

function App() {
  
  return (
    <div>
    <Sidebar/>
    <Header/>
    <Footer/>
    </div>
  );
}

export default App;
