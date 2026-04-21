import "./css/ProductCard.css";

const products = [
  {
    title: "Nike Air Max",
    img: "https://assets.codepen.io/4164355/shoes.png",
  },
  {
    title: "Adidas Runner",
    img: "https://assets.codepen.io/4164355/shoes.png",
  },
  {
    title: "Puma Sport",
    img: "https://assets.codepen.io/4164355/shoes.png",
  },
];

function ProductCard() {
  return (
    <div className="product-card">
      {products.map((item, i) => (
        <div className="container" key={i}>
          <div className="card">
            {/* IMAGE */}
            <div className="imgBx">
              <img src={item.img} alt={item.title} />
            </div>

            {/* CONTENT */}
            <div className="contentBx">
              <h2>{item.title}</h2>

              <div className="size">
                <h3>Size :</h3>
                {[7, 8, 9, 10].map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>

              <div className="color">
                <h3>Color :</h3>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <a href="#">Buy Now</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
