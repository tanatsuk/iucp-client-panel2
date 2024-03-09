$("#main").prepend(
  `<div id=iucp-modal class=ui-widget-content>
    <p>IUCP Client Panel</p>
    <div id=iucp-main>
      <div id=they-said></div>
      <div id=iucp-input-row>
        <input id=iucp-input type=text></input>
        <button id=iucp-send>send</button>
      </div>
    </div>
  </div>`);
$( function() {$( "#iucp-modal" ).draggable();});

$("body").append(
  `<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, onValue, push, ref, set } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "foo",
  authDomain: "iucp-ea54f.firebaseapp.com",
  databaseURL: "https://iucp-ea54f-default-rtdb.firebaseio.com",
  projectId: "iucp-ea54f",
  storageBucket: "iucp-ea54f.appspot.com",
  messagingSenderId: "5088086042",
  appId: "1:5088086042:web:976e33462380a7a2a729a3"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const myRef = ref(database, "iucp");

onValue(myRef, (snapshot) => {
  document.getElementById("they-said").innerHTML = "";
  snapshot.forEach((a) => {
    const entry = a.val();
    document.getElementById("they-said").innerHTML += "<p>" + entry + "</p>";
  });
});

document.getElementById("iucp-send").onclick = function() {
  const i = document.getElementById("iucp-input");
  const newElement = push(myRef);
  set(newElement, i.value);
  i.value = "";
};
  </script>`);
