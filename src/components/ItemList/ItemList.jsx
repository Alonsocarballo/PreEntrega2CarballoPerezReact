import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Item from "../Item/Item"


const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map(prod => (
          <div key={prod.id} className="col-md-4 mb-4">
            <Item {...prod} />
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={products.find(item => item.id === prod.id).image} />
              <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Text>{prod.description}</Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;


