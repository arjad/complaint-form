import React from 'react'
import "./slider.css";
import S1 from "../img/s1.jpg";
import S2 from "../img/s2.jpg";
import S3 from "../img/s3.jpg";

function slider() 
{
    return (
        <div>
            {/* slider */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li className="slide_btn active" data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                <li className="slide_btn" data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li className="slide_btn" data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src={S1} alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={S2} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={S3} alt="Third slide"/>
                </div>
              </div>
              {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"> */}
               {/* <i class="fas fa-arrow-left arrow"></i> */}
              {/* </a> */}
              {/* <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"> */}
               {/* <i class="fas fa-arrow-right arrow"></i> */}
              {/* </a> */}
            </div>
        </div>
    )
}

export default slider
