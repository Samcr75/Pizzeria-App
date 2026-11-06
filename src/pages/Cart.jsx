import { useDispatch, useSelector } from "react-redux"
import { increaseQty, decreaseQty, removeItem, clearCart } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";


export default function Cart() {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const total = cart.reduce((sum, pizza) => sum + pizza.price * pizza.quantity, 0);
    return (
        <div className="container mt-4">
            <div className="card p-4 shadow">
                <h2>My Cart</h2>
                {cart.length === 0 ? (
                    <div className="text-center py-5">
                        <h2 className="mb-3">My Cart</h2>
                        <p className="text-muted mb-4">Your cart is empty</p>
                        <Link to="/order" className="btn btn-warning px-4">Order Pizza</Link>
                    </div>
                ) : (
                    <>
                        {cart.map((pizza) => (
                            <div key={`${pizza.id}-${pizza.customized}-${pizza.selectedIngredients ?.map(item => item.id).join("-")|| "naormal"}`} className="row align-items-center border-bottom py-3">
                                <div className="col-md-2">
                                    <img src={pizza.image} className="img-fluid rounded" style={{ height: "80px", width: "80px", objectFit: "cover" }} />
                                </div>

                                <div className="col-md-4">
                                    <h5 className="mb-1">{pizza.name} {pizza.customized && (
                                        <span className="text-warning">{" "}-Customized</span>
                                    )}</h5>
                                    {pizza.customized && (
                                        <p className="text-muted mb-1">
                                            <strong>Toppings: </strong>{" "}
                                            {pizza.selectedIngredients
                                            .map((ingredient) => ingredient.tname).join(", ")}
                                        </p>
                                    )}
                                    <h6>₹{pizza.price}</h6>
                                </div>
                                <div className="col-md-3 d-flex align-items-center">
                                    <button className="btn btn-dark" onClick={() => dispatch(decreaseQty({id:pizza.id, customized: pizza.customized, selectedIngredients: pizza.selectedIngredients,}))}>-</button>
                                    <span className="mx-3"> Quantity :{pizza.quantity} </span>
                                    <button className="btn btn-dark" onClick={() => dispatch(increaseQty({id:pizza.id , customized:pizza.customized, selectedIngredients: pizza.selectedIngredients,}))}> + </button>
                                </div>
                                <div className="col-md-2"><h5>₹{pizza.price * pizza.quantity}</h5></div>
                                <div className="col-md-1">
                                    <button className="btn btn-danger" onClick={() => dispatch(removeItem({id: pizza.id, customized: pizza.customized, selectedIngredients: pizza.selectedIngredients,}))}>🗑</button>
                                </div>

                            </div>
                        ))}
                        <div className="text-end mt-4">

                            <h3>Sub Total : ₹{total} </h3>

                            <button className="btn btn-secondary me-2" onClick={() => dispatch(clearCart())}>Clear</button>

                            <Link to="/checkout" className="btn btn-warning" >Checkout</Link>

                        </div>
                    </>
                )}
            </div>
        </div>
    );
}