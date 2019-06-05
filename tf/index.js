let net;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  //net = await mobilenet.load();
  //var json = $.getJSON("model.json");
  //console.log(json);
  //localStorage.setItem('model', JSON.stringify(json));
  //net = await tf.loadLayersModel('localstorage://model');
  const net = await tf.loadLayersModel('model.json')

  console.log('Sucessfully loaded model');
  const canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var tmpImage = new Image();
  tmpImage.src = 'heychan.jpg';
  tmpImage.onload = function(){
    ctx.drawImage(tmpImage,0,0,28,28);
    imageData = ctx.getImageData(0, 0, 28, 28);
    const tensor = tf.browser.fromPixels(imageData);
    const eTensor = tensor.expandDims(0);
    var prediction = net.predict(eTensor).print();
    console.log(prediction);
    console.log(imageData);
  }
  
     };


app();