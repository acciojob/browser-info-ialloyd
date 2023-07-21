//your JS code here. If required.

let userAgent = navigator.userAgent;
let browserName, version;

if (userAgent.indexOf("Chrome") > -1) {
  browserName = "Chrome";
  let start = userAgent.indexOf("Chrome/") + 7;
  let end = userAgent.indexOf(" ", start);
  version = userAgent.substring(start, end);
}

let message = `You are using ${browserName} version ${version}`;

let browserInfoDiv = document.getElementById("browser-info");

browserInfoDiv.textContent = message;


