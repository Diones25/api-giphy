import { useEffect, useState } from "react";
import api from "../../service/api";

function GifsSearch() {
    const [ gifs, setGifs ] = useState([]);

    useEffect(() => {

        api.get("/gifs/search")
            .then((response) => {
                console.log(response.data.data)
                setGifs(response.data.data);
        })
        .catch((err) => {
            console.log(err);
        });

    }, []);

    return (
      <>
        <h1>Pesquisa de gifs</h1>
        {gifs.map((item, key) => 
            <div key={key}>
                <h>{item.username}</h>
                <p>{item.title}</p>
                <img src={item.images.original.url} />
            </div>                                            
        )}
      </>
    );
  }
  
  export default GifsSearch;
  