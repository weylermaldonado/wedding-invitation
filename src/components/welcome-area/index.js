import React from 'react'
import './style.css'


const Welcome = ({ guest }) =>{
    return(
        <div className="welcome-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcome-content">
                           {guest ?  <h2>{guest.guest.name} {guest.guest.gender === "M" ? "bienvenido" : "bienvenida"} a nuestro gran día</h2> : <h2>Bienvenido a nuestro gran día</h2> }
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or less normal distribution of letters</p>
                            <div className="btn"><a href="#rsvp">Confirmar asistencia</a></div>
                            <div className="btn"><a href="https://goo.gl/maps/QPecqbR7MYCEJBcN8">Ubicación</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Welcome;