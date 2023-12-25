import useFetch from "../hooks/useFetch";

const Products = () => {
    const { data, isLoading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/todos');

    return (
        <div>
            <h1>Todos</h1>
            <button onClick={refetch}>Refetch</button>
            {isLoading && <h2>Loading ...</h2>}
            {error && <h2>{error}</h2>}
            <ul>{data && data.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
        </div>
    );
};

export default Products;