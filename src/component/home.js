import React,{useState,useEffect,useContext} from 'react'
import Card from './card'
import { Switch, Route, Link } from "react-router-dom";
export const Home = () => {
  const films = { favoris: false, new: false };
   
 const [movies, setMovies] = useState([films]);


 useEffect(() => {
   let url =
     "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=040ca8637b2add45abd33fd57f13a181";
   fetch(url)
     .then((response) => {
       return response.json();
     })
     .then((response) => {
       setMovies(response.results);
     });
 }, []);
 console.log("movies", movies);



return ( 
  <div className="container-fluid dark-container border-primary">
    <p id="hometitle" className="text-center col-xs-mb-5  mb-5">
      Film
    </p>
    <div className="row cardMovie ">
      {movies.map((item, index) => {
        return (
            <div
              className="homeCard col-xs-12  col-sm-6 col-md-4  col-lg-3 "
              key={index}
            >
               
                <Card
                  id={item.id}
                  title={item.original_title}
                  datedesortie={item.release_date}
                  image={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                />
             
            </div>
          
        );
      })}
    </div>
  </div>
);
    }
export default Home;
/*
return (
    <div>
      {movies.map(((item, index) => {
        return (
          <div className="container">
            <div className="row">
                <Cards key={index}
                  titre={item.original_title}
                  description={item.overview}
                  datedesortie={item.release_date}
                  image={`https://image.tmdb.org/t/p/w300/${item.poster_path}`}
                />
              </div>
            </div>
        )

      }))}
    </div>
  );*/