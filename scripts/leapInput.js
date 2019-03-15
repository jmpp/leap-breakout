const LeapInput = {
    position  : { x : 0, y : 0 },
    connected : false,
};

const controller = new Leap.Controller();

controller.on('deviceStreaming', onDeviceStreaming);
controller.on('deviceDisconnected', onDeviceDisconnected);
controller.on('frame', onFrame);

controller.connect();


function onDeviceStreaming() {
    LeapInput.connected = true;
    console.log('✅ Leap Motion is streaming!');
}

function onDeviceDisconnected() {
    LeapInput.connected = false;
    console.log('❌ Leap Motion is disconnected!');
}

function onFrame(frame) {
    let hand = frame.hands[0];
    if (!hand) return;

    const palm = get2dCoords(hand.stabilizedPalmPosition, frame);
    LeapInput.position.x = palm.x;
    LeapInput.position.y = palm.y;
}

/**
 * Transforme les coordonnées 3D récupérée par le Leap en coordonnées 2D pour un <canvas> web
 * @param {Array} leapPosition Tableau de coordonnées 3D [x, y, z]
 * @param {Object} frame Objet "frame" transmit par le Leap Motion
 */
function get2dCoords(leapPosition, frame) {
    const interactionBox  = frame.interactionBox;
    const normalizedPoint = interactionBox.normalizePoint(leapPosition, true);

    return {
        x : normalizedPoint[0] * window.innerWidth,
        y : (1 - normalizedPoint[1]) * window.innerHeight,
    }
}
