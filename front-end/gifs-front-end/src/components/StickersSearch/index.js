import { useEffect, useState } from "react";
import api from "../../service/api";

function StickersSearch() {
    const [ stickers, setStickers ] = useState([]);

    useEffect(() => {

        api.get("/stickers/search")
            .then((response) => {
                console.log(response.data.data)
                setStickers(response.data.data);
        })
        .catch((err) => {
            console.log(err);
        });

    }, []);

    return (
      <>
        <h1>Pesquisa de Stickers</h1>
        {stickers.map((item, key) => 
            <div key={key}>
                <h>{item.username}</h>
                <p>{item.title}</p>
                <img src={item.images.original.url} />
            </div>                                            
        )}
      </>
    );
  }
  
  export default StickersSearch;
  