import React from 'react';
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

class Card extends React.Component<interfaceProduct, Record<string, never>> {
  render() {
    return (
      <div className="product">
        <div className="product__wrapper-title">
          <div className="product__title">{this.props.title}</div>
          <div className="product__wrapper-category">
            <div className="product__category">{this.props.category}</div>
            <div className="product__brand">{this.props.brand}</div>
          </div>
        </div>
        <div className="product__wrapper-img">
          <img className="product__img" src={this.props.thumbnail} />
        </div>
        <div className="product__wrapper-rating">
          <div className="product__rating">{this.props.rating}</div>
          <div className="product__discount">{this.props.discountPercentage}</div>
        </div>
        <div className="product__wrapper-price">
          <div className="product__price">{this.props.price}</div>
          <div className="product__add"></div>
        </div>
        <div className="product__wrapper-stock">
          <div className="product__stock">{this.props.stock}</div>
        </div>
      </div>
    );
  }
}

export default Card;
