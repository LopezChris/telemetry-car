const express = require('express');
const path = require('path');
const app = express();
const port = 4000;

// Use absolute path of directory you want to serve
// Root dir from which to serve static assets
app.use(express.static(path.join(__dirname, 'src/assets/data')));

// Create router to handle all requests beginning with /api/sensor/camera
const cameraRouter = require('./src/routes/api/sensor/camera.js');
app.use('/api/sensor/camera', cameraRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
