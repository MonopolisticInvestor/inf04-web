import { Fragment } from "react"

import PhotoCard from "./PhotoCard"
import PhotoModal from "./PhotoModal"

function Gallery({photos, deleteFunction}) {
    console.log(photos)

    return (
        <>
         <div className="row g-4" id="gallery">
            {photos.length !== 0 ? (
                photos.map((photoItem) => (
                (
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
                            />
                        </div>
                        <PhotoModal
                            id={photoItem.id}
                            title={photoItem.title}
                            description={photoItem.description}
                            imageLarge={photoItem.imageLarge}
                            alt={photoItem.alt}
                        />
                    </Fragment>
                )
            ))) :(<div className="alert alert-warning">Brak zdjęć</div>)}
            
        </div>
       
        </>
    );
}

export default Gallery