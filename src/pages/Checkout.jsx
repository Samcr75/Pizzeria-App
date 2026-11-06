import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";

export default function Checkout() {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [address, setAddress] = useState("");
    const [mobile, setMobile] = useState("");
    const [payment, setPayment] = useState("Cash On Delivery");

    function placeOrder() {
        if (address.trim() === "" || mobile.trim() === "") {
            alert("Please fill all details");
            return;
        }

        if (!/^[0-9]{10}$/.test(mobile)) {
            alert("Enter Valid Mobile Number");
            return;
        }

        if (cart.length === 0) {
            alert("Cart is Empty");
            return;
        }

        dispatch(clearCart());
        navigate("/success");
    }

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Checkout</h1>

            <div className="row">
                <div className="col-md-7">
                    <div className="card p-4 shadow">
                        <h3>Delivery Details</h3>

                        <div className="mb-3">
                            <label>Delivery Address</label>
                            <textarea
                                className="form-control"
                                rows="4"
                                placeholder="Enter your delivery address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Mobile Number</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter mobile number"
                                value={mobile}
                                maxLength="10"
                                onChange={(e) => {
                                    if (/^[0-9]*$/.test(e.target.value)) {
                                        setMobile(e.target.value);
                                    }
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label>Payment Method</label>
                            <select
                                className="form-select"
                                value={payment}
                                onChange={(e) => setPayment(e.target.value)}
                            >
                                <option>Cash On Delivery</option>
                                <option>UPI</option>
                                <option>Credit Card</option>
                            </select>
                        </div>

                        <button
                            className="btn btn-warning w-100"
                            onClick={placeOrder}
                        >
                            Place Order
                        </button>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="card p-4 shadow">
                        <h3>Order Summary</h3>
                        <hr />

                        {cart.map((pizza, index) => (
                            <div
                                key={`${pizza.id}-${index}`}
                                className="d-flex justify-content-between mb-2"
                            >
                                <span>
                                    {pizza.name} X {pizza.quantity}
                                </span>
                                <span>
                                    ₹{pizza.price * pizza.quantity}
                                </span>
                            </div>
                        ))}

                        <hr />

                        <h4 className="text-end">
                            Total ₹
                            {cart.reduce(
                                (total, pizza) =>
                                    total + pizza.price * pizza.quantity,
                                0
                            )}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}