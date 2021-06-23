import React, {useState, useEffect} from 'react'
import GifList from "./GifList";
import GifSearch from "./GifSearch";



function GifListContainer(){
    const [gifList, setGifList] = useState()
    const [query, setQuery] = useState("dolphins");

    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g')
        .then((r) => r.json() )
        .then(({data}) =>{
            const gifList = data.map((arg) =>({ url: arg.images.original.url} ));
            setGifList(gifList)
        })    
        // return () => {
        //     cleanup
        // }
    }, [query])

    return(
        <div style={{ display: "flex" }}>
        <GifList gifList = {gifList} />
        <GifSearch onSubmitQuery={setQuery} />
      </div>
    );

}



export default GifListContainer ;





