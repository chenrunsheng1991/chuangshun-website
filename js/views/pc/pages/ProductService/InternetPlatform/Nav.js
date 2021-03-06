'use strict';
import React from 'react';

export default class Nav extends React.Component {
    constructor(...props){
        super(...props);
    }
    
    render() {
        return (
            <div className="nav-container">
                <div className="nav-content">
                    <ul>
                        <li>
                            <p><span className="icon_f_service"></span></p>
                            <p className="title">金融服务解决方案</p>
                        </li>
                        <li>
                            <p><span className="ie_platform_act"></span></p>
                            <p className="title active">互联网平台搭建</p>
                        </li>
                        <li>
                            <p><span className="icon_ued"></span></p>
                            <p className="title">UED设计服务</p>
                        </li>
                    </ul>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }
}