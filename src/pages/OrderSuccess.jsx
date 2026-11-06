import { Link } from "react-router-dom";

export default function OrderSuccess(){
    return(
        <div className="container text-center mt-5">
            <div className="card shadow p-5 mx-auto" style={{maxWidth:"600px"}}>
                <h2 className="text-success">✅ Order Successful</h2>
                <h4 className="mt-3">Your order has been placed successfully</h4>
                <p className="text-muted">Thank you for ordering from  Pizzeria</p>
                <Link to="/" className="btn btn-warning mt-3 w-60">Back to Home</Link>
            </div>
        </div>
    )
}