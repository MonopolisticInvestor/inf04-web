function FiltersOffCanvas() {
    return (
        <div className="offcanvas offcanvas-start" tabindex="-1" id="filterPanel">
            <div className="offcanvas-header">
                <h2 className="offcanvas-title h5" id="filterPanelLabel"></h2>
                <button
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                >
                </button>

                <div className="offcanvas-body">
                    <p className="text-body-secondary">Zaznacz kategorie, które chcesz zobaczyć:</p>

                    <div className="form-check">
                        <label htmlFor="mountainsFilter" defaultChecked className="form-check-label">Góry</label>
                        <input type="checkbox" name="mountainsFilter" id="mountainsFilter" className="form-check-input" />
                    </div>
                    <div className="form-check">
                        <label htmlFor="cityFilter" defaultChecked className="form-check-label">Miasto</label>
                        <input type="checkbox" name="cityFilter" id="cityFilter" className="form-check-input" />
                    </div>
                    <div className="form-check">
                        <label htmlFor="seaFilter" defaultChecked className="form-check-label">Morze</label>
                        <input type="checkbox" name="seaFilter" id="seaFilter" className="form-check-input" />
                    </div>

                    <button
                    className="btn btn-primary mt-4"
                    data-bs-dismiss="offcanvas">
                        Zamknij
                    </button>
                </div>
            </div>
           
        </div>
    );
}

export default FiltersOffCanvas;