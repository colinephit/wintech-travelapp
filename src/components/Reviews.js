import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/review.css';

function Reviews() {
  return (
    <div className='cont-carousel'>
        {/* <img src={require('../assets/loation.png')} className="DecorationL" alt='' /> */}
        <div className="title">What People Say About Us</div>
            <Carousel className='carousel'>
                <Carousel.Item interval={1000}>
                    <img className="backgorund" src={require("../assets/reviewbg.png")} alt='pic'/>
                    <Carousel.Caption className="content">
                        <img src={require("../assets/person.png")} alt="avatar" className='avatar'/>
                    <p><i>WhereToGo's search engine takes into account my preferences and allows me to explore new travel options that are aligned with my interests.</i></p>
                        <span>- John Stanley</span>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img className="backgorund" src={require("../assets/reviewbg.png")} alt='pic'/>
                    <Carousel.Caption className="content">
                        <img src={require("../assets/person2.png")} alt="avatar" className='avatar'/>
                        <p><i>I've been using WhereToGo to plan my trips for the past 5 years and it has helped me plan many amazing trips and allowed me to explore a wide range of activities to my liking.</i></p>
                        <span>- Andrea Jeo</span>
                    </Carousel.Caption>

        </Carousel.Item>
    </Carousel>
        {/* <img src={require('../assets/loation.png')} className="DecorationR" alt='' /> */}
    </div>
  )
}

export default Reviews;