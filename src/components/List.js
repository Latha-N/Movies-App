import React from 'react'
import axios from 'axios'


class Listing extends React.Component{
    constructor(){
        super()
        this.state={
            movies:{}
        }
    }
    componentDidMount(){
        axios.get()
        .then(response=>{
            const movies=response.data
            console.log('movies',movies)
            this.setState({movies})
        })
        
    }

    render(){
        console.log('jjjj',this.state.movies)
        return(
                <div>
                    <h1>hhh</h1>
                    <ul>
                    {
                        Object.keys(this.state.movies) .map((mov,i)=>{
                        return <li key={i}>{mov}
                        <ul>
                        {
                            this.state.movies[mov].map((mov,i)=>{
                            return <li key={i}>{mov.genres.name}</li>
                            })
                        }
                        </ul>
                        
                        </li>
                        })
                    }
                    </ul>
                   
                </div>
        )
    }
}

export default Listing