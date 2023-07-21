import React from 'react'
import './style.css'


const Story = () =>{
    return(
        <div id="story" className="story-area section-padding">
            <div className="container">
                <div className="col-l2">
                    <div className="section-title text-center">
                        <h2>Our Story</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="story clearfix">
                            <div className="story-top"></div>
                            <div className="content-wrapper">
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689876329/273970144_4808156145898476_930917741342612234_n_pfb4d3.jpg"} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>First time we met</h2>
                                        <span className="date">Febrero 14, 2022</span>
                                        <p>
                                            W. La primera vez que me animé a invitarla a salir un 14 de Febrero.
                                        </p>
                                        <span>
                                        M. No sabía que se podía estar tan nerviosa y feliz al mismo tiempo.
                                        </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689875099/279354141_5014595868587835_3861332311727191067_n_opxta9.jpg"} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our First Date</h2>
                                        <span className="date">Mayo 3, 2022</span>
                                        <p>M. Lo invité a una tarde divertida y diferente.</p>
                                        <span>W. Por algún motivo me sentía contento y cómodo saliendo de mi zona de confort.</span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874700/IMG_20230713_131118_l5hp3m.jpg"} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our Marriage Proposal</h2>
                                        <span className="date">Septiembre 4, 2022</span>
                                        <p>W. No sabía como darle el anillo, menos sabía qué decirle en el momento, solo estaba seguro de pasar el resto de mis días con ella.</p>
                                        <span>M. En la imperfección de nuestro ser, nos complementamos perfectamente. </span>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="story-icon">
                                        <span className="flaticon-birds-in-love"></span>
                                    </div>
                                    <div className="story-content">
                                        <div className="image-wrap">
                                            <div className="single-image">
                                                <div>
                                                    <img src={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689876106/322101603_701109921566724_6892287540240225338_n_hk0zvh.jpg"} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                        <h2>Our Engagement</h2>
                                        <span className="date">Diciembre 29, 2022</span>
                                        <p>M. El primer día del resto de mi vida.</p>
                                        <span>W. Hay momentos en la vida que solo se viven una vez y que jamás crees que te sucederán, pero agradezco haber podido vivir este momento contigo.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="story-bottom"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Story;