import React, { useState, useEffect, useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router-dom";
import { FilmContext } from "./contexts/FilmContext";
import FontAwesome from "react-fontawesome";

export default function Card({ title,id, description, datedesortie, image }) {
  const context = useContext(FilmContext);
  const KeyStorage = "favoritList";
  const _ = require("lodash");

 const [color, setColor] = useState("grey");

 //  context.setFavoritMovies([
 //    ...context.favoritMovies,
 //    { id: id,
 //    },
 //  ]);
   const handleFavoris = (tabList=[],moovie) => {
     if(tabList===null){
       tabList = [];
    }
    tabList.push(moovie);
    localStorage.setItem(keyStorage,JSON.stringify(tabList));
     setColor(!color);
     console.log(color);
     localStorage.setItem(id,id)
   };

   const removeFromFavoritList=(tabList)=>{
     localStorage.setItem(keyStorage, JSON.stringify(myList));
     
//const removeItem = (myList, id, media_type) => {
  const index = _.remove(myList, (o) => {
    return o.id === id && o.media_type === media_type;
  });
};
  
  return (
    <>
      <div className="card  ">
        <FontAwesome
          name="heart"
          size="2x"
          style={{ color: color ? "grey" : "crimson", cursor:"pointer"}}
          onClick={()=>handleFavoris()}
        />{" "}
        <img
          className="imageCard zoom"
          src={image}
          width="150"
          height="200"
          alt={title}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{datedesortie}</p>
          <Link to={`/details/${id}`} className="btn btn-primary">
            Plus de détails
          </Link>
        </div>
      </div>

   
    </>
  );
}
