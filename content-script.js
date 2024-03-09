$("#main").prepend("<div id=iucp-modal class=ui-widget-content><p>IUCP Client Panel</p><p id=they-said>You can drag me around</p></div>");
$( function() {$( "#iucp-modal" ).draggable();});

$("body").append(
  `<script type="module">
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "foo",
  authDomain: "iucp-ea54f.firebaseapp.com",
  databaseURL: "https://iucp-ea54f-default-rtdb.firebaseio.com",
  projectId: "iucp-ea54f",
  storageBucket: "iucp-ea54f.appspot.com",
  messagingSenderId: "5088086042",
  appId: "1:5088086042:web:976e33462380a7a2a729a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

console.log("loaded firebase");
document.getElementById("they-said").innerHTML = "loaded firebase";
  </script>`);
