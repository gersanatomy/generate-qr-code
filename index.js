const qr = require("qrcode");

let data = {
  code: "your sample data here",
};

let stJson = JSON.stringify(data);

//uncomment the block of code that you need to run.

//generates QR to terminal
// qr.toString(stJson, { type: "terminal" }, function (err, code) {
//   if (err) return console.log("Error: " + err);
//   console.log(code);
// });

//generates QR in base64 format
// qr.toDataURL(stJson, function (err, code) {
//   if (err) return console.log("Error: " + err);
//   console.log(code);
// });

//generates QR into png file
qr.toFile("qr.png", stJson, function (err) {
  if (err) return console.log("Error: " + err);
});
