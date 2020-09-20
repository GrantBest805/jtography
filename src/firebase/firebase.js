import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyDlRBWpIQPgaHc49U67FwpRVoheqwYRv8o',
  authDomain: 'jtography-baac3.firebaseapp.com',
  databaseURL: 'https://jtography-baac3.firebaseio.com',
  projectId: 'jtography-baac3',
  storageBucket: 'jtography-baac3.appspot.com',
  messagingSenderId: '1057135402144',
  appId: '1:1057135402144:web:ccfc5ad829bbcb28acbdc5',
  measurementId: 'G-XJRH07SKMT',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
