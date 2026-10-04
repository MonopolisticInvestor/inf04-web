function PhotoModal({id, title, description, imageLarge, alt}) {
  let actualURL = imageLarge.includes("https://") ? imageLarge : `../assets/${imageLarge}`;  
    return (
      <div className="modal fade" id={`zdjecie${id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body d-flex flex-column">
              <img src={actualURL} className="img-fluid" alt={alt}/>
              <div className="modal-header">
                <h2 className="modal-title">{title}</h2>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PhotoModal;