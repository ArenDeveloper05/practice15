import { useParams } from "react-router-dom";
import bannerBackground from "../../../assets/banner/banner-background.jpg";
import PageBanner from "../../common/page-banner/PageBanner";

const SelectedPizza = () => {
  const {id} = useParams();
  return (
    <div>
      <PageBanner 
        background={bannerBackground} 
        title={'Chicken Breast'}
        firstDirectionPoint={'Home'}
        secondDirectionPoint={'Order Online'}
        thirdDirectionPoint={'Chicken Bresast'}
      />
    </div>
  )
}

export default SelectedPizza
