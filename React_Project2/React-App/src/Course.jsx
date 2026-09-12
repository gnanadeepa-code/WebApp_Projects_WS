function Course({ image,show, name = "HTML", desc = "Web language" }) {
  if (show == true) { /* Conditional rendering */
    return (
      <div className="card">
        <img src={image} alt="Image" />
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    );
  }
}

export default Course;
