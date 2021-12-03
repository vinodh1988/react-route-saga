
import {BrowserRouter as Router,Link} from 'react-router-dom'
import RouterHome from './ReactComponents/RouteHome'

const App=()=>{
   return(
  <Router>
     <div><nav className="navbar navbar-expand-sm bg-dark navbar-dark">
     <div className="container-fluid">
       <ul className="navbar-nav">
         <li className="nav-item">
           <Link className="nav-link active" to="/">ABC APP</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/">Home</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link" to="/about-us">About US</Link>
         </li>
         <li className="nav-item">
           <Link className="nav-link " to="/fun">Fun</Link>
         </li>
       </ul>
     </div>
   </nav>
   <RouterHome></RouterHome>
     </div>
    </Router>
   )
}

export default App