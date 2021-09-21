import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import myStore from './store';
import { Provider } from 'react-redux';

import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-gSFYtw7BC2g914EeHQnv23cYJ12AMK4",
  authDomain: "clone-81fea.firebaseapp.com",
  projectId: "clone-81fea",
  storageBucket: "clone-81fea.appspot.com",
  messagingSenderId: "220358737974",
  appId: "1:220358737974:web:cc4305c68adca873991897",
  measurementId: "G-W2CTX7JHBH"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
auth.onAuthStateChanged((user)=>{
  console.log('user',user);
});

ReactDOM.render(
    <BrowserRouter>
      <Provider store={myStore}>
        <App />  
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

