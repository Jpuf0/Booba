'use strict';

/* eslint-env browser */

const { webFrame } = require('electron');

const lewd = document.getElementById('lewd');
const counter = document.getElementById('ass');

webFrame.setVisualZoomLevelLimits(1, 1);
webFrame.setLayoutZoomLevelLimits(0, 0);

window.ass = 0;

function phatass() {
  console.log("ran ass")
  window.ass += 1;
  counter.innerHTML = `${window.ass} BOOBAS GRABBED`;
}

lewd.onmousedown = () => {
  console.log("ran mdown")
  lewd.style['width'] = '62.5%';
  phatass();
};

lewd.onmouseup = () => {
  console.log("ran mup")
  lewd.style['width'] = '60%';
};
