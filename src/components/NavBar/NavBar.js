import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Tienda LG</h3>
            <div>
                <button>Pc de escritorio</button>
                <button>Notebooks</button>
                <button>Perifericos</button>
                <button>Accesorios</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar