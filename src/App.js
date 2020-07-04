import React from 'react'
import {Link, BrowserRouter, Route} from 'react-router-dom'

import Listing from '../src/components/List'

function App(props){
 return(
     <BrowserRouter>
        <div>
            <h1>hello</h1>
            <Link to="/movies">movies</Link>

            <Route path="/movies" component={Listing}/>

        </div>
     </BrowserRouter>
        
    )
}

export default App