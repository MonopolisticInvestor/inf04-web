import { Link } from "react-router-dom"

function NotFoundPage() {
    return (
        <div className="container d-flex flex-column gap-2 justify-items-center align-items-center">
            <h1>Nie znaleziono</h1>
            <Link style={{width: "175px"}} to="/" className="btn btn-outline-secondary">Powrót na stronę główną</Link>
        </div>
    )
}
export default NotFoundPage