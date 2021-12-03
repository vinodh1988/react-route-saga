
import {Route} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Fun from './Fun'

const RouterHome=()=>{
    return(
    <div style={{padding: "20px",backgroundColor: "#F2F3F4"}}>
       <Route path="/" exact component={Home}></Route>
       <Route path="/about-us" component={About}></Route>
       <Route path="/fun" component={Fun}></Route>
    </div>
    )
}

export default RouterHome