import React from 'react';
import { TabContent, TabPane } from 'reactstrap';
import Sectiontitle from '../section-title'

import './style.css'

const Recommendations = (props) => {

    return(

        <div id="people" className="person-area section-padding pb-70">
            <div className="container">
                <Sectiontitle section={'Aclaraciones'}/>
                <div className="person-area-menu">
                    <TabContent activeTab={"1"}>
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