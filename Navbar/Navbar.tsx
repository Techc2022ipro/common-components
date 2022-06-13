import { BrowserRouter as Router } from 'react-router-dom';


const Navbar = () => {
    return (
        <Router>
        <a href="http://localhost:7070">Home</a>
        <a href="http://localhost:2020">Product</a>
        <a href="http://localhost:8080">Login</a>
        </Router>
    )
}

export default Navbar;
