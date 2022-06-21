import React from 'react';
import MovieCard from '../movie-card/movie-card';
 
class MainView extends React.Component {

   constructor(){
    super();
    this.state = {
      movies: [
        {
         _id: 1, 
         Title: 'King of the boys', 
        Description: 'Her insatiable appetite for power drives Eniola, a businesswoman and philanthropist, into politics. As she is drawn into a struggle for power her criminal baggage will prove a heavy burden',
        ImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmWM7CfDhKzbV_vOjIj3Gjz-1Q774vRInMA&usqp=CAU',
        Director:'Kemi Adetiba'
        },
        { 
          _id: 2, 
          Title: 'War room',
          Description: 'The Jordan family looks ideal on the surface, yet has many cracks underneath. When Miss Clara observes this, she tries to guide them and help them unite again with the help of prayer.', 
          ImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmWM7CfDhKzbV_vOjIj3Gjz-1Q774vRInMA&usqp=CAU'
        },
        { 
          _id: 3, 
          Title: 'Game of Thrones',
          Description: 'Nine noble families wage war against each other in order to gain control over the mythical land of Westeros. Meanwhile, a force is rising after millenniums and threatens the existence of living men',
          ImagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbRjeVSNUbGRT7yTB38U5_qNSbnSUfqnccjA&usqp=CAU',
          Director:'Alan Taylor'
        }
      ],
    }
  }

  render() {
    const {movies} = this.state;
  if (movies.length === 0) return <div className="main-view">The list is empty!</div>;

  return (
    <div className="main-view">
       {movies.map(movie => <MovieCard key={movie._id} movie={movie}/>)}
    </div>
  );
  }
}

export default MainView