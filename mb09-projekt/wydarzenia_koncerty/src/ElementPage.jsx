import { Link, useNavigate, useParams } from "react-router-dom";
import wydarzenia from "./wydarzenia"

function ElementPage() {
    const id = useParams().id;

    const foundItem = wydarzenia.find(item => item.id == id)

    const navigate = useNavigate()

    return (
        <div className="container mt-4">
            {foundItem != undefined ? 
                <div>
                    <p>Nazwa wydarzenia: {foundItem.nazwa}</p>
                    <p>Miasto: {foundItem.miasto}</p>
                    <p>Data: {foundItem.data}</p>
                    <p>Cena: {foundItem.cena}</p>
                </div>
            : <h2>Nie znaleziono</h2>}
            <button className="btn btn-primary" style={{width: "125px"}} onClick={() => {navigate(-1)}}>Powrót</button>

        </div>
    )
}

export default ElementPage;