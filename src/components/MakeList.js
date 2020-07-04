import React from 'react'
import Moment from 'react-moment';
import Truncate from 'react-truncate';
import {Link} from 'react-router-dom'


const MakeList = (props)=>{
        return(

                <div className="row">
                        {
                           props.movies &&  props.movies.map((movie,i)=>{
                            return  <div className="col-md-4" key={movie.id} style={{}}>
                                <div className="card" style={{"width": "18rem"}}>
                                <Link to={`/movie/${movie.id}`}>
                                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w220_and_h330_face/${movie.poster_path}`} alt={movie.title} /></Link>
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <p><Moment format="D MMM YYYY">{movie.release_date}</Moment></p>
                                        <Truncate lines={1} ellipsis={<span>... <Link to={`/movie/${movie.id}`}>Read more</Link></span>}>
                                            {movie.overview}
                                        </Truncate>
                                        {/* <a href="/#" className="btn btn-primary">Vote Count: {movie.vote_count}</a> */}
                                    </div>
                                </div>
                                
                            </div>

                            })
                        }
                 </div> 

        )
        
}

export default MakeList