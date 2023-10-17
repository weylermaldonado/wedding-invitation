import React from 'react'
import Sectiontitle from '../section-title'
import strory1 from '../../images/church.webp'
import strory2 from '../../images/local.jpeg'


import './style.css'

const   Location = () => {
    return(

        
    <div id="event" className="service-area section-padding">
        <div className="container">
            <Sectiontitle section={'When & Where'}/>
            <div className="service-area-menu">
                <div className="Ceremony-wrap">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="ceromony-img">
                                <img src={strory1} alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="ceromony-content">
                                <h3>Ceremonia religiosa</h3>
                                <span>Sábado, 21 Octubre 23, 8.00 PM-9.00 PM</span>
                                <span>C. 50 entre Calle 69, Centro Barrio, San Cristobal, 97000 Mérida, Yuc.</span>
                                <p>Hermosa Iglesia dedicada a la virgen de Guadalupe, inaugurada el jueves santo de 1797. </p>
                               <div>
                               <a href="https://goo.gl/maps/dSzM5naGjnjHnHFJ9">Ubicación</a>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="ceromony-content ceromony-content2">
                            <h3>Recepción</h3>
                            <span>Sábado, 21 Octubre 23, 9.00 PM</span>
                            <span>C. 34 380, San Pedro Uxmal, 97203 Mérida, Yuc.</span>
                            <p>Salón Kaovi.</p>
                            <a href="https://maps.app.goo.gl/6ZKAUSHvCuTXS1d76">Ubicación</a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                            <img src={strory2} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="Ceremony-wrap">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="ceromony-img">
                             <img src={strory3} alt=""/>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="ceromony-content">
                            <h3>Reception Party</h3>
                            <span>Sunday, 25 July 18, 9.00 AM-5.00 PM</span>
                            <span>256 Apay Road,Califonia Bong, London</span>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal </p>
                            <Link to="/">See Location</Link>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
    )
}
export default Location;