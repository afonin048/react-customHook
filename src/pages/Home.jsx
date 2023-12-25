import useFetch from "../hooks/useFetch";

const Home = () => {
    const { data, isLoading, error, refetch } = useFetch('https://jsonplaceholder.typicode.com/users');

    return (
        <div>
            <h1>Users</h1>
            <button onClick={refetch}>Refetch</button>
            {isLoading && <h2>Loading ...</h2>}
            {error && <h2>{error}</h2>}
            <ul>{data && data.map(user => <li key={user.id}>{user.username}</li>)}</ul>
        </div>
    );
};

export default Home; 