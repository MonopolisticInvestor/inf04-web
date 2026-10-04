import { Modal } from "bootstrap";
import { useState } from "react";

const pustyFormularz = {
    title: "",
    category: "",
    image: "",
    alt: "",
    description: ""
}

function AddPhotoModal({onAdd}) {
    const [formularz, setFormularz] = useState(pustyFormularz);
    function changeProperty(property) {
        return function(event) {
            setFormularz({...formularz, [property]: event.target.value})
        }
    }

    function usageOfSubmit(event) {
        event.preventDefault();
        onAdd({
            title: formularz.title,
            category: formularz.category,
            image: formularz.image,
            imageLarge: formularz.image,
            alt: formularz.alt,
            description: formularz.description
        })

        setFormularz(pustyFormularz);
        Modal.getInstance(document.getElementById("addImage"))?.hide()
    }

    return (
        <div className="modal fade" id="addImage">
            <div className="modal-dialog  modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title h5" id="dodajZdjecieLabel">
                        Dodaj zdjęcie
                        </h2>
                        <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Zamknij"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={usageOfSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="title" className="form-label">Tytuł</label>
                                    <input onChange={changeProperty("title")} value={formularz.title} type="text" name="title" id="title" className="form-control"></input>
                                    <div className="invalid-feedback">
                                        Podaj tytuł zdjęcia - to pole jest wymagane
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="category" className="form-label">Kategoria</label>
                                    <select onChange={changeProperty("category")} value={formularz.category} className="form-select" id="category">
                                        <option value="" disabled>
                                        Wybierz kategorię…
                                        </option>
                                        <option value="gory">Góry</option>
                                        <option value="morze">Morze</option>
                                        <option value="miasto">Miasto</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="file" className="form-label">
                                    URL ze zdjęciem
                                </label>
                            </div>
                            <input type="text" className="form-control" id="image" value={formularz.image} onChange={changeProperty("image")}/>
                            <div className="form-text">Adres URL - https:// ...</div>

                            <div className="col-12">
                                <label htmlFor="description" className="form-label">
                                    Opis zdjęcia
                                </label>
                                <textarea id="description" className="form-control" value={formularz.description} onChange={changeProperty("description")} rows="3" />
                                <div className="form-text">
                                    Jedno dwa-zdania: gdzie i kiedy powstalo zdjęcie.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="description" className="form-label">
                                    Tekst alternatywny
                                </label>
                                <input type="text" id="alt" className="form-control" value={formularz.alt} onChange={changeProperty("alt")} />
                                <div className="form-text">
                                    Krótki opis zdjęcia dla osób korzystających z czytnika ekranu
                                </div>
                            </div>


                            <div className="col-12">
                                <div className="form-check">
                                    <label htmlFor="acceptance" className="form-check-label">Zgadzam sie na publikacje zdjęcia w galerii.</label>
                                    <input type="checkbox" id="acceptance" className="form-check-input"/>
                                </div>
                                
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Anuluj</button>

                                <button type="submit" className="btn btn-primary">Zapisz</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default AddPhotoModal;