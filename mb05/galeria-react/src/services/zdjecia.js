let photos = null;

export function onAdd(image) {
    const newId = Math.max(...photos.map(i => i.id)) + 1
    setBasePhotos([...basePhotos, {...image, id: newId, favourite: false}])
}

function toggleFavourite(id) {
    setBasePhotos(basePhotos.map(i => i.id === id ? {...i, favourite: !i.favourite} : i))
}

export async function fetchPhotos() {
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

export function deleteImageSource(id) {
    console.log("deleteImageSource")
    const foundItem = photos.findIndex(item => item.id == id)

    console.log(foundItem)
    if (foundItem !== -1) {
        photos = photos.filter(item => item.id !== id)
        console.log(photos) // shows less images
        return photos;
    } else {
        return photos;
    }
}

export async function addImage(image) {
    if (!photos) {
        photos = await fetchPhotos()
    }
    const newId = Math.max(...photos.map(i => i.id)) + 1
    photos.push({ ...image, id: newId, favourite: false})
}

export function toggleFavouriteSource(id) {
    const foundItem = photos.find(item => item.id == id)
    console.log("toggleFavouriteSource")
    console.log(foundItem)
    if (foundItem) {
        //foundItem.favourite = !foundItem.favourite;
        let photos2 = photos.map((item) => {
            return item.id == id ? ({...item, favourite: !foundItem.favourite}) : item
        })

        photos = photos2;
        return photos;
    } else {
        return photos;
    }
}