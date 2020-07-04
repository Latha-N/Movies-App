import React from 'react'
import MakeList from './MakeList'
import axios from 'axios'
export default class Listing extends React.Component{
    constructor(props){
        super(props)
        this.state={
            movies:[],
            searchedList: [],
            category: ""
        }
    }
    nameChange = (e)=>{
        e.persist()
        const value = e.target.value
        // console.log(e.target.value)
        if(value.length){
            const movies = this.state.movies.filter(m => m.title.toLowerCase().indexOf(value.toLowerCase()) >=0 )
            if(movies.length >0){
                this.setState({movies})
            }else{
                this.setState({movies: this.state.searchedList})
            }
        }else{
            this.setState({movies: this.state.searchedList})
        }

    }
    componentDidUpdate(prevProps, prevState) {
        /**
        * this is the initial render
        * without a previous prop change
        */
       if(prevProps === undefined) {
           return false
       }

       /**
        * new Project in town ?
        */
       if (this.state.category !== this.props.match.params.category) {
          const category = this.props.match.params.category ? this.props.match.params.category : "popular"

          axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=123456`)
          .then(response=>{
              const movies=response.data.results 
            //   console.log('movies',movies)
              this.setState({movies, searchedList: movies})
          })
          this.setState({category: this.props.match.params.category})
       }

   }
    componentDidMount(){

        const category = this.props.match.params.category ? this.props.match.params.category : "top_rated"

        axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=123456`)
        .then(response=>{
            const movies=response.data.results 
            // console.log('movies',movies)
            this.setState({movies, searchedList: movies})
        })
        this.setState({category: this.props.match.params.category})
        
    }
    render(){
        return(
                <>
                <br/>
                <input type="search" onChange={this.nameChange} vvalue="" placeholder="Search by Name"/>
                <br/>
                  {this.state.movies.length > 0 &&  <MakeList movies={this.state.movies}/>}
                </>
        )
    }
}
