function PhotoCard({id, description, category, image, alt}) {
    // console.log(id, `#zdjecie${id}`);
    return (
      <div id={`PhotoCard-${id}`} className="card h-100">
        <img src={`../assets/${image}`} alt={alt} className="card-img-top img-fluid" style={{height: "200px", objectFit: "cover"}}/>
        <div className="card-body">
            <h2 className="card-title badge">{category}</h2>
            <h3 className="card-text">{description}</h3>

            <button data-bs-toggle="modal" data-bs-target={`#zdjecie${id}`}>Powiększ</button>
        </div>
      </div>
    );
}

export default PhotoCard;