import { Fragment } from "react"

import PhotoCard from "./PhotoCard"
import PhotoModal from "./PhotoModal"
import { Link } from "react-router-dom";

function Gallery({photos, deleteFunction, favouriteFunction}) {
    return (
        <>
         <div className="row g-4" id="gallery">
            {photos.length !== 0 ? (
                photos.map((photoItem) => (
                (
                    // <Link to={"/zdjecie/" + photoItem.id}>Pow</Link>

                    <Fragment key={photoItem.id}>
                        <div className="col-12 col-md-6 col-lg-4">
                            <PhotoCard
                                title={photoItem.title}
                                id={photoItem.id}
                                description={photoItem.description}
                                category={photoItem.category}
                                image={photoItem.image}
                                alt={photoItem.alt}
                                deleteFunction={deleteFunction}
                                favouriteFunction={favouriteFunction}
                                favourite={photoItem.favourite}
                            />
                        </div>
                        
                    </Fragment>
                )
            ))) :(<div className="alert alert-warning">Brak zdjęć</div>)}
            
        </div>
       
        </>
    );
}

export default Gallery