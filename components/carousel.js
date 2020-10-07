import React, { Children, Component } from "react";
import Slider from "react-slick";



export default function Carousel({Children}) {
    const products =[
        {
           img: '../images/homepage/arrival1.png' 
        },
        {
            img: '../images/homepage/arrival2.png' 
         },
         {
            img: '../images/homepage/arrival3.png' 
         },
         {
            img: '../images/homepage/arrival2.png' 
         },
         {
            img: '../images/homepage/arrival1.png' 
         },
    ]
  
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      arrows:true,
    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="w-full px-8 pb-24">
        <h2 className="text-3xl text-semibold"> Responsive </h2>
        <Slider {...settings}>
        {products.map((x, i) => {
            return <div key={i} className="max-h-400px">
                <img src={x.img} className="mx-auto"/>
            </div>
        })}
        </Slider>
      </div>
    );
  }
