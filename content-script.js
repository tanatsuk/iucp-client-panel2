$("#main").prepend("<div id=iucp-modal class=ui-widget-content><p>IUCP Client Panel</p><p id=they-said>You can drag me around</p></div>");
$( function() {$( "#iucp-modal" ).draggable();});

$("body").append(
  `<script type=module>
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js';
const firebaseConfig = {
  apiKey: "foo",
  authDomain: "chantokun-a3dac.firebaseapp.com",
  databaseURL: "https://chantokun-a3dac-default-rtdb.firebaseio.com",
  projectId: "chantokun-a3dac",
  storageBucket: "chantokun-a3dac.appspot.com",
  messagingSenderId: "1040075913299",
  appId: "1:1040075913299:web:616cec5b063ffe640daea6",
  measurementId: "G-CEEZFEPYM2"
};
const app = initializeApp(firebaseConfig);
console.log("loaded firebase");
document.getElementById("they-said").innerHTML = "loaded firebase";
  </script>`);
