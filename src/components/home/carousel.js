import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import carousel1 from '../images/car1.png';
import carousel2 from '../images/car2.jpg';
import carousel3 from '../images/car3.jpg';
import '../../index.css';


function CarouselHeader() {
    const navigate = useNavigate();
    const slides = [
        {
            image: carousel1,
            heading: ['SAINUMA\'s Symphony', ' From Burden to Beacon'],
            buttonText: 'Read More',
            buttonVariant: 'outline-primary'
        },
        {
            image: carousel2,
            heading: ['Rising from Ashes:', 'The AVINASH MAHATO Story'],
            buttonText: 'Read More',
            buttonVariant: 'outline-primary'
        },
        {
            image: carousel3,
            heading: ['LOVELY KUMARI\'s Journey:', 'From Fragility to Strength'],
            buttonText: 'Read More',
            buttonVariant: 'outline-primary'
        }
    ];


    return (
        <header>
            <Carousel interval={1500} pause={false} controls={false}>
                {slides.map((slide, index) => (
                    <Carousel.Item key={index} style={{ overflow: 'hidden' }}>
                        <div className="image-container">
                            <img
                                className="d-block w-100"
                                src={slide.image}
                                alt={`Slide ${index + 1}`}
                                style={{ objectFit: 'cover', height: '100vh' }}
                            />
                        </div>
                        <Carousel.Caption className="heading1" style={{ top: 0 }}>
                            {slide.heading.map((line, i) => (
                                <h1 key={i}>{line}</h1>
                            ))}
                            <div className='mt-5'>
                                <Button className='me-5' variant='outline-secondary' onClick={() => navigate('/heros')}>{slide.buttonText}</Button>
                                <Button className='px-4' variant='primary' onClick={() => navigate('/donate')}>Donate</Button>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </header>
    );
}

export default CarouselHeader;
