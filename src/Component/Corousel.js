import React from "react";
import { Carousel } from "react-bootstrap";

import logo from "../Images/logo.png";

function Coursel() {
    return (
        <Carousel className="corousel">
            
            <Carousel.Item className="item">
                <img
                    className="d-block w-100 corousel-img"
                    src="https://images.unsplash.com/photo-1511370235399-1802cae1d32f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1474&q=80"
                    alt="Third slide"
                />

                <Carousel.Caption className="caption">
                    <h1>
                        Discover your <span>Passion</span>
                    </h1>
                    <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="item">
                <img
                    className="d-block w-100 corousel-img"
                    src="https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                    alt="Third slide"
                />
