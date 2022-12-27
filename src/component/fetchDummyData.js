import useFetch from "../Hooks/useFetch.js";
//when you use generator function
// import fetchJson from "../Hooks/useFetch.js";

const FetchDummyData = () => {
    const[data] = useFetch("https://jsonplaceholder.typicode.com/todos");
    
    // const[data] = fetchJson("https://jsonplaceholder.typicode.com/todos");

    return(
        // eslint-disable-next-line react/react-in-jsx-scope
        <>
            {
                data &&  
                    data.map((item) => {
                        // eslint-disable-next-line react/react-in-jsx-scope
                        return <p key={item.id}>{item.title}</p>;
                    })
            }
        </>
    );
};

export default FetchDummyData;