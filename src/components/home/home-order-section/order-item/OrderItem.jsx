const OrderItem = ({ title, content, img }) => {
  return (
    <div className="home-order-section-item">
      <img src={img} alt="svg" />
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default OrderItem;
