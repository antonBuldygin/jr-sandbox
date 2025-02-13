onerror = () => {

}

onmessage = (e) => {
  e.data.message = `${e.data.message}-котлет`;
  postMessage(e.data);
}

// const myWorker = new Worker("iundex.js");
