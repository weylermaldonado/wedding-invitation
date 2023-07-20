import React from 'react'
import {Link} from 'react-router-dom'
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
                                        <span className="date">July 20, 2017</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
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
                                        <span className="date">Dec 25, 2017</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
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
                                        <span className="date">Jan 10, 2018</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
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
                                        <span className="date">Jan 22, 2018</span>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some,</p>
                                        <div className="story-button">
                                            <Link className="theme-btn" to="/"  title="READ MORE">READ MORE</Link>
                                        </div>
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