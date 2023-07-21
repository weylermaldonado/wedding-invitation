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
                            <p><i>"Cuando un hombre está tratando de ganarse el corazón de una mujer, la estudia.  Aprende sus gustos, aversiones, hábitos y pasatiempos.  Pero después de ganar su corazón y casarse con ella, a menudo deja de aprender sobre ella.  Si la cantidad que la estudió antes del matrimonio fue equivalente a un título de escuela secundaria, debe continuar aprendiendo sobre ella hasta que obtenga un título universitario, una maestría y, en última instancia, un doctorado.  Es un viaje de toda la vida que acerca su corazón al de ella."</i></p>
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