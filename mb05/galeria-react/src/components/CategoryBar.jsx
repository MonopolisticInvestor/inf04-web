function CategoryBar() {
    return (
        <div className="d-flex flex-row gap-3">
            <button className="btn btn-outline-primary
active">Wszystkie</button>
            <button className="btn btn-outline-primary">Góry</button>
            <button className="btn btn-outline-primary">Morze</button>
            <button className="btn btn-outline-primary">Miasto</button>
        </div>
    )
}

export default CategoryBar;