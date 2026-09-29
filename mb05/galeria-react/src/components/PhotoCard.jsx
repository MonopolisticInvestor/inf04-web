const NAZWA_KATEGORII = { gory: 'Góry', morze: 'Morze', miasto:
'Miasto' }
const KOLOR_KATEGORII = { gory: 'success', morze: 'primary', miasto:
'dark' }

function PhotoCard({id, title, description, category, image, alt, deleteFunction}) {
    // console.log(id, `#zdjecie${id}`);
    return (
      <div id={`PhotoCard-${id}`} className="card h-100">
        <img src={`../assets/${image}`} alt={alt} className="card-img-top img-fluid" style={{height: "200px", objectFit: "cover"}}/>
        <div className="card-body">
            <h2 className="card-title h5">
              {title}
            </h2>
            <p>
              <span className={`badge text-bg-${KOLOR_KATEGORII[category]}`}>
                {NAZWA_KATEGORII[category]}
              </span>
            </p>
            <p className="card-text text-body-secondary">{description}</p>

            <div className="d-flex gap-2">
                <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#zdjecie${id}`}>Powiększ</button>
                <button className="btn btn-danger" onClick={() => {deleteFunction(id)}}>Usuń</button>
            </div>
           </div>
      </div>
    );
}

export default PhotoCard;