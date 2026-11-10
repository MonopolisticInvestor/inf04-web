import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="container mt-4">
            <h2>Nie znaleziono</h2>
            <Link to="/">Powrót na stronę główną</Link>
        </div>
    )
}

export default NotFound;