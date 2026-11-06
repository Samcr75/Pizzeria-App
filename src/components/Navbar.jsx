import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";
import logo from "../assets/Logo.jpg"

export default function Navbar() {
    const cart = useSelector((state) => state.cart.cart);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function logoutUser() {
        localStorage.removeItem("currentUser");
        dispatch(logout());
        navigate("/");
    }

    const totalCartItem = cart.reduce((total, item) => {
        return total + item.quantity
    }, 0)

    return (
        <>
            <nav className="navbar navbar-dark bg-dark py-2">
                <div className="container-fluid px-5 d-flex justify-content-between align-items-center">


                    {/* Left Side */}
                    <div className="d-flex align-items-center flex-grow-1">
                        <Link className="navbar-brand" to="/"><h3>Pizzeria</h3></Link>
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="Pizzeria Logo" style={{ width: "65px", height: "65px", borderRadius: "50%", objectFit: "cover" }} />
                        </Link>

                        <Link className="nav-link text-white ms-5" to="/order"><h5>Order Pizza</h5></Link>
                        <Link className="nav-link text-white ms-4" to="/build"><h5>Build Pizza</h5></Link>
                    </div>

                    {/* Right Side */}
                    {user ? (
                        <div className="d-flex align-items-center gap-3">
                            <span className="text-white fw-semibold">Welcome, {user.name}</span>
                            <Link to="/cart" className="btn btn-warning me-2"> Cart ({totalCartItem})</Link>
                            <button className="btn btn-danger" onClick={logoutUser}> Logout </button>
                        </div>
                    ) : (
                        <div className="d-flex align-items-center gap-3 ms-auto">
                            <Link to="/login" className="nav-link text-white"> Login </Link>
                            <Link to="/register" className="btn btn-warning">Register </Link>
                        </div>
                    )}
                </div>
            </nav >
        </>
    )
}