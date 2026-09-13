//Below function set's default values to props. when any of the prop values are not passed it will pickup values from this default values
function Course({ image,
  show=true, name = "HTML", desc = "Web language" }) {
  if (show ) { /* Conditional rendering using If stmt. We can use ternery operator. && is used to render something only when the condition is true otherwise none*/
    return (
      <div className="card">
        <img src={image} alt="Image" />
        <h3>{name ? name : "Guest"}</h3> 
        <p>{desc ? desc : "Later"}</p>
         <p>{show &&  <span> {"\u2605"}</span>}</p>
      </div>
    );
  }else{
    return(
      <div className="card">
        Course not available
      </div>
    );
  }
}

export default Course;
