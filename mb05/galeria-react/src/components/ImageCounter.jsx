function ImageCounter({allPhotos, visible}) {
    return (
        <div>
            <p>Wyświetlono {visible} z {allPhotos}</p>
        </div>
    )
}

export default ImageCounter;