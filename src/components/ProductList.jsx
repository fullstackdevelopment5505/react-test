import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './dummy.json';
import categories from './category.json';
import useBundle from '../hooks/useBundle';
import './style.scss';

export const ProductList = () => {
  const [products, setProducts] = useState(data);
  const {addProduct, removeProduct, bundle, disable} = useBundle();

  const updateProducts = (product, action) => {
    let newArray = products.map(item => {
      if ( item.id == product.id) {
        if(action == 'increment'){
          item.count = item.count + 1;
        } else {
          if (item.count > 0)
          item.count = item.count - 1;
        }   
      }
      return item;
    });
    setProducts(newArray);
  }
  console.log(bundle);

  return (
    <Container >
      <Row>
        <Col sm={8}>
        {
          categories.map((category, index) => 
            <Row xs={1} md={2} key={index}>      
                <Col xs={12} lg={12}>
                  <h3 className='pack-section'> {category.name}</h3>
                </Col>
                {
                  products.map((product, index) => 
                    product.product_category == category.id &&
                    <Col lg={3} key={index} >
                      <ProductCard 
                        product={product}                         
                        addProduct={addProduct} 
                        removeProduct={removeProduct}
                        updateProducts={updateProducts}
                        disabled={disable}
                      />
                    </Col>                 
                  )
                }              
            </Row>
          )
        }   
        </Col>
        <Col sm={4}>
          <Card className='bundle-card'>
            <Card.Header className='bundle-top'>
              BUILD YOUR PACK
            </Card.Header>
            <Card.Body>
              <Row>
                <Col xs = {4} lg = {4}>
                  <Image className='bundle-img' src={bundle[0] ? bundle[0].product_tumbnail : '../assets/empty.png'} />
                </Col>
                <Col xs = {4} lg = {4}>
                  <Image className='bundle-img' src={bundle[1] ? bundle[1].product_tumbnail : '../assets/empty.png'}  />
                </Col>
                <Col xs = {4} lg = {4}>
                  <Image className='bundle-img' src={bundle[2] ? bundle[2].product_tumbnail : '../assets/empty.png'}  />
                </Col>
              </Row>
              <Button disabled={!disable} style={{backgroundColor : !disable ? 'grey' : 'green'}}  className='cart-button'>Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}