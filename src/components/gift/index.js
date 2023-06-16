import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Toast, ToastBody} from 'reactstrap';
import './style.css'



const Gift = () => {
    const [show,setShow] = useState(false)
      return (
          <div className="gift-area">
              <div className="container">
                    <div className="col-12">
                      <div className="section-title text-center">
                          <h2>Mesa de regalos</h2>
                          <p>
                          Tu presencia es suficiente para nosotros, pero si quieres darnos un presente, te agradecemos sea efectivo depositado en un sobre dentro de un contenedor disponible en recepción o a través de una transferencia al número de cuenta
                           <strong> CLABE: <button className="btn" onClick={(e) => {
                            navigator.clipboard.writeText("014910260285860787").then(() => {
                              setShow(true)
                              setTimeout(() => setShow(false), 3000)
                            })
                           }}>014910260285860787</button> </strong> a nombre de <strong>Weyler Noé Maldonado Canul</strong>  del banco <strong>Santander</strong>.
                          </p>
                      </div>
                  </div>
                  <div className="row gift-item">
                  <Toast isOpen={show}>
          <ToastBody>CLABE interbancaria copiada!</ToastBody>
        </Toast>
                  </div>
              </div>
          </div>
      );
    
  }

export default Gift;