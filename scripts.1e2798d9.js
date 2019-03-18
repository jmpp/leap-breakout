parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"2Ze7":[function(require,module,exports) {
var n={position:{x:0,y:0},connected:!1},o=new Leap.Controller;function i(){n.connected=!0,console.log("✅ Leap Motion is streaming!")}function e(){n.connected=!1,console.log("❌ Leap Motion is disconnected!")}function t(o){n.connected=!0;var i=o.hands[0];if(i){var e=c(i.stabilizedPalmPosition,o);n.position.x=e.x,n.position.y=e.y}}function c(n,o){var i=o.interactionBox.normalizePoint(n,!0);return{x:i[0]*window.innerWidth,y:(1-i[1])*window.innerHeight}}o.on("deviceStreaming",i),o.on("deviceDisconnected",e),o.on("frame",t),o.connect();
},{}],"YebZ":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/ball.0b0193da.png";
},{}],"e0U/":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/pad.2b6c8aea.png";
},{}],"IHiO":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/01.52141cc8.png";
},{}],"TPgq":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/02.107160a7.png";
},{}],"j2X4":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/03.b8a59bbf.png";
},{}],"ct4c":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/04.493d70b4.png";
},{}],"+R18":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/05.a8567891.png";
},{}],"veG0":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/06.a12d6552.png";
},{}],"VSas":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/07.bb0f15b4.png";
},{}],"x4HV":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/08.e89c166f.png";
},{}],"AhhG":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/09.f2188d39.png";
},{}],"m8Jd":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/10.30a96b7a.png";
},{}],"XDb0":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/pad-bounce.250556f8.mp3";
},{}],"vy3N":[function(require,module,exports) {
module.exports="https://jmpp.github.io/leap-breakout/brick-bounce.07ab8436.mp3";
},{}],"g2Hq":[function(require,module,exports) {
"use strict";var e=i(require("./leapInput"));function i(e){return e&&e.__esModule?e:{default:e}}var a,o,r,d,n=new Phaser.Game(window.innerWidth,window.innerHeight,Phaser.AUTO,"game-root",{preload:t,create:s,update:u,render:p}),c=0,l={};function t(){n.scale.scaleMode=Phaser.ScaleManager.SHOW_ALL,n.load.image("ball",require("../images/ball.png")),n.load.image("pad",require("../images/pad.png")),n.load.image("brick_1",require("../images/01.png"),100,33),n.load.image("brick_2",require("../images/02.png"),100,33),n.load.image("brick_3",require("../images/03.png"),100,33),n.load.image("brick_4",require("../images/04.png"),100,33),n.load.image("brick_5",require("../images/05.png"),100,33),n.load.image("brick_6",require("../images/06.png"),100,33),n.load.image("brick_7",require("../images/07.png"),100,33),n.load.image("brick_8",require("../images/08.png"),100,33),n.load.image("brick_9",require("../images/09.png"),100,33),n.load.image("brick_10",require("../images/10.png"),100,33),n.load.audio("pad-bounce",[require("../sounds/pad-bounce.mp3")]),n.load.audio("brick-bounce",[require("../sounds/brick-bounce.mp3")])}function s(){n.physics.startSystem(Phaser.Physics.ARCADE),r=n.add.physicsGroup();for(var e=0;e<5;e++)for(var i=0;i<10;i++){var t=new Phaser.Sprite(n,100*i+(n.world.width-1e3)/2,100+33*e,"brick_"+(i%10+1));r.add(t)}r.forEach(function(e){e.body.immovable=!0}),(a=n.add.sprite(n.world.width/2,n.world.height-100,"ball")).anchor.set(.5),n.physics.arcade.enable(a),a.body.collideWorldBounds=!0,a.body.velocity.set(400,-400),a.body.bounce.set(1),(o=n.add.sprite(n.world.width/2,n.world.height-5,"pad")).anchor.set(.5,1),n.physics.arcade.enable(o),o.body.immovable=!0,n.physics.arcade.checkCollision.down=!1,a.checkWorldBounds=!0,a.events.onOutOfBounds.add(function(){window.alert("Game over!"),window.location.reload()},this),(d=n.add.text(n.world.centerX,n.world.centerY,"0.0s",{font:"148px Arial",fill:"rgba(255, 255, 255, 0.3)"})).anchor.set(.5,.5),setInterval(function(){return c+=100},100),l.padBounce=n.add.audio("pad-bounce"),l.brickBounce=n.add.audio("brick-bounce")}function u(){n.physics.arcade.collide(a,r,g),n.physics.arcade.collide(a,o,b),e.default.connected?o.x=e.default.position.x:o.x=n.input.x||.5*n.world.width,d.setText((c/1e3).toFixed(1)+"s")}function p(){}function g(e,i){i.kill(),l.brickBounce.play(),e.body.velocity.y=e.body.velocity.y>0?e.body.velocity.y+10:e.body.velocity.y-10,0===r.children.reduce(function(e,i){return i.alive?e+1:e},0)&&(window.alert("Bravo!\nVous avez complété le jeu en "+(c/1e3).toFixed(1)+" secondes !"),window.location.reload())}function b(e,i){l.padBounce.play(),e.body.velocity.x=-5*(i.x-e.x)*1.5}
},{"./leapInput":"2Ze7","../images/ball.png":"YebZ","../images/pad.png":"e0U/","../images/01.png":"IHiO","../images/02.png":"TPgq","../images/03.png":"j2X4","../images/04.png":"ct4c","../images/05.png":"+R18","../images/06.png":"veG0","../images/07.png":"VSas","../images/08.png":"x4HV","../images/09.png":"AhhG","../images/10.png":"m8Jd","../sounds/pad-bounce.mp3":"XDb0","../sounds/brick-bounce.mp3":"vy3N"}]},{},["g2Hq"], null)
//# sourceMappingURL=https://jmpp.github.io/leap-breakout/scripts.1e2798d9.js.map