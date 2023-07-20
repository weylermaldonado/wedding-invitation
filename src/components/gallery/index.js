import React, {Component} from 'react';
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
import Sectiontitle from '../section-title'
import './style.css'


class Gallery extends Component {
  render() {
    return (
      <div id="gallery" className="Gallery-section section-padding pb-70">
          <Sectiontitle section={'Our Gellary'}/>
          <div className="container">
              <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874700/IMG_20230713_130413_i9pkg2.jpg"}
                            image={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874700/IMG_20230713_130413_i9pkg2.jpg"}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874701/IMG_20230713_141214_ebz7km.jpg"}
                            image={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874701/IMG_20230713_141214_ebz7km.jpg"}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874699/IMG_20230713_130830_ubx1yn.jpg"}
                            image={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874699/IMG_20230713_130830_ubx1yn.jpg"}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874699/IMG_20230713_140821_ezyxsc.jpg"}
                            image={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874699/IMG_20230713_140821_ezyxsc.jpg"}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874694/IMG_20230713_142632_fhszfj.jpg"}
                            image={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874694/IMG_20230713_142632_fhszfj.jpg"}/>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                      <div className="gallery-img">
                        <ReactFancyBox
                            thumbnail={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874694/IMG_20230713_142525_kpkbu9.jpg"}
                            image={"https://res.cloudinary.com/dwjth2ksp/image/upload/v1689874694/IMG_20230713_142525_kpkbu9.jpg"}/>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default Gallery;