import React, { Component } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css'


class Gift extends Component {
    render() {
      return (
          <div className="gift-area">
              <div className="container">
                    <div className="col-12">
                      <div className="section-title text-center">
                          <h2>Mesa de regalos</h2>
                          <p>
                          Tu presencia es suficiente para nosotros, pero si quieres darnos un presente, te agradecemos sea efectivo depositado en un sobre dentro de un contenedor disponible en recepción o a través de una transferencia al número de cuenta ###### a nombre de Weyler Noé Maldonado Canul del banco ######
                          </p>
                      </div>
                  </div>
                  <div className="row gift-item">
                  </div>
              </div>
          </div>
      );
    }
  }

export default Gift;