import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCs8xo0gCyP3d71bKG-Rn3DwW58KLQN41U",
  authDomain: "daily-todo-98b7b.firebaseapp.com",
  projectId: "daily-todo-98b7b",
  databaseURL: 'https://daily-todo-98b7b-default-rtdb.firebaseio.com/',
  storageBucket: "daily-todo-98b7b.appspot.com",
  messagingSenderId: "913694339387",
  appId: "1:913694339387:web:b456d91d101db1c179071e"
};

firebase.initializeApp(firebaseConfig);

export default firebase
