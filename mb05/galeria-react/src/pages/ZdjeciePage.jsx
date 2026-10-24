import { Link, useNavigate, useParams } from "react-router-dom";

import { fetchPhoto } from "../services/zdjecia";
import { useEffect, useState } from "react";

function ZdjeciePage() {
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("");
    const {id} = useParams()
    const navigate = useNavigate()
    const [image, setImage] = useState(null);
    const [actualUrl, setActualUrl] = useState("")

    useEffect(() => {
        async function setPhoto() {
            const photo = await fetchPhoto(id);

            if (photo !== null) {
                setImage(photo);
                setActualUrl(photo.image.includes("https://") ? photo.image : `../assets/${photo.imageLarge}`);  
                setIsLoading(false)
            } else {
                setImage(null)
                setError("Error fetching iamge")
                setIsLoading(false)
            }

            // .then(response => {
            //     setActualUrl(response.imageLarge.includes("https://") ? response.imageLarge : `../assets/${imageLarge}`);  
            //     console.log(response)
            //     console.log("Response")
            //     setIsLoading(false)
                
            // }).catch(error => {
            //     setError(error.toString())
            //     setIsLoading(false)
            // })
        }

        setPhoto()
    }, []);
    
    return (
        <div className="container" id={`zdjecie${id}`}>

            <div className="d-flex flex-column gap-2">
            <Link
            style={{width: "125px"}}
            onClick={() => {navigate(-1)}}
            className="btn btn-outline-primary">
                Wstecz
            </Link>
            {isLoading == true && error == "" && (
                <div className="spinner-border">
                </div>
            )}
            {isLoading == true && error !== "" && (
                <div className="alert alert-warning">{error.toString()}</div>
            )}
            {isLoading == false && error == "" && image !== null && (
                <div className="d-flex flex-column gap-2">
                    <div className="d-flex flex-column">
                    <img src={actualUrl} className="img-fluid" alt={image.alt}/>
                    <div className="d-flex flex-column gap-2">
                        <h2>{image.title}</h2>
                    </div>
                    <p>{image.description}</p>
                    </div>
                </div>
            )}
            {isLoading == false && error !== "" && image == undefined && (
                <div className="d-flex flex-column gap-2">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h2>Brak zdjęcia</h2>
                    </div>
                </div>
            )}

            
            </div>
        </div>
    );
}

export default ZdjeciePage;