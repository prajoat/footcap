const firebaseConfig = {
    apiKey: "AIzaSyB1S5PsfHh15NqNKiE_I_1sA62y68BXu8w",
    authDomain: "register-22030.firebaseapp.com",
    databaseURL: "https://register-22030-default-rtdb.firebaseio.com",
    projectId: "register-22030",
    storageBucket: "register-22030.appspot.com",
    messagingSenderId: "8359883938",
    appId: "1:8359883938:web:7cce4ac8308e87d47713fb",
    measurementId: "G-SBYD047TQ1"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference your database
  var contactFormDB = firebase.database().ref("account");
  
  // ... (Your Firebase configuration remains the same)

// Add an event listener to the form with the ID "account" for the "submit" event
document.getElementById("account").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var password = getElementVal("password"); // Change "msgContent" to "password"

    saveMessages(name, emailid, password); // Update the function call as well

    // Enable alert
    document.querySelector(".alert").style.display = "block";

    // Remove the alert after 3 seconds
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    // Reset the form
    document.getElementById("account").reset();
}

const saveMessages = (name, emailid, password) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        password: password, // Change "msgContent" to "password"
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};
