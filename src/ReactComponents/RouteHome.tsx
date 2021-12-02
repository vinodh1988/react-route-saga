
import {Route} from 'react-router-dom'
import About from './About'
import Home from './Home'
import People from './People'

const RouterHome=()=>{
    return(
    <div style={{padding: "20px",backgroundColor: "#F2F3F4"}}>
       <Route path="/" exact component={Home}></Route>
       <Route path="/about-us" component={About}></Route>
       <Route path="/people" component={People}></Route>
    </div>
    )
}

export default RouterHome