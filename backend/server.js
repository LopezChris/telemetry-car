const express = require('express');
const app = express();
const port = 4000;

// app.use('/assets/data/input/sensors/cw_rs_tl/012919/cam_frames',
//     express.static('./assets/data/input/sensors/cw_rs_tl/012919/cam_frames'));

// Create router to handle all requests beginning with /api/sensor/camera
const cameraRouter = require('./src/routes/api/sensor/camera.js');
app.use('/api/sensor/camera', cameraRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
