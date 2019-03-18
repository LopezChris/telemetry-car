const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

// Use absolute path of directory you want to serve
// Root dir from which to serve static assets
app.use(express.static(path.join(__dirname, 'src/assets/data')));

// Create camerRouter to handle all requests beginning with /api/sensor/camera
const cameraRouter = require('./src/routes/api/sensor/camera.js');
app.use('/api/sensor/camera', cameraRouter);

// Create lidarRouter to handle all requests beginning with /api/sensor/lidar
const lidarRouter = require('./src/routes/api/sensor/lidar.js');
app.use('/api/sensor/lidar', lidarRouter);

// Create escSpeedRouter to handle all requests beginning with /api/sensor/esc_speed
const escSpeedRouter = require('./src/routes/api/sensor/esc_speed.js');
app.use('/api/sensor/esc_speed', escSpeedRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
