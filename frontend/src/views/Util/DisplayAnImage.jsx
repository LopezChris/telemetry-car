import React from 'react';

<DisplayAnImage sensor_dir="cam_frames" alt="" h={(100)+'%'} w={(100)+'%'}/>
class DisplayAnImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: ''
        }
    }

    // componentDidMount() {
    //     fetch('/api/sensor/' + this.props.sensor_dir)
    //         .then((response) => {
    //             return response.json();
    //         }).then(myBlob => {
    //             let objectURL = URL.createObjectURL(myBlob);
    //             myImg.src = objectURL;
    //         });
    // }

    render() {
        return (
            <div></div>
        );
    }
}

export default DisplayAnImage;