import React, { useState } from 'react';
import { ReactComponent as CloudSvg } from '../assets/cloud.svg'
import { Cloud, CloudTypes } from '../interfaces/Cloud.tsx';
import BackgroundProps from '../styles/scenario/background.module.css'

function Clouds(){
    const [cloudList, setCloudList] = useState<Cloud[]>([
        {cloudType: CloudTypes.SM},
        {cloudType: CloudTypes.LG},
        {cloudType: CloudTypes.MD},

    ])

    function constructStyle(cloud: Cloud): String{
        let className = '';
        switch (cloud.cloudType) {
            case CloudTypes.SM:
                className = BackgroundProps.distantCloud;
                break;
            case CloudTypes.MD:
                className = BackgroundProps.visibleCloud;
                break;
            case CloudTypes.LG:
                className = BackgroundProps.closeCloud;
                break;
        }
        return className;
    }

    return (
        <>
            <CloudSvg
                className={BackgroundProps.rightCornerCloud}
            ></CloudSvg>
            {
                cloudList.map( (cloud: Cloud, index: Number) => {
                    return (
                        <CloudSvg 
                            key={index}
                            className={constructStyle(cloud)}></CloudSvg>
                    )
                })
            }
        </>
    )
}

export default Clouds