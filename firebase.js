// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//grab a form
const form = document.querySelector('form');

//get input
const inputEmail = form.querySelector('#inputEmail');
const inputName = form.querySelector('#inputName');
const inputMessage = form.querySelector('#inputMessage');


//create a functions to push
function firebasePush(email, name, message) {


    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    //get date and time
    var d = new Date();
    var date_formatted = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getHours() + "-" + d.getMinutes() + "-" + d.getSeconds();

    //push
    firebase.database().ref(date_formatted).set(
        {
            email: email.value,
            name: name.value,
            message: message.value
        }
    );

}

//push on form submit
if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush(inputEmail, inputName, inputMessage);

        //shows alert if everything went well.
        return alert('Submitted');
    })
}