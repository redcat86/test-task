export function sendData(data, callBack) {
  const NETWORK_DELAY = 1000;
  setTimeout(() => {
    console.log(data);
    if (callBack) callBack();
  }, NETWORK_DELAY);
}
