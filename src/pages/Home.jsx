
import ingredients from "../assets/freshIngredients.jpg"
import chef from "../assets/kitchenChef.jpg"
import delivery from "../assets/deliveryTimer.jpg"
export default function Home() {
    return (
        
        <div className="container mt-4">
            <h1 className="text-center mb-4">Our Story</h1>
            <section className="text-muted mx-auto" style={{maxWidth:"1100px"}}>
               {/* story section */}
                <p>
                    We believe in good. We launched Fresh Pan Pizza Best
                    Excuse Awards on our Facebook fan page. Fans were given
                    situations where they had to come up with wacky and fun
                    excuses. The person with the best excuse won the Best
                    Excuse Badge and won Pizzeria's vouchers.
                </p>
                <p>
                    Ever since we launched the Tastiest Pan Pizza, people
                    have not been able to resist the softest, cheesiest,
                    crunchiest and butteriest Fresh Pan Pizza.
                </p>
                <p>
                    We believe that a great pizza starts with fresh
                    ingredients, careful preparation and great taste.
                </p>
            </section>



            <div className="row mt-5 align-items-center">
{/* ingredients */}
                <div className="col-md-5">
                    <img src={ingredients} className="img-fluid rounded mb-3" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
                </div>

                <div className="col-md-7">
                    <h2 className="text-center">Ingredients</h2>
                    <p>
                        We're ruthless about goodness. We have no qualms about
                        tearing up a day-old lettuce leaf or steaming a baby
                        carrot. Cut. Cut. Chop. Chop. Steam. Steam. Stir. Stir.
                        While they're still young and fresh - that's our motto.
                    </p>
                </div>
            </div>




            <div className="row mt-5 align-items-center">
                <div className="col-md-5">
                    {/* chef  */}
                    <h2 className="text-center">Our Chefs</h2>
                    <p>
                        They make sauces sing and salads dance. They create
                        magic with skill, knowledge, passion and stirring
                        spoons. They make goodness so good, it doesn't know
                        what to do with itself.
                    </p>
                </div>

                <div className="col-md-7">
                    <img src={chef} className="img-fluid rounded" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
                </div>
            </div>




            <div className="row mt-5 mb-5 align-items-center">
                <div className="col-md-5">
                    <img src={delivery} className="img-fluid rounded" style={{ height: "300px", width: "100%", objectFit: "cover" }} />
                </div>
                <div className="col-md-7 ">
                    {/* delivery */}
                    <h2 >45 Min Delivery</h2>
                    <p className="text-muted">Fresh and hot pizzas delivered to your doorstep in just
                        45 minutes.</p>
                </div>
            </div>
        </div>
    );
}