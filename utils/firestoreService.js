import {
  getFirestore,
  collection,
  doc,
  addDoc,
  setDoc,
  getDoc,
  where,
  query,
  Timestamp,
  updateDoc,
  getDocs
} from 'firebase/firestore/lite';

import { firebaseApp } from './authService';

const config = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID
  apiKey: 'AIzaSyC551QqnL5TmoX5F0PIcf8o8Nfb1gXsVVM', //process.env.API_KEY,
  authDomain: 'yesmkt-demo.firebaseapp.com', // process.env.AUTH_DOMAIN,
  projectId: 'yesmkt-demo', // process.env.PROJECT_ID,
  storageBucket: 'yesmkt-demo.appspot.com', // process.env.STORAGE_BUCKET,
  messagingSenderId: '2056023461', // process.env.MESSAGING_SENDER_ID,
  appId: '1:2056023461:web:ce09dd379322fa4ec58c4c', // process.env.APP_ID,
  measurementId: 'G-HQDW29BSYF', // process.env.MEASUREMENT_ID
};

// MRS pls create a Firestore Service separated from Auth Service
const db = getFirestore(firebaseApp);

// Add new item
// MRS when you get in to this Firestore Service, remember to implement like this:
// add(collection, id, data) ... collection is always plural, so singular is used, for instance like this:
// v-for(let post of posts)
async function addItem(collectionName, payload) {
  const itemCollection = collection(db, collectionName);
  return await addDoc(itemCollection, payload);
}

// Set item
async function setItem(collectionName, id, payload) {
  const itemDoc = doc(db, collectionName, id);
  return await setDoc(itemDoc, payload);
}

// Get item

async function getItem(collectionName, id) {
  const docRef = doc(db, collectionName, id)
  return await getDoc(docRef);
}

// Get items as list

async function getItemListByQuery(collectionName, param, value) {
  const q = query(collection(db, collectionName), where(param, '==', value));
  const querySnapshot = await getDocs(q);
  const result = []
  querySnapshot.forEach((doc) => {
    var snap = doc.data()
    snap.id = doc.id;
    result.push(snap)
  })
  return result
}

// much more generic is update(collection, id, data)
async function updatePostText(postId, { message } ) {
  return await updateDoc(doc(db, 'posts', postId), {
    message: message,
    createdOn: Timestamp.fromDate(new Date())
  });
}

// MRS ... LATER, at least, 2 more methods:
// returns ain ID in case we need and ID before writing to the db and will use later set()
// function id() { return doc('_').doc().id }
// function set(collection, id, data) { ... }

export {
  db,
  Timestamp,
  addItem,
  getItem,
  setItem,
  getItemListByQuery,
  updatePostText,
}
