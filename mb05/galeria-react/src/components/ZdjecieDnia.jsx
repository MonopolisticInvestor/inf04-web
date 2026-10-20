import { useState, useEffect } from "react";
import PhotoCard from "./PhotoCard";

function ZdjecieDnia() {
    const [imageInfo, setImageInfo] = useState("")
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [imageId, setImageId] = useState("")
    const [newImage, setNewImage] = useState(0)

    const chooseRandomImage = () => {
        const randomId = Math.floor(Math.random() * 300);
        setNewImage(randomId)
    }

    useEffect(() => {
        let randomId = 0;
        if (newImage == 0) {
            randomId = Math.floor(Math.random() * 300);
        } else {
            randomId = newImage
        }
        
        fetch(`https://picsum.photos/id/${randomId}/info`)
            .then(
                response => response.json()
            )
            .then(data => {
                setImageInfo(data)
                setImageId(data.id)
                console.log(data)
            })
            .catch(error => {
                setError(error)
            })
            .finally(
                setIsLoading(false)
            )
    }, [newImage])

    return (
        <div className="d-flex align-items-center justify-content-center gap-4">
            {isLoading == true && error == "" && (
                <div className="spinner-border">
                </div>
            )}
            {isLoading == false && error !== "" && (
                <h3 className="alert alert-danger">{error}</h3>
            )}
            {isLoading == false && error == "" && (
                <img id="newImage" alt={imageInfo.author + "'s image" || ""}
                src={`https://picsum.photos/id/${imageId}/400/250`} />
            )}
            
            <button className="btn btn-primary" onClick={() => {chooseRandomImage()}}>Losuj nowe zdjęcie</button>
        </div>
    )
}

export default ZdjecieDnia