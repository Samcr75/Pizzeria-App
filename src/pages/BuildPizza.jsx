import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom";
import { addToCart } from "../redux/slices/cartSlice";

export default function BuildPizza() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [pizzas, setPizzas] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [selectedIngredients, setSelectedIngredients] = useState([]);
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user)

    useEffect(() => {
        fetch("/data/pizza.json")
            .then((res) => res.json())
            .then((data) => setPizzas(data));

        fetch("/data/ingredients.json")
            .then((res) => res.json())
            .then((data) => setIngredients(data));
    }, [])

    if (pizzas.length === 0 || ingredients.length === 0) {
        return <h3 className="text-center mt-5">Loading...</h3>
    }

    const pizza = id
        ? pizzas.find((item) => item.id === id)
        : pizzas[0];

    const totalPrice = pizza.price + selectedIngredients.reduce((total, item) => total + item.price, 0);
    function toggleIngredient(ingredient) {
        const exists = selectedIngredients.find(
            (item) => item.id === ingredient.id
        );

        if (exists) {
            setSelectedIngredients(
                selectedIngredients.filter(
                    (item) => item.id !== ingredient.id
                )
            );
        } else {
            setSelectedIngredients([...selectedIngredients, ingredient]);
        }
    }

    function buildPizza() {
        if (!user) {
            alert("Please Login First to Make Your Pizza");
            navigate("/login");
            return;
        }

        const customizedPizza = {
            ...pizza,
            price: totalPrice,
            customized: true,
            selectedIngredients: selectedIngredients
        };
        dispatch(addToCart(customizedPizza));
        navigate("/cart")
    }

    return (
        <div className="container mt-4">
            <h2 className="text-center fw-bold mb-4">Build Your Pizza</h2>
            <div className="row justify-content-center">
                <div className="text-center col-lg-7 col-md-9">
                    <h3 className="text-center fw-bold mt-3">{pizza.name}</h3>
                    <h5 className="text-center text-warning fw-bold">Base Price: ₹{pizza.price}</h5>
                    <p className="text-center mb-4">Pizzeria now gives you options to build your own pizza.
                        <br />Customize your pizza by choosing ingredients from the list given below.</p>

                    <div className="border">
                        {ingredients.map((item) => (
                            <div key={item.id} className="row align-items-center border-bottom py-2 px-3">
                                <div className="col-2">
                                    <img src={item.image} className="img-fluid rounded" style={{ width: "45px", height: "45px", objectFit: "cover" }} />
                                </div>
                                <div className="col-4 fw-semibold">
                                    {item.tname}
                                </div>
                                <div className="col-3 fw-bold">
                                    ₹{item.price}
                                </div>
                                <div className="col-3">
                                    {selectedIngredients.some((i) => i.id === item.id) ? (
                                        <span className="text-success fw-bold" style={{ cursor: "pointer" }} onClick={() => toggleIngredient(item)}> ✔ Added</span>
                                    ) : (
                                        <span className="text-warning" style={{ cursor: "pointer" }} onClick={() => toggleIngredient(item)}> ☐ Add </span>
                                    )}
                                </div>

                            </div>

                        ))}
                    </div>
                </div>
                <div className="col-lg-7 col-md-9 text-center">
                    <h3 className="text-primary fw-bold mt-4">Total Cost: ₹{totalPrice}</h3>
                    <div className="text-center">
                        <button className="btn btn-dark px-5 mt-3" onClick={buildPizza}>Build Ur Pizza</button>
                    </div>
                </div>
            </div>
        </div>


    );
}