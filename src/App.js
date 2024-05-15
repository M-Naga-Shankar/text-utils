import Navbar from './components/Navbar'
import Utils from './components/Utils'
import About from './components/About'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
 
  return (

   
    <Router>
  <Navbar title='Text-Utils' />
  <div className="container my-3">
<Routes>
  <Route  path="/" element={<Utils title="Enter the text" />}> </Route>
  <Route path="/about" element={<About />}> </Route>
  </Routes>
  </div>
   </Router>
  

  );
}
export default App;
