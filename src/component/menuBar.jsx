import { Link } from "react-router-dom";

function MenuBar() {
    
    return (
        <nav className="flex flex-col p-4">
            <Link to="/" className=" text-2xl">Home</Link>
            <Link to="/Portafoglio" className=" text-2xl">Portafoglio</Link>
            <Link to="/Aggiungi" className=" text-2xl">Aggiungi</Link>
        </nav>
    )
}

export default MenuBar;