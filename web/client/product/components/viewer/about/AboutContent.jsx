/**
 * Copyright 2015, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';

import I18N from '../../../../components/I18N/I18N';
import gsLogo from '../../../assets/img/geosolutions-brand.png';
import msLogo from '../../../assets/img/mapstore-logo-0.20.png';

class About extends React.Component {
    render() {
        return (
            <div className="about-content-section" style={{
                backgroundImage: 'url("' + msLogo + '")',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }}>
                <h1 style={{marginTop: 0}}>MapStore</h1>
                <p>
                    <I18N.Message msgId="about_p0-0"/> <a href="http://openlayers.org/">OpenLayers</a> <I18N.Message msgId="about_p0-1"/> <a href="http://leafletjs.com/">Leaflet</a>.
                </p>
                <p><I18N.Message msgId="about_p1"/></p>
                <ul>
                    <li>
                        <I18N.Message msgId="about_ul0_li0"/>
                    </li>
                    <li>
                        <I18N.Message msgId="about_ul0_li1"/> <a href="https://github.com/geosolutions-it/MapStore2/wiki">MapStore wiki</a>.
                    </li>
                </ul>
                <h2><I18N.Message msgId="about_h20"/></h2>
                <p>
                    <I18N.Message msgId="about_p3"/>
                </p>
                <p><I18N.Message msgId="about_p5-0"/> <a href="https://github.com/geosolutions-it/MapStore2/blob/master/CONTRIBUTING.md"><I18N.Message msgId="about_a0"/></a> <I18N.Message msgId="about_p5-1"/></p>
                <h3><I18N.Message msgId="about_h21"/></h3>
                <p><I18N.Message msgId="about_p6"/></p>
                <a href="https://www.geosolutionsgroup.com/">
                    <img
                        src={gsLogo}
                        style={{
                            display: "block",
                            margin: "auto",
                            maxWidth: "100%"
                        }}
                        alt="GeoSolutions S.A.S." />
                </a>
            </div>);
    }
}

export default About;
