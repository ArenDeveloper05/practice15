import { useParams } from 'react-router-dom';
import SelectedPizza from '../components/menu/selected-pizza/SelectedPizza'
import Layout from '../layout/Layout'
import { useSelector } from 'react-redux';

const SelectedPizzaPage = () => {
  const {id} = useParams();
  const data = useSelector(state => state.pizzaReview.pizzas);
  const x = data.filter(item => item.id === id);
  data.forEach((item) => {
    if(item.id === id) console.log(item);
  })
  console.log(x);
  // console.log(id);
  return <Layout>
    <SelectedPizza id={id}/>
  </Layout>
}

export default SelectedPizzaPage
