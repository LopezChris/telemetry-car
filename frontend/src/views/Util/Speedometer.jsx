import React from 'react';
import Axios from 'axios';
import { RadialGauge, LinearGauge } from 'react-canvas-gauges';

class Speedometer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            escSpeeds: [], // Initialize empty escSpeeds
            error: ''
        }
    }

    async getSpeeds() {
        try {
            let sensorDevice = this.props.sensorDevice;
            let res = await Axios.get('/api/sensor/' + sensorDevice);
            console.log('RESPONSE', res);

            let escSpeeds = res.data;
            console.log('escSpeeds', escSpeeds);

            // Convert string array into key value pair object
            let escSpeedsCleaned = {};
            for(let i = 0; i < escSpeeds.length; i++) {
                let split = escSpeeds[i].split(':');
                escSpeedsCleaned[split[0].trim() + '_' + i] = split[1].trim();
            }

            this.setState({
                escSpeeds: escSpeedsCleaned, error: ''
            });
        } catch(e) {
            this.setState({ error: `BRUTAL FAILURE: ${e}`});
        }
    }

    componentDidMount() {
        this.getSpeeds();
    }

    render() {
        return(
            <RadialGauge
            width="300"
            height="300"
            units="mph"
            title="Speedometer"
            value={0}
            minValue={0}
            maxValue={60}
            majorTicks={['0', '10', '20', '30', '40', '50', '60']}
            minorTicks={5}
            strokeTicks="true"
            highlights='[{"from": 0, "to": 50, "color": "rgba(0, 255, 0, .15)"},
                         {"from": 50, "to": 60, "color": "rgba(0, 0, 255, .25)"}]'
            colorMajorTicks="#f5f5f5"
            colorMinorTicks="#ddd"
            colorTitle="#fff"
            colorUnits="#ccc"
            colorNumbers="#00FA9A"
            colorPlate="#222"
            borderShadowWidth="0"
            borders="true"
            needleType="arrow"
            needleWidth="2"
            needleCircleSize="7"
            needleCircleOuter="true"
            needleCircleInner="false"
            animationDurection="1500"
            animationRule="linear"
            colorBorderOuter="#333"
            colorBorderOuterEnd="#111"
            colorBorderMiddle="#222"
            colorBorderMiddleEnd="#111"
            colorBorderInner="#111"
            colorBorderInnerEnd="#333" 
            colorNeedleShadowDown="#333"
            colorNeedleCircleOuter="#333" 
            colorNeedleCircleOuterEnd="#111"
            colorNeedleCircleInner="#111" 
            colorNeedleCircleInnerEnd="#222"
            valueBoxBorderRadius="0"
            colorValueBoxRect="#222"
            colorValueBoxRectEnd="#333"
          ></RadialGauge>            
        );
    }
}

export default Speedometer;