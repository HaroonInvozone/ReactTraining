import useFetch from "./useFetch";

const CustomHook = () => {
    const[data] = useFetch("https://jsonplaceholder.typicode.com/todos");

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
    )
}

export default CustomHook;