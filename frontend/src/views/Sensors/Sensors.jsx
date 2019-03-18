import React from 'react';
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Row,
    Col,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Table
} from "reactstrap";

// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// function that returns a color based on an interval of numbers

import {
    dashboardPanelChart,
    dashboardShippedProductsChart,
    dashboardAllProductsChart,
    dashboard24HoursPerformanceChart
} from "variables/charts.jsx";

import { PanelHeader, Stats, CardCategory, Tasks } from "components";
import DisplayAnImage from "../Util/DisplayAnImage";
import PlayVideoFromImages from "../Util/PlayVideoFromImages";
import Speedometer from "../Util/Speedometer";

import CarConnectedProgressBar from "components/CardElements/CarConnectedProgressBar";

import { tasks } from "variables/general.jsx";

const clouderaRacewayImg = (
	<img 
		src="https://raw.githubusercontent.com/james94/telemetry-car/dev/frontend/dashboard-react/src/assets/img/dashboard/hortonworksraceway.jpg?token=ALSrwW9hO85_gwJVkv1KlrsXTkqmQ4Gjks5cjpQHwA%3D%3D"
		alt="Cloudera Raceway"
		width={(100*1)+'%'}
		height={(100*1.2)+'%'}
	/>
);

class Sensors extends React.Component {
    render() {
        return (
            <div>
            <PanelHeader
              size="lg"
              content={clouderaRacewayImg}
            />
            <div className="content">
              <Row>
                <Col xs={12} md={6}>
                  <Card className="card-chart">
                    <CardHeader>
                      <CardCategory>Camera Visual Perception</CardCategory>
                      <CardTitle tag="h4">Camera: Logitech C930</CardTitle>
                    </CardHeader>
                    <CardBody className="text-center"> 
                      <PlayVideoFromImages fps={0.5} sensorDevice="camera/" alt="Camera CW_RS_TL Video" height={(100)+'%'} width={(100)+'%'} />
                    </CardBody>
                    <CardFooter>
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons arrows-1_refresh-69",
                            t: "Just Updated"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>                       
                <Col xs={12} md={6}>
                  <Card className="card-chart">
                    <CardHeader>
                      <CardCategory>LiDAR Mapping Environment</CardCategory>
                      <CardTitle tag="h4">
                        LiDAR: Hokuyo UST-10LX
                      </CardTitle>
                    </CardHeader>
                    <CardBody className="text-center">
                      <PlayVideoFromImages fps={0.5} sensorDevice="lidar/" height={(100*0.84)+'%'} width={(100*0.84)+'%'} />
                      {/* <DisplayAnImage sensorDevice="camera/" imageIndex="0" /> */}
                      {/* <img src="https://raw.githubusercontent.com/james94/ai-edge-car/master/application/data/output/image/lidar/lidar-19-59-42-2b4bf60f-1f27-46b0-abfb-1e73a1285f25.jpeg?token=ALSrwelegMxT51MHtd9JDYz3rzZz34fQks5ckELewA%3D%3D" alt="E2AI-Car-SDV1" height={(100*0.84)+'%'} width={(100*0.84)+'%'} /> */}
                    </CardBody>
                    <CardFooter>
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons arrows-1_refresh-69",
                            t: "Just Updated"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>                   
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Card className="card-tasks">
                    <CardHeader>
                      <CardCategory>IMU Rotational Tracking</CardCategory>
                      <CardTitle tag="h4">Sparkfun 9DOF Razor IMU</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <img src="https://raw.githubusercontent.com/james94/telemetry-car/dev/frontend/dashboard-react/src/assets/img/dashboard/mit_racecar.jpg?token=ALSrweGNd-2i0MWfLQFHSVmvt88ISlI4ks5cjxCbwA%3D%3D" alt="E2AI-Car-SDV1" alt="Cloudera Racecar" height={(100)+'%'} width={(100)+'%'} />
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons loader_refresh spin",
                            t: "Updated 3 minutes ago"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>
                <Col xs={12} md={6}>
                  <Card className="card-tasks">
                    <CardHeader>
                      <CardCategory>ESC Servo Steering Angle</CardCategory>
                      <CardTitle tag="h4">ESC: Enertion Focbox v1.7</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <img src="https://raw.githubusercontent.com/james94/telemetry-car/dev/frontend/dashboard-react/src/assets/img/dashboard/mit_racecar.jpg?token=ALSrweGNd-2i0MWfLQFHSVmvt88ISlI4ks5cjxCbwA%3D%3D" alt="E2AI-Car-SDV1" alt="Cloudera Racecar" height={(100)+'%'} width={(100)+'%'} />
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons loader_refresh spin",
                            t: "Updated 3 minutes ago"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>                  
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Card className="card-tasks">
                    <CardHeader>
                      <CardCategory>ESC Motor Wheel Speed</CardCategory>
                      <CardTitle tag="h4">ESC: Enertion Focbox v1.7</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <Speedometer fps={0.5} sensorDevice="esc_speed" />
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons loader_refresh spin",
                            t: "Updated 3 minutes ago"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>                  
                <Col xs={12} md={3}>
                  <Card className="card-tasks">
                    <CardHeader>
                      <CardCategory>Battery Level Monitor</CardCategory>
                      <CardTitle tag="h4">ESC Battery: Traxxas 2923 NiMH</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <p>Battery</p>
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons loader_refresh spin",
                            t: "Updated 3 minutes ago"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>                  
                <Col xs={12} md={3}>
                  <Card className="card-tasks">
                    <CardHeader>
                      <CardCategory>Battery Level Monitor</CardCategory>
                      <CardTitle tag="h4">Perception Battery: Energizer 18000</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <img src="https://raw.githubusercontent.com/james94/telemetry-car/dev/frontend/dashboard-react/src/assets/img/dashboard/mit_racecar.jpg?token=ALSrweGNd-2i0MWfLQFHSVmvt88ISlI4ks5cjxCbwA%3D%3D" alt="E2AI-Car-SDV1" alt="Cloudera Racecar" height={(100)+'%'} width={(100)+'%'} />
                    </CardBody>
                    <CardFooter>
                      <hr />
                      <Stats>
                        {[
                          {
                            i: "now-ui-icons loader_refresh spin",
                            t: "Updated 3 minutes ago"
                          }
                        ]}
                      </Stats>
                    </CardFooter>
                  </Card>
                </Col>                  
              </Row>                                        
            </div>
          </div>            
        );
    }
}

export default Sensors;