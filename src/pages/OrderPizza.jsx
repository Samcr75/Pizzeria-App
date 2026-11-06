import { useDispatch, useSelector } from "react-redux"
import { addToCart, increaseQty, decreaseQty } from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function OrderPizza() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [pizzas, setPizzas] = useState([]);
    const user = useSelector((state) => state.auth.user);
    const cart = useSelector((state) => state.cart.cart);

    useEffect(() => {
        fetch("/data/pizza.json")
            .then((res) => res.json())
            .then((data) => setPizzas(data));

    }, [])

    function addPizza(pizza) {
        if (!user) {
            alert("Please login to add items to your cart.")
            navigate("/login");
            return;
        }
        dispatch(addToCart({...pizza, customized:false}));

    }
    if (pizzas.length === 0) {
        return <h3 className="text-center mt-5">Loading...</h3>;
    }


    return (
        <div className="container mt-4">
            <div className="row g-0">
                {pizzas.map((pizza) => {
                    const cartItem = cart.find(
                        (item) =>
                            item.id === pizza.id &&
                            !item.customized
                    );
                    return(

                    <div className="col-md-6 border" key={pizza.id}>
                        <div className="row p-3">
                            <div className="col-3">
                                <h3>{pizza.name}</h3>
                                <p className="fs-4">{pizza.veg ? "🟢" : "🔴"}</p>
                                <h4>₹{pizza.price}</h4>
                            </div>
                            <div className="col-5">
                                <p>{pizza.description}</p>
                                <p><b>Ingredients :</b><br /> {pizza.ingredients.join(",")} </p>
                                <p><b>Toppings :</b><br />{pizza.topping.join(",")}</p>

                            </div>
                            <div className="col-4 text-center">
                                <img src={pizza.image} className="img-fluid mb-3" style={{ width: "160px", height: "160px", objectFit: "cover" }} />
                                {cartItem ? (
                                    <div className="d-flex justify-content-between align-items-center bg-success text-white rounded px-3 py-2 mb-2">
                                        <button className="btn btn-success border-0" onClick={() => dispatch(decreaseQty({id:cartItem.id, customized:false}))}>-</button>
                                        <span className="fw-bold">{cartItem.quantity} </span> 
                                        <button className="btn btn-success border-0" onClick={() => dispatch(increaseQty({id:cartItem.id, customized:false}))}> + </button>
                                    </div>
                                ) : (<button className="btn btn-warning w-100 mb-2" onClick={() => addPizza(pizza)}>Add To Cart</button>)}
                                <button className="btn btn-warning w-100" onClick={() => navigate("/build/" + pizza.id)}>Customize</button>
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>

        </div>
    )
}