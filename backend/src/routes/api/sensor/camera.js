const express = require('express');
const fs = require('fs');

let cameraFrames = [];
cameraFrames = fs.readdirSync("src/assets/data/input/sensors/cw_rs_tl/012919/cam_frames/");
//console.log(cameraFrames);

const cameraRouter = express.Router();

// Created route for cameraRouter that'll send all cameraFrames for a GET request
cameraRouter.get('/', (req, res, next) => {
    res.send(cameraFrames);
});

// Created route for cameraRouter that'll send a cameraFrame for a GET request
// When a GET /cameraFrames/1 request arrives,
// cameraRouter.get('/:id') matches full path /cameraFrames/1
// so, the callback is invoked and cameraFrame with index id is fetched from 
// cameraFrames array and sent back
cameraRouter.get('/:id', (req, res, next) => {
    const cameraFrame = cameraFrames[req.params.id];
    if(cameraFrame) {
        res.send(cameraFrame);
    }
    else {
        res.status(404).send();
    }    
});

module.exports = cameraRouter;