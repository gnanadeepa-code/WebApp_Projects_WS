export const Counter =() => {
    //State is a components memory. It is spl data that, 1. Triggers a re-render when it changes (solving screen update problem) 2.Persists btwn renders (solving component's local variable reset problem when re-rendering)
    //Hooks are spl functions that let you hook into React features
    //useState hook is used for managing state
    let count = 0;

    const handleClick =() =>{
        count += 1;
        console.log(count);
    };

    return (
        <button onClick={handleClick}>Count: {count} </button>
    )
}