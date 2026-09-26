import { Fragment } from "react/jsx-runtime";

function AddPhotoModal() {
    return (
        <div className="modal fade" id="dodajZdjecie">
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
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="title" className="form-label">Tytuł</label>
                                    <input type="text" name="title" id="title" className="form-control"></input>
                                    <div className="invalid-feedback">
                                        POdaj tytuł zdjęcia - to pole jest wymagane
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="category" className="form-label">Kategoria</label>
                                    <select className="form-select" id="category">
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
                                    Plik ze zdjęciem
                                </label>
                            </div>
                            <input type="file" className="form-control" id="file" accept="image/*" />
                            <div className="form-text">JPG lub PNG, maksymalnie 5MB.</div>

                            <div className="col-12">
                                <label htmlFor="description" className="form-label">
                                    Opis zdjęcia
                                </label>
                                <textarea id="description" className="form-control"  rows="3" />
                                <div className="form-text">
                                    Jedno dwa-zdania: gdzie i kiedy powstalo zdjęcie.
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