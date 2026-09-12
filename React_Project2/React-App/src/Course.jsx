function Course({
    image,
    name = "HTML",
    desc = "Web language"
}) {
    return (
        <div className="card">
            <img src={image} alt="Image" />
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    );
}

export default Course;