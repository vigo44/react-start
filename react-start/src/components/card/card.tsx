import './card.css';

interface interfaceProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

function Card(props: interfaceProduct) {
  return (
    <div className="product">
      <div className="product__wrapper-title">
        <div className="product__title">{props.title}</div>
        <div className="product__wrapper-category">
          <div className="product__category">{props.category}</div>
          <div className="product__brand">{props.brand}</div>
        </div>
      </div>
      <div className="product__wrapper-img">
        <img className="product__img" src={props.thumbnail} />
      </div>
      <div className="product__wrapper-rating">
        <div className="product__rating">{props.rating}</div>
        <div className="product__discount">{props.discountPercentage}</div>
      </div>
      <div className="product__wrapper-price">
        <div className="product__price">{props.price}</div>
        <div className="product__add"></div>
      </div>
      <div className="product__wrapper-stock">
        <div className="product__stock">{props.stock}</div>
      </div>
    </div>
  );
}

export default Card;
