function CategoryBar({activeCategory, changeCategory}) {
    return (
        <div className="d-flex flex-row gap-3" id="categories">
            <button className={`btn btn-outline-primary ${activeCategory == "wszystkie" ? "active" : ""}`} onClick={() => {changeCategory("wszystkie")}}>Wszystkie</button>
            <button className={`btn btn-outline-primary ${activeCategory == "gory" ? "active" : ""}`} onClick={() => {changeCategory("gory")}}>Góry</button>
            <button className={`btn btn-outline-primary ${activeCategory == "morze" ? "active" : ""}`} onClick={() => {changeCategory("morze")}}>Morze</button>
            <button className={`btn btn-outline-primary ${activeCategory == "miasto" ? "active" : ""}`} onClick={() => {changeCategory("miasto")}}>Miasto</button>
        </div>
    )
}

export default CategoryBar;