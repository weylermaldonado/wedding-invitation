import React from 'react'
import Sectiontitle from '../section-title'
import couple1 from '../../images/couple/img-1.jpg'
import couple3 from '../../images/couple/2.png'
import './style.css'

const Couple = () => {
    return(
        <div id="couple" className="about-wrap">
            <div className="couple-area section-padding pb-70">
                <Sectiontitle section={'Happy Cuple'}/>
                <div className="container">
                    <div className="couple-wrap">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-2">
                                    <div className="couple-img">
                                        <img src={couple1} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Mirell Vera</h3>
                                            <p>Hola soy Mirell, médico general, pet lover, fanática del pop romántico, Harry Potter y las tardes lluviosas <span role='img' aria-label="sheep">&#128120;</span>. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 couple-single">
                                <div className="couple-shape">
                                   <img src={couple3} alt="shape"/>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-12 col-sm-12 couple-single">
                                <div className="couple-wrap couple-wrap-3">
                                    <div className="couple-img couple-img-2">
                                        <img src={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689876448/218381767_4135152343198863_891335816912377613_n_tvnrpv.jpg"} alt="thumb"/>
                                    </div>
                                    <div className="couple-text">
                                        <div className="couple-content">
                                            <h3>Weyler Maldonado</h3>
                                            <p>Hola soy Weyler Maldonado, ingeniero de software, amante del cine de terror, batman, videojuegos y de las carnitas asadas <span  role='img' aria-label="sheep">&#129312;</span>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             
        </div>
        
    )
}

export default Couple;