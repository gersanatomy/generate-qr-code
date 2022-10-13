const qr = require("qrcode");

let value = "Sample";
let start = 0;
let end = 100;
let isEncrypted = true;

for (var i = start; i < end; i++) {
  var data = value;
  if (isEncrypted) {
    data = encryptMessage(value + pad(i), i);
  }
  //uncomment the function that you need to run.
  generateQRToFile(data, i);
  //   generateQRToBase64(data);
  //   generateQRToString(data);
}

//encrypts qr value
function encryptMessage(message) {
  var output = "";

  for (var i = 0; i < message.length; i++) {
    var ch = message.charAt(i);
    var asc = ch.charCodeAt(0);

    if (asc % 2 == 0) {
      asc = (asc + 7) % 126;
    } else {
      asc = asc < 7 ? 119 + asc : asc - 7;
    }

    output += String.fromCharCode(asc);
  }

  return output;
}

//generates QR into png file
function generateQRToFile(count, data) {
  qr.toFile(
    count + ".png",
    data,
    {
      width: 300,
    },
    function (err) {
      if (err) return console.log("Error: " + err);
    }
  );
}

//generates QR in base64 format
function generateQRToBase64(data) {
  qr.toDataURL(data, function (err, code) {
    if (err) return console.log("Error: " + err);
    console.log(code);
  });
}

//generates QR to terminal
function generateQRToString(data) {
  qr.toString(data, { type: "terminal" }, function (err, code) {
    if (err) return console.log("Error: " + err);
    console.log(code);
  });
}

//used for testing encrypted value
function decryptMessage(message) {
  var output = "";

  for (var i = 0; i < message.length; i++) {
    var ch = message[i];
    var asc = ch.charCodeAt(0);

    if (asc % 2 == 0) {
      asc = (asc + 7) % 126;
    } else {
      asc = asc < 7 ? 119 + asc : asc - 7;
    }

    output += String.fromCharCode(asc);
  }

  return output;
}
