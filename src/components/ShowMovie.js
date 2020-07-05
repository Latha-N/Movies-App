import React from 'react'
import axios from 'axios'
import Moment from 'react-moment';

export default class ShowMovie extends React.Component{
    constructor(props){
        super(props)
        this.state={
            movie:{}
        }
    }
    componentDidMount(){

        const id = this.props.match.params.id

        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1234`)
        .then(response=>{
            const movie=response.data 
            console.log('movies',movie)
            this.setState({movie})
        })
        
    }
    render(){
        const movie = this.state.movie
        return(
                <>
                 {Object.keys(movie).length > 0 && 
                 <div className="row" style={{"background": "darkgray"}}>
                     <div className="col-md-4">
                     <img className="card-img-top" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} style={{"height": 400}} alt={movie.title} />
                     </div>
                     <div className="col-md-8">
                        <h4 className="card-title">Title: {movie.title}</h4>
                 <p>Genres: {movie.genres.map(obj => obj.name).join(", ")}</p>
                            <p className="card-text"><small className="text-muted"><Moment format="D MMM YYYY">Release Date: {movie.release_date}</Moment></small></p>
                 <p><i>Tag Line: {movie.tagline}</i></p>
                        <p className="card-text">Overview: {movie.overview}</p>

                     </div>
                    
               </div>
               }
                </>
        )
    }
}