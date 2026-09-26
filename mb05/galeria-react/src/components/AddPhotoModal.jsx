import { Fragment } from "react/jsx-runtime";

function AddPhotoModal() {
    return (
        <Fragment>
            <button data-bs-toggle="modal" data-bs-target="addPhotoModal">Dodaj zdjęcie</button>
            <div className="modal fade" id="addPhotoModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body d-flex flex-column">
                            <form>
                                <input type="file" >Wybierz zdjęcie</input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
        
    )
}