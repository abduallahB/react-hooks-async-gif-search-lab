import React from 'react'


function GifList({gifList}) {  // take gifList as props 
    return (    
        <ul>
            {gifList.map((arg) => ( <li key={arg.url}> <img src={arg.url} alt="gifs" /> </li>     ))}
   
          </ul>
        );
    }      


export default GifList; 