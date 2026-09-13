export const CustomButton = ({text}) => {
//every event handler receives an event obj as it first parameter and they can access variables and props
//`` is the template literals for accessing the dynamic contents
    const name= "Deepa";
    const handleClick = (e) => {
        console.log("Clicked elt", e.target);
        console.log("Click coordinates", e.clientX, e.clientY);
        console.log("which mouse button?", e.button);
        console.log(`Hey ${name}, you clicked ${text}`)
        alert("Thanks for liking!");

    }
    return <button onClick={handleClick}>{text}</button>;

   /*  return <button onClick={ () => alert ("Thanks for liking!!")}>Like</button> */
};