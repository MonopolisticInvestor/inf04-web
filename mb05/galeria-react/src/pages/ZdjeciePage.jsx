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
        // console.log("1")
        // console.log(fetchPhoto(id))
        fetchPhoto(id)
        .then(response => response.json()).then(response => {
            console.log(response)
            setImage(response)
            setIsLoading(false)

            setActualUrl(response.imageLarge.includes("https://") ? response.imageLarge : `../assets/${imageLarge}`);  
            console.log(response)
        }).catch(error => {
            setError(error.toString())
            setIsLoading(false)
        })
    }, []);
    
    return (
        <div className="container" id={`zdjecie${id}`}>

            <div className="d-flex flex-column gap-2">
            <Link
            onClick={() => {navigate(-1)}}
            className="btn btn-outline-primary">
                Wstecz
            </Link>
            {isLoading == true && error == "" && (
                <div className="spinner-border">
                </div>
            )}
            {isLoading == false && error == "" && (
                <div className="d-flex flex-column gap-2">
                    <div className="d-flex flex-column">
                    <img src={actualUrl} className="img-fluid" alt={alt}/>
                    <div className="d-flex flex-column gap-2">
                        <h2>{title}</h2>
                    </div>
                    <p>{description}</p>
                    </div>
                </div>
            )}

            
            </div>
        </div>
    );
}

export default ZdjeciePage;