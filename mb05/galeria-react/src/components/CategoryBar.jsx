function CategoryBar() {
    return (
        <div className="d-flex flex-row gap-3">
            <button className="btn btn-primary">Wszystkie</button>
            <button className="btn btn-primary">Góry</button>
            <button className="btn btn-primary">Morze</button>
            <button className="btn btn-primary">Miasto</button>
        </div>
    )
}

export default CategoryBar;