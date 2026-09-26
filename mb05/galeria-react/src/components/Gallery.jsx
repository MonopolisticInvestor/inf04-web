import { Fragment } from "react"
import photos from "../data/photos.json"
import PhotoCard from "./PhotoCard"
import PhotoModal from "./PhotoModal"

function Gallery() {
    console.log(photos)
    return (
        <>
         <div className="row g-4" id="gallery">
            {photos.map((photoItem) => (
            <Fragment key={photoItem.id}>
                <div className="col-12 col-md-6 col-lg-4">
                    <PhotoCard
                    title={photoItem.title}
                    id={photoItem.id}
                    description={photoItem.description}
                    category={photoItem.category}
                    image={photoItem.image}
                    alt={photoItem.alt}
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
            ))}
        </div>
       
        </>
    );
}

export default Gallery