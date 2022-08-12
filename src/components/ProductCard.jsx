import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

export const ProductCard = ({product, addProduct, removeProduct, updateProducts, disabled}) => {

  return (
    <Card className='card'>
      <h5 style={{marginTop:"30px"}}>Option {product.option}</h5>
      <Card.Img variant="top" src={product.product_tumbnail} className="card__img" />
      <div className="card__body">
        <Card.Body>
          <Card.Title>{product.product_name}</Card.Title>
          <Button 
            className='action-btn' 
            onClick={()=>{ 
              addProduct(product);
              updateProducts(product, 'increment');
            }} 
            disabled={disabled}
          >
            <Image src="../assets/add-icon.png"  />
          </Button>
          <span className='count' style={{backgroundColor : product.count > 0 ? 'red' : 'green'}}> {product.count} </span>
          <Button 
            className='action-btn' 
            onClick={()=> {
              removeProduct(product);
              updateProducts(product, 'decrement');
            }}
            disabled={disabled}
          >
            <Image src="../assets/remove-icon.png" />
          </Button>
        </Card.Body>
      </div>
    </Card>
  );
}
