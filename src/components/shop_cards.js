import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from "react-bootstrap/Row";
import Button from 'react-bootstrap/Button';

export default function shop_cards() {
    const cardsInfo = [
        { name: 'Bottle Cage',price:22.00, img: 'https://livedemo00.template-help.com/wt_prod-22072/images/product-1-109x175.png' },
        { name: 'Mount Carrier',price:15.00, img: 'https://livedemo00.template-help.com/wt_prod-22072/images/product-2-168x175.png' },
        { name: 'Commuter Carrier',price:32.00, img: 'https://livedemo00.template-help.com/wt_prod-22072/images/product-3-208x175.png' },
        { name: 'Bycycle Bag',price:17.99, img: 'https://livedemo00.template-help.com/wt_prod-22072/images/product-4-130x175.png' },
        { name: 'Gloves',price:54.99, img: 'https://livedemo00.template-help.com/wt_prod-22072/images/product-5-220x175.png' },
        { name: 'Bike Helmet',price:31.00, img: 'https://livedemo00.template-help.com/wt_prod-22072/images/product-6-179x175.png' },
        { name: 'Bike Panniers',price:14.99, img: 'https://livedemo00.template-help.com/wt_prod-22072/images/product-7-197x175.png' },
        { name: 'Bicycle Light',price:55.99, img: 'https://livedemo00.template-help.com/wt_prod-22072/images/product-8-173x175.png' }

    ]

    const cards = cardsInfo.map((element, index) => {
        return (
            <CardBody key={index} name={element.name} price={element.price} image={element.img} />
        )
    })

    return (
      
      <Row style={{maxWidth:'80%'}} className='mx-auto' >
    
             
                  {cards}
        
         
    </Row>
  )
}


const CardBody = (props) => {
    return (
        <Card  style={{ width: '15rem',background:'#f5f5f5',padding:'0px' }}>
            <div style={{padding:'40px',margin:'0px auto'}}>
            <Card.Img  style={{width:'20px',height:'20px',margin:'0px auto'}} variant="top" src={props.image} />
</div>
  <Card.Body style={{padding:'40px'}} >
    <Card.Title>{props.name} </Card.Title>
    <Card.Text>
     ${props.price}
    </Card.Text>
  </Card.Body>
  <Card.Footer >
                <Button>Add +</Button>
    </Card.Footer>
</Card>
    );
};