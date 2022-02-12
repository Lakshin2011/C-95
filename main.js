var firebaseConfig = {
    apiKey: "AIzaSyDvmU7SlC33x0A4SXl_E91Sil8WTC4FX7Q",
    authDomain: "practice-24197.firebaseapp.com",
    databaseURL: "https://practice-24197-default-rtdb.firebaseio.com",
    projectId: "practice-24197",
    storageBucket: "practice-24197.appspot.com",
    messagingSenderId: "509510638526",
    appId: "1:509510638526:web:66b4505d7a1274032ef7ef"
  };
  firebase.initializeApp(firebaseConfig);
function AddUser()
{
    var user_name=document.getElementById("user").value;
    firebase.database().ref("/").child(user_name).update
    ({
        purpose:"adding user"
    });

}