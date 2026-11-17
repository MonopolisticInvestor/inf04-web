let photos = null;

/**
    Dodaje nowe zdjęcie do pamięci serwera
    @param {{
        title: string,
        category: string,
        image: string,
        imageLarge: string,
        alt: string,
        description: string
    }} [image]
    @returns none - funkcja ustawia pamięć w useState.
*/
export function onAdd(image) {
    const newId = Math.max(...photos.map(i => i.id)) + 1
    setBasePhotos([...basePhotos, {...image, id: newId, favourite: false}])
}

function toggleFavourite(id) {
    setBasePhotos(basePhotos.map(i => i.id === id ? {...i, favourite: !i.favourite} : i))
}

/**
 * Pobiera zdjęcia z pliku "photos.json"
 * @param none
    @returns {Array<{id: number, title: string,
    description: string,
    category: string,
    image: string,
    imageLarge: string,
    alt: string,
    favourite: boolean}>>}
 * }
 */
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

/**
 * Pobiera konkretne zdjęcie z pliku "photos.json" lub jeśli nie ma zdjęć, pobiera, używając fetchPhotos()
 * @param id - number
    @returns {{id: number, title: string,
    description: string,
    category: string,
    image: string,
    imageLarge: string,
    alt: string,
    favourite: boolean} | null}
 * }
 */
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

/**
 * Usuwa konkretne zdjęcie z pamięci serwera
 * @param id - number
    @returns {Array<{id: number, title: string,
    description: string,
    category: string,
    image: string,
    imageLarge: string,
    alt: string,
    favourite: boolean}>>} - zaktualizowane zdjęcia bez tego konkretnego.
 * }
 */
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

/**
 * Zmienia wartość pola "favourite" konkretnego zdjęcie w pamięci serwera
 * @param id - number
    @returns {Array<{id: number, title: string,
    description: string,
    category: string,
    image: string,
    imageLarge: string,
    alt: string,
    favourite: boolean}>>} - zaktualizowane zdjęcia z konkretnym ustawionym na odwrotną wartość pola favourite.
 * }
 */
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