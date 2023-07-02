import React from 'react';
import './style.css'

const Rsvp = ({ guest }) => {
    return (
        <div id="rsvp" className="rsvp-area go-rsvp-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="rsvp-wrap">
                            <div className="col-12">
                                <div className="section-title section-title4 text-center">
                                    <h2>Se nuestro invitado</h2>
                                    <p>Porfavor, confirma tu asistencia antes del 15 de Octubre del 2023.</p>
                                    {(!guest || guest.guest.allow_childs) && <p><i><strong>Nota: Por medidas de seguridad este evento es <u>únicamente para adultos</u>, sin excepción no se permite la entrada a menores.
Agradecemos tu comprensión.</strong></i></p>}
                                </div>
                                { (guest && guest.guest.companions > 0) && <div className="section-title section-title4 text-center">
                                    Acompañantes permitidos: {guest.guest.companions}
                                </div>}
                            </div>
                          
                            {guest ? <div className="col-12 text-center btn">
                                <a  href="https://wa.me/529993867773">Confirma tu asistencia</a>
                            </div> : <div className="col-12 text-center btn">
                                <a  href="https://wa.me/529993867773">Solicita tu invitación</a>
                            </div> }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Rsvp;