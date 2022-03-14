import React,{useContext,useState} from 'react'
import { FilmContext } from './contexts/FilmContext'


 const Favoris = () => {

    const [favoris,setFavoris]=useState([])
     const filmContext=useContext(FilmContext)
     console.log("film",filmContext);
    return (
        <div>
            Favoris
        </div>
    )
}

export default Favoris
