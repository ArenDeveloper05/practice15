import {   useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../../../common/container/Container";

const PizzaReview = ({id}) => {
    const data = useSelector((state) => state.pizzaReview.pizzas);
    // console.log(id);s
    const selectedObject = data.filter(item => item.id === id);
    // console.log(selectedObject);
  return (
    <section>
      <Container>
            {
                data.map(({id, img, name, last_price, price, description}) => {
                    return (
                        <div key={id}>
                            <div className="pizza">
                                <img src={img}  />
                            </div>
                            <div className="pizza-order-list">
                                <h1>{name}</h1>
                                <p>
                                    <span>{last_price}</span>
                                    <span>{price}</span>
                                </p>
                                <p>{description}</p>
                            </div>
                        </div>
                    )
                })
            }
      </Container>
    </section>
  )
}

export default PizzaReview
