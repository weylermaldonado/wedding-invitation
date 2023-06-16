import React from 'react';
import { TabContent, TabPane } from 'reactstrap';
import Sectiontitle from '../section-title'

import './style.css'
const colors = [
    "#FAF0E4",
    "#FFF4F4",
    "#FCE9F1",
    "#FFF4F4",
    "#ECF8F9",
    "#F8E8EE",
    "#E3F4F4",
    "#F8F6F4",
    "#F1F6F9",
    "#FFFFFF"
]
const People = (props) => {

    return(

        <div id="people" className="person-area section-padding pb-70">
            <div className="container">
                <Sectiontitle section={'Código de vestimenta'}/>
                <div className="person-area-menu">
                    <TabContent activeTab={"1"}>
                        <TabPane tabId="1">
                        <div className="Groomsman-wrap">
                                <p>
                                Atuendo formal y colores oscuros.
El blanco es un color exclusivo para la novia, agradecemos que se reserve el blanco, beige y los colores claros solo para la novia. 
Les dejamos una pequeña muestra de los colores que <strong> no están permitidos</strong>:
                                </p>
                                {/* <div className="flex-row"> */}
                                {/* </div> */}
                            </div>
                            <div className="d-flex justify-content-between">
                                        {/* <div className="person-wrap" > */}
                                        {colors.map((color) => (
                                              <div  style={{
                                                backgroundColor: color,
                                                display: "flex inline-block",
                                                borderColor: "black",
                                                width: '40px',
                                                height: '40px',
                                                borderRadius: "60%",
                                                border: "1px solid black",
                                                marginRight: "3px"
                                            }}>
                                            </div>
                                        ))}
                                          
                                        {/* </div> */}
                                    </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
        
    )
}

export default People;