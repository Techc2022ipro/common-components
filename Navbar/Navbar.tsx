import { BrowserRouter as Router } from 'react-router-dom';


const Navbar = () => {
    return (
        <Router>
        <a href="http://localhost:8080">Login</a>
        <a href="http://localhost:7070">Home</a>
        </Router>
    )
}

export default Navbar;
