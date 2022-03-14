import React,{useEffect,useState} from 'react'

export const Details = () => {
  const [detail,setDetail]=useState()
  useEffect(()=>{
     fetch(
       "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=040ca8637b2add45abd33fd57f13a181"
     )
       .then((response) => {
         return response.json();
       })
       .then((response) => {
         //response.results
         setDetail(
           response.results.map((result) => {
             return {};
           })
         );
       });
  }, [])

    return (
      <div className="back-container">
hello
      </div>
    );
}

export default Details