const firebaseConfig = {
    apiKey: "AIzaSyBdRq6jIL8tT0cbXlCRPLaNz8Jp89FhJSg",
    authDomain: "form-b149c.firebaseapp.com",
    databaseURL: "https://form-b149c-default-rtdb.firebaseio.com",
    projectId: "form-b149c",
    storageBucket: "form-b149c.appspot.com",
    messagingSenderId: "467787049356",
    appId: "1:467787049356:web:fb4ba6f435df8703e34ea9",
    measurementId: "G-1JGKWZ1MV3"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Reference your database
const basicformDB = firebase.database().ref('basicform');


// Get the form from the HTML file
document.getElementById('basicform').addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault(); // Prevent the default form submission behavior
   
    var name = getElementVal('name');
    var email = getElementVal('email');
    var phone = getElementVal('phone');
    var age = getElementVal('age');
    var date = getElementVal('date');
    var password = getElementVal('password');
    var gender;


    if (document.getElementById('male').checked) {
        gender = getelementVal('male');
    } else if (document.getElementById('female').checked) {
        gender = getelementVal('female');
    } else if (document.getElementById('other').checked) {
        gender = getelementVal('other');
    }
   
    var region = getElementVal('region');
   
    saveMessages(name, email, phone, age, date, password, gender, region);


     // Clear the form after submission
     document.getElementById('basicform').reset();
}


const saveMessages = (name, email, phone, age, date, password, gender, region) => {
    var newbasicform = basicformDB.push();


    newbasicform.set({
        name: name,
        emailid: email,
        phone: phone,
        age: age,
        date: date,
        password: password,
        gender: gender,
        region: region,
    });
};


function getElementVal(id) {
    return document.getElementById(id).value;
}


function getelementVal(id) {
    return document.getElementById(id).value;
}
