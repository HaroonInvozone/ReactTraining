import { useState, useEffect  } from "react";

const useFetch = (url) =>{
    const [data , setData] = useState(null);
    
    useEffect( () => {
        fetch(url)
         .then((res) => res.json())
         .then((data) => setData(data));
    }, [url]);

    return [data];
};

//with generator function

// const fetchJson = co.wrap(function * (url: RequestInfo | URL) {
//     try {
//         let request = yield fetch(url);
//         let data = yield request.text();
//         return JSON.parse(data);
//     }
//     catch (error) {
//         console.log(`ERROR: ${error.stack}`);
//     }
// });

export default useFetch;