import firebase from 'firebase/app'
import 'firebase/auth'

var firebaseConfig = {
  apiKey: "AIzaSyAoLjUcRDi-TRwXS5wR_Jvw3ASYRQqojmQ",
  authDomain: "react-quiz-app-a6251.firebaseapp.com",
  databaseURL: "https://react-quiz-app-a6251.firebaseio.com",
  projectId: "react-quiz-app-a6251",
  storageBucket: "",
  messagingSenderId: "986446609601",
  appId: "1:986446609601:web:004e8c29df697dd0"
};
  // Initialize Firebase
const firebaseApp =  firebase.initializeApp(firebaseConfig);
const  provider = new firebase.auth.FacebookAuthProvider();

export{
    firebaseApp,
    provider
}
