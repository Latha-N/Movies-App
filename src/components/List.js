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
        axios.get('https://api.themoviedb.org/3/movie/550?api_key=06b4380c36f00a2d78cd89c4b56c0512')
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