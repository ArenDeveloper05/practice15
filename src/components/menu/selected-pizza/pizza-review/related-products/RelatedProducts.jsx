import {CONFIG} from "../../../../../config"

const RelatedProducts = () => {
  return (
    <section className="related-products">
        <div className="related-products-header">
            <p>Fresh From Pizzon</p>
            <h2>RELATED PRODUCTS</h2>
        </div>
        <div className="related-products-body">
            {
                CONFIG.related_products.map(({id, img, name, description, price}) => {
                    return (
                        <div key={id} className="related-products-body-item">
                            <img src={img} className={`${id === 2 ? "inline" : ""}`}/>
                            <a href="#">{name}</a>
                            <p>{description}</p>
                            <span>{price}</span>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}

export default RelatedProducts
