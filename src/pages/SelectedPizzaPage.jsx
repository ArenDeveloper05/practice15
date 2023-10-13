import { useParams } from "react-router-dom";
import SelectedPizza from "../components/menu/selected-pizza/SelectedPizza";
import Layout from "../layout/Layout";

const SelectedPizzaPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <SelectedPizza id={id} />
    </Layout>
  );
};

export default SelectedPizzaPage;
