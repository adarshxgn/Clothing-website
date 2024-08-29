import React from 'react'
import { Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <div style={{backgroundColor:" #c2c0c0"}} className='container-fluid mt-5 p-5'>
       <div className='d-flex justify-content-center'>
            <Row>
                <Col>
                <h5>SHOP</h5>
                <p>Sports</p>
                <p>Casual</p>
                <p>Party wears</p>
                <p>Smart looks</p>
                <p>Street looks</p>
                <p>Atleasure look</p>
                <p>Swim wear</p>
                </Col>
                <Col>
                <h5>CORPORATE INFO</h5>
                <p>Carrier at Zacks</p>
                <p>About Zack's group</p>
                <p>Sustainability</p>
                <p>Press</p>
                <p>Investor relations</p>
                <p>Corporate governance</p>
                </Col>
                <Col>
                <h5>HELP</h5>
                <p>Costumer service</p>
                <p>My Zack's</p>
                <p>Find a store</p>
                <p>Legal & Privacy</p>
                <p>Contact</p>
                <p>Report a scam</p>
                <p>Cookie notice</p>
                </Col>
                <Col><p>
                Sign up now and be the first to know about exclusive offers, latest fashion news & style tips!</p>
                <i>Read More → </i></Col>
                
            </Row>
       </div>
    </div>
  )
}

export default Footer