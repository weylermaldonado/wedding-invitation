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
                            <p><i>"When a man is trying to win the heart of a woman, he studies her. He learns her likes, dislikes, habits, and hobbies. But after he wins her heart and marries her, he often stops learning about her. If the amount he studied her before marriage was equal to a high school degree, he should continue to learn about her until he gains a college degree, a master’s degree, and ultimately a doctorate degree. It is a lifelong journey that draws his heart ever close to hers"</i></p>
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