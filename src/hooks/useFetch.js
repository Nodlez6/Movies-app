import React, { useState , useEffect, useRef} from 'react';

export const useFetch = ( url ) => {

    const [data, setData] = useState({
        data: null,
        loading: false
    });

    useEffect(() => {
        console.log("me llamé")
       
        fetch(url)
            .then(resp => resp.json())
                .then(data => {
                   
                        setData({ 
                            data: data,
                            loading: true
                        })
                    
                })
    
      
    }, [url]);
    
    

    return data

  
};
