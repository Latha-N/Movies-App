import React from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'
import Listing from './components/Listing'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowMovie from './components/ShowMovie'


function App(props){
 return(
     <BrowserRouter>
        <div className="container">
            <h2>Movies Database App</h2>
            <Link to="/popular">Popular</Link> ||  
             <Link to="/now_playing">Now playing</Link> || 
            <Link to="/upcoming">Up coming</Link>

            <Route path="/" component={Listing} exact={true}/>
            <Route path="/movie/:id" component={ShowMovie} exact={true}/>
            <Route path="/:category" component={Listing} exact={true}/>


        </div>
     </BrowserRouter>
        
    )
}

export default App