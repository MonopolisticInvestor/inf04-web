function Footer() {
    let currentDate = new Date().getFullYear()
    return (
        <footer id="footer" className="border-top mt-5 py-4">
            <div className="container">
                <p className="mb-1">Galeria Podróży &copy; {currentDate} - projekt INF 04. Antoni Nabzdyk</p>
            </div>
        </footer>
    )
}

export default Footer;