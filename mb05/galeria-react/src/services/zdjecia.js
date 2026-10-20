let photos = null;

export function onAdd(image) {
    const newId = Math.max(...photos.map(i => i.id)) + 1
    setBasePhotos([...basePhotos, {...image, id: newId, favourite: false}])
}

function toggleFavourite(id) {
    setBasePhotos(basePhotos.map(i => i.id === id ? {...i, favourite: !i.favourite} : i))
}

async function fetchPhotos() {
    if (photos) return photos;

    let response = await fetch("/photos.json")
    if (!response.ok) {
        throw new Error(response.status)
    } else {
        let data = await response.json()
        
        console.log(data)
        photos = data
        if (data.length === 0) {
            throw new Error("Pusty folder")
        }
        return photos
    }
}

export async function fetchPhoto(id) {
    const images = await fetchPhotos()
    const foundImage = images.find(item => item.id == Number(id))

    console.log(images, foundImage, id)
    if (foundImage) {
        return foundImage
    } else {
        return null
    }
}

export function deleteImage() {

}