import React from 'react';
import Axios from 'axios';

class DisplayAnImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '', // Initialize emtpy jpeg
            error: ''
        }
    }

    async getImage() {
        try {
            let res = await Axios.get('/api/sensor/camera/0'); // send GET request for image index 0
            console.log('RESPONSE', res);

            let image = res.data;
            console.log('IMAGE', image);

            this.setState({
                image, error: ''
            });
        } catch (e) {
            this.setState({ error: `BRUTAL FAILURE: ${e}` });
        }
    }

    componentDidMount() {
        this.getImage() // Do network call in componentDidMount
    }
    
    render() {
        return (
            <img src={this.state.image} alt="CW_RS_TL" height={(100)+'%'} weight={(100)+'%'} />
        );
    }
}

export default DisplayAnImage;