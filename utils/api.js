import firebase from 'firebase';

export function initFirebase() {
  const config = {
    apiKey: "AIzaSyDpoHlTCso2DdDOBgazS2Z4ayrI5wOYNvs",
    authDomain: "jusbuss-ed481.firebaseapp.com",
    databaseURL: "https://jusbuss-ed481.firebaseio.com",
    projectId: "jusbuss-ed481",
    storageBucket: "jusbuss-ed481.appspot.com",
    messagingSenderId: "352207310098"
  };
  firebase.initializeApp(config);
}

export function createUser(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
});
}
