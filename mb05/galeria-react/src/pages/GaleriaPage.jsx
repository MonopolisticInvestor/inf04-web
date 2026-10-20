import Gallery from "../components/Gallery"
import CategoryBar from '../components/CategoryBar'
import AddPhotoModal from '../components/AddPhotoModal'
import FiltersOffCanvas from '../components/FiltersOffCanvas'
import ImageCounter from '../components/ImageCounter'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import ZdjecieDnia from '../components/ZdjecieDnia'
import { Link } from "react-router-dom"

function GaleriaPage() {
    const [activeCategory, setActiveCategory] = useState('wszystkie');
    const [basePhotos, setBasePhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("")

    const visible = activeCategory == "wszystkie" ? basePhotos : basePhotos.filter(item => 
        item.category == activeCategory
    )


    function changeCategory(category) {
        setActiveCategory(category);
    }

    function deleteImage(id) {
        setBasePhotos(basePhotos.filter(item => item.id != id))
        console.log(basePhotos)
    }

    function onAdd(image) {
        const newId = Math.max(...photos.map(i => i.id)) + 1
        setBasePhotos([...basePhotos, {...image, id: newId, favourite: false}])
    }

    function toggleFavourite(id) {
        setBasePhotos(basePhotos.map(i => i.id === id ? {...i, favourite: !i.favourite} : i))
    }

    useEffect(() => {
        

        fetchPhotos()
    }, [])


    return (
        <>
        <header className='container py-4 py-lg-5'>
            <div className='row align-items-center g-3'>
            <div className='col-12 col-lg-8'>
                <h1>Galeria zdjęć</h1>
                <p className='lead text-body-secondary mb-0'>
                Zdjęcia z wypraw w góry, nad morze i po mieście.
                Wybierz kategorię,
                żeby zawęzić widok — albo powiększ zdjęcie, które Ci
                się spodoba.
                </p>
            </div>
            {isLoading == false && error == "" && (
                <div className='col-12 col-lg-4'>
                <div className='d-flex flex-wrap gap-2 justify-content-lg-end'>
                <button
                className='btn btn-outline-secondary'
                data-bs-toggle="offcanvas"
                data-bs-target="#filterPanel"
                type='button'>
                    Filtry
                </button>
                {/* <button
                    className='btn btn-outline-secondary'
                    data-bs-toggle="modal"
                    data-bs-target="#addImage"
                    type='button'>
                        Dodaj zdjęcie
                    </button>
                */}
                <Link to="/dodaj">
                    Dodaj zdjęcie
                </Link>
                </div>
            </div>
            )}
            
            </div>
        </header>

        <ZdjecieDnia />
        {isLoading == false && (
            <>
                {error !== "" ? <div className='container mt-4 m-4'>{error.toString()}</div> :
                    (
                    <>
                    <div className="container mt-4 d-flex flex-column gap-2">
                        <CategoryBar activeCategory={activeCategory} changeCategory={changeCategory} />
                        <ImageCounter allPhotos={basePhotos?.length} visible={visible?.length} />
                        <Gallery photos={visible} deleteFunction={deleteImage} favouriteFunction={toggleFavourite}/>
                        
                    </div>
                    <AddPhotoModal onAdd={onAdd}/>
                    <FiltersOffCanvas />
                    </>
                    )
                }
            </>
        )}
        {isLoading && (
            <div className='container d-flex justify-center items-center'>
                <div className='spinner-border'>
                </div>
            </div>
        )}
        
        <Footer />
    </>
    )
}

export default GaleriaPage;