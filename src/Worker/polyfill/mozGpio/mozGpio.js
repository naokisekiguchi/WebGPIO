/* istanbul ignore next */
if (!navigator.mozGpio) {
  navigator.mozGpio = new Object();
  navigator.mozGpio.isPolyfill = true;
  navigator.mozGpio.direction = '';
  navigator.mozGpio.value = {};
  navigator.mozGpio.export = function (portno) {
  };

  navigator.mozGpio.unexport = function (portno) {
  };

  navigator.mozGpio.setValue = function (portno, value) {
    navigator.mozGpio.value[portno] = value;
  };

  navigator.mozGpio.getValue = function (portNumber) {
    return Promise.resolve(navigator.mozGpio.value[portNumber] || 0);
  };

  navigator.mozGpio.setDirection = function (portno, direction) {
    console.log('setDirection(' + portno + ',' + direction + ')');
    navigator.mozGpio.direction = direction;
  };

  navigator.mozGpio.getDirection = function () {
    return navigator.mozGpio.direction;
  };

  // x秒おきに値を変更する
  // onchange event test
  // setInterval(()=> {
  //   navigator.mozGpio.value = navigator.mozGpio.value ? 0 : 1;
  //   console.log('navigator.mozGpio.value change', navigator.mozGpio.value);
  // }, 10000);
}
