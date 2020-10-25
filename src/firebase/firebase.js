import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyDh6LMNfROY6PbykbB4GS1WV_TO5qLhQso',
  authDomain: 'jtography-v1.firebaseapp.com',
  databaseURL: 'https://jtography-v1.firebaseio.com',
  projectId: 'jtography-v1',
  storageBucket: 'jtography-v1.appspot.com',
  messagingSenderId: '1049150319356',
  appId: '1:1049150319356:web:9631684dd67c38ee420579',
  measurementId: 'G-F2RZWYH6L7',
};

firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFirestore, projectStorage, timestamp };

// import firebase from 'firebase/app';
// import 'firebase/storage';

// var firebaseConfig = {
//   apiKey: 'AIzaSyDlRBWpIQPgaHc49U67FwpRVoheqwYRv8o',
//   authDomain: 'jtography-baac3.firebaseapp.com',
//   databaseURL: 'https://jtography-baac3.firebaseio.com',
//   projectId: 'jtography-baac3',
//   storageBucket: 'jtography-baac3.appspot.com',
//   messagingSenderId: '1057135402144',
//   appId: '1:1057135402144:web:ccfc5ad829bbcb28acbdc5',
//   measurementId: 'G-XJRH07SKMT',
// };

// firebase.initializeApp(firebaseConfig);

// const storage = firebase.storage();

// export { storage, firebase as default };
