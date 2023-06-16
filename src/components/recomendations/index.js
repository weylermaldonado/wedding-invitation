import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
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
const Recommendations = (props) => {
    const [activeTab, setActiveTab] = useState('1');

        const toggle = tab => {
          if(activeTab !== tab) setActiveTab(tab);
        }
    return(

        <div id="people" className="person-area section-padding pb-70">
            <div className="container">
                <Sectiontitle section={'Aclaraciones'}/>
                <div className="person-area-menu">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                        <div className="Groomsman-wrap section-title text-center">
                                <p>
                                Por medidas de seguridad este evento es únicamente para adultos, sin excepción no se permite la entrada a menores.
 Agradecemos tu comprensión.
                                </p>
                                {/* <div className="flex-row"> */}
                                {/* </div> */}
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
        
    )
}

export default Recommendations;