import './App.css';
import NavBar from './components/Navbar';
import SectionRight from './components/sectionRight';
import SectionLeft from './components/sectionLeft'
function App() {
  return (
    <div className="App">
          
           <NavBar/>
           <div className='rr'>
           <SectionRight/>
           
           </div>
           <SectionLeft/>
           

    </div>
  );
}


   export default App;
