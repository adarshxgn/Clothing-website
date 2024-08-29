
import { useState } from 'react'
import './App.css'
import { Col, Modal, Row, Card, Button } from 'react-bootstrap';
import Footer from './Footer';
Modal
function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div style={{width:"100%"}} className='container'>
      <div style={{backgroundImage:"url(https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg)",minHeight:"90vh",backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='mt-2'>
      <div>
        <div className='d-flex align-items-center justify-content-center '>
          <ul style={{display:"flex",listStyle:"none",gap:"100px"}}>
            <li onMouseEnter={handleShow} className='btn fw-bolder'>Home</li>
            <li className='btn fw-bolder'>About</li>
            <li className='btn fw-bolder'>Contact Us</li>
            <li className='btn fw-bolder'>More Stores</li>
          </ul>
        </div>
      </div>
      <div style={{fontSize:"50px"}} className='ms-5 text-danger fw-bolder'>Zack<span className='text-dark'>'</span>s<span className='text-dark'>Men</span></div>
      <Modal className='mt-5' size='lg' show={show} onMouseLeave={handleClose}>
        <Modal.Body>
          <div className='container'>
            <Row>
              <Col>
                <h5>T-shirts</h5>
                <p>Half Sleeves</p>
                <p>V-neck Tshirts</p>
                <p>Henley T-Shirts</p>
                <p>Hooded T-Shirts</p>
                <p>Striped T-Shirts</p>
                <p>Solid T-Shirts</p>
              </Col>
              <Col>
              <h5>Shirts</h5>
              <p>Flannel</p>
              <p>Dress shirt</p>
              <p>Oxford cloth</p>
              <p>Denim shirt</p>
              <p>Lenin shirt</p>
              <p>Short Sleeve shirt</p>
              <p>Polo Shirt</p>
              <p>Cuban collar shirt</p>
              <p>casual Shirt</p>
              </Col>
              <Col>
              <h5>Trousers</h5>
              <p>Cargo pants</p>
              <p>Chinos</p>
              <p>Sweat pants</p>
              <p>Courduory</p>
              <p>Jeans</p></Col>
              <Col>
              <h5>Hoodies & Sweat-shirts</h5>
              <p>Oversized hoodies</p>
              <p>Printed Hoodies</p>
              <p>pocket hoodies</p>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
      </div>
      <h1>New Arrival of Men's Clothes</h1>
      <p>Stay up to date with the latest fashion trends and find your favourites among our stylish selection of new arrivals.</p>
      <ul style={{display:"flex",listStyle:"none",gap:"100px"}}>
            <li onMouseEnter={handleShow} className='btn fw-bolder'>Sort by ↓</li>
            <li className='btn fw-bolder'>Size ↓</li>
            <li className='btn fw-bolder'>Colour ↓</li>
            <li className='btn fw-bolder'>Pattern ↓</li>
            <li className='btn fw-bolder'>Product Type ↓</li>
            <li className='btn fw-bolder'>Price ↓</li>
          </ul>
    <div>
      <Row lg={4}>
        <Col>
        <Card>
      <Card.Img height={"400px"} variant="top" src="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28566396/2024/3/29/3d90f4f5-6396-4925-8cdb-4ad65f2d15361711700086892RelaxedFitPrintedresortshirt1.jpg" />
      <Card.Body>
        <Card.Text>
          <h5>Loose fit printed shirts</h5>
          <p>Rs:799.00</p>
        </Card.Text>
        <Button variant="outline-dark">Buy now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card>
      <Card.Img height={"400px"} variant="top" src="https://assets.ajio.com/medias/sys_master/root/20240325/Rqnn/660192fe05ac7d77bbd7cb44/-473Wx593H-442592298-multi-MODEL.jpg" />
      <Card.Body>
        <Card.Text>
          <h5>Loose fit printed shirts</h5>
          <p>Rs:799.00</p>
        </Card.Text>
        <Button variant="outline-dark">Buy now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card>
      <Card.Img height={"400px"} variant="top" src="https://cdn.fynd.com/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/000000410394928004/lpWm6OW-KC-000000410394928004_1.jpg" />
      <Card.Body>
        <Card.Text>
          <h5>Loose fit printed shirts</h5>
          <p>Rs:799.00</p>
        </Card.Text>
        <Button variant="outline-dark">Buy now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card>
      <Card.Img height={"400px"} variant="top" src="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25875750/2024/2/9/3d182eb9-e125-433a-93d2-0cf6efcad3c91707453878589-HM-Relaxed-Fit-Printed-Shirt-9311707453878492-6.jpg" />
      <Card.Body>
        <Card.Text>
          <h5>Loose fit printed shirts</h5>
          <p>Rs:799.00</p>
        </Card.Text>
        <Button variant="outline-dark">Buy now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className='mt-3'>
      <Card.Img height={"400px"} variant="top" src="https://www.styched.in/cdn/shop/products/BlackCrewNeckLongSleeveOversizedT-Shirt1.jpg?v=1645421407" />
      <Card.Body>
        <Card.Text>
          <h5>Long sleeve tshirts</h5>
          <p>Rs:799.00</p>
        </Card.Text>
        <Button variant="outline-dark">Buy now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className='mt-3'>
      <Card.Img height={"400px"} variant="top" src="https://www.jiomart.com/images/product/original/rvrrnhnmdj/eyebogler-mens-round-neck-regular-fit-full-length-sleeve-t-shirt-product-images-rvrrnhnmdj-0-202402111506.jpg?im=Resize=(500,630)" />
      <Card.Body>
        <Card.Text>
          <h5>Long sleeve tshirts</h5>
          <p>Rs:799.00</p>
        </Card.Text>
        <Button variant="outline-dark">Buy now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className='mt-3'>
      <Card.Img height={"400px"} variant="top" src="https://shop.mango.com/assets/rcs/pics/static/T6/fotos/S/67050648_99.jpg?imwidth=2048&imdensity=1&ts=1698939178764" />
      <Card.Body>
        <Card.Text>
          <h5>Long sleeve tshirts</h5>
          <p>Rs:799.00</p>
        </Card.Text>
        <Button variant="outline-dark">Buy now</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col>
        <Card className='mt-3'>
      <Card.Img height={"400px"} variant="top" src="https://sportsqvest.com/cdn/shop/products/MTEE012_-_Side_2_1200x.jpg?v=1689941510" />
      <Card.Body>
        <Card.Text>
          <h5>Long sleeve tshirts</h5>
          <p>Rs:799.00</p>
        </Card.Text>
        <Button variant="outline-dark">Buy now</Button>
      </Card.Body>
    </Card>
        </Col>
        
      </Row>
    </div>
    <Footer/>
    </div>
  )
}

export default App
