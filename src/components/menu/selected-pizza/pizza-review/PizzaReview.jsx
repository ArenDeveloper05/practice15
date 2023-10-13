import { useSelector } from "react-redux";
import Container from "../../../common/container/Container";

const PizzaReview = ({ id }) => {
  const data = useSelector((state) => state.pizzaReview.pizzas);
  const selectedObject = data.find((item) => item.id === Number(id));
  return (
    <section>
      <Container>
        <div key={id}>
          <div className="pizza">
            <img src={selectedObject.img} />
          </div>
          <div className="pizza-order-list">
            <h1>{selectedObject.name}</h1>
            <p>
              <span>{selectedObject.last_price}</span>
              <span>{selectedObject.price}</span>
            </p>
            <p>{selectedObject.description}</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PizzaReview;
