function Course({ image,show=true, name = "HTML", desc = "Web language" }) {
  if (show ) { /* Conditional rendering */
    return (
      <div className="card">
        <img src={image} alt="Image" />
        <h3>{name}</h3>
        <p>{desc}</p>
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
