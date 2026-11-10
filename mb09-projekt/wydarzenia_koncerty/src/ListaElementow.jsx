import { useState } from "react";
import wydarzenia from "./wydarzenia"
import { Link } from "react-router-dom";

function ListaElementow() {
    const miasta = ["Kraków", "Wrocław", "Poznań", "Gdańsk"];

    const [krakowVisible, setKrakowVisible] = useState(true)
    const [wroclawVisible, setWroclawVisible] = useState(true)
    const [poznanVisible, setPoznanVisible] = useState(true)
    const [gdanskVisible, setGdanskVisible] = useState(true)

    const visible = wydarzenia.filter((item) => (
        (item.miasto == miasta[0] && krakowVisible) ||
        (item.miasto == miasta[1] && wroclawVisible) ||
        (item.miasto == miasta[2] && poznanVisible) ||
        (item.miasto == miasta[3] && gdanskVisible)
    ))

    return (
        <div className="container mt-4">
            <div className="d-flex gap-2 m-2">
                
                <div className="form-check form-switch">
                    <input className="form-check-input" defaultChecked={krakowVisible} onClick={() => {setKrakowVisible(!krakowVisible)}} type="checkbox" id={"miasto-Kraków"} role="switch"></input>
                    <label htmlFor={"miasto-Kraków"}>Kraków</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" defaultChecked={wroclawVisible} onClick={() => {setWroclawVisible(!wroclawVisible)}} type="checkbox" id={"miasto-Wrocław"} role="switch"></input>
                    <label htmlFor={"miasto-Wrocław"}>Wrocław</label>
                </div>
                 <div className="form-check form-switch">
                    <input className="form-check-input" defaultChecked={poznanVisible} onClick={() => {setPoznanVisible(!poznanVisible)}} type="checkbox" id={"miasto-Poznań"} role="switch"></input>
                    <label htmlFor={"miasto-Poznań"}>Poznań</label>
                </div>
                 <div className="form-check form-switch">
                    <input className="form-check-input" defaultChecked={gdanskVisible} onClick={() => {setGdanskVisible(!gdanskVisible)}} type="checkbox" id={"miasto-Gdańsk"} role="switch"></input>
                    <label htmlFor={"miasto-Gdańsk"}>Gdańsk</label>
                </div>
            </div>
            <div className="row g-3">
                {visible.map((item) => (
                    <div className="col-12 col-md-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{item.nazwa}</h5>
                                <h3>{item.miasto}</h3>
                                <Link to={"/wydarzenie/" + item.id}>Szczegóły</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListaElementow;