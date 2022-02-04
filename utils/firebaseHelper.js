import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  addDoc,
  deleteDoc,
  Timestamp,
  updateDoc
} from 'firebase/firestore/lite';

import {
  getAuth,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

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
  measurementId: 'G-HQDW29BSYF' // process.env.MEASUREMENT_ID
};

const app = initializeApp(config);
const db = getFirestore(app);
const auth = getAuth(app);


export const fbCreateAccount = async (
  email,
  password,
  firstname,
  lastname,
  phone
) => {
  const response = await createUserWithEmailAndPassword(auth, email, password);
  console.log(response);
  if (response) {
    console.log('Create res: ', response);
    await fbSetUserProfile({ email, firstname, lastname, phone });
    const profile = await fbGetUserProfile();
    return {
      user: response.user,
      profile,
    };
  } else {
    return {
      user: null,
      profile: null,
    };
  }
};

export const fbSignIn = async (email, password) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  console.log(response);
  return response;
};

export const fbSignOut = async () => {
  await signOut(auth);
  return true;
};

export const fbAuthStateListener = (callback) => {
  console.log('Auth state  called');
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      callback(user);
    } else {
      // User is signed out
      callback(null);
    }
  });
};

export const fbSetUserProfile = async ({email, firstname, lastname, phone}) => {
  const user = auth.currentUser;
  console.log(user);

  const ref = doc(db, "users", user.uid);
  await setDoc(
    ref,
    {
      email: email,
      firstname: firstname,
      lastname: lastname,
      phone: phone,
      userId: user.uid,
      createdOn: Timestamp.fromDate(new Date())
    },
    { merge: true }
  );
  return true;
};

export const fbGetUserProfile = async () => {
  const user = auth.currentUser;
  console.log(user);

  const ref = doc(db, "users", user.uid);
  const docSnap = await getDoc(ref);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return {
      ...docSnap.data(),
      uid: user.uid,
    };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!", user.uid);
    return null;
  }
};


// Add new post
async function addPost(userId, message, imageUrl, author) {
  const postCollection = collection(db, 'posts');
  return postRef = await addDoc(postCollection, {
    userId: userId,
    message: message,
    imageUrl: imageUrl,
    author: author,
    createdOn: Timestamp.fromDate(new Date())
  });
}


// Get a list of posts from your database
async function getPosts(db) {
  const postCollection = collection(db, 'posts');
  const postSnapshot = await getDocs(postCollection);
  const postList = postSnapshot.docs.map(doc => doc.data());
  return postList;
}

async function deletePost(postId) {
 return await deleteDoc(doc(db, 'posts', postId));
}

async function updatePostText(postId, { message } ) {
  return await updateDoc(doc(db, 'posts', postId), {
    message: message,
    createdOn: Timestamp.fromDate(new Date())
  });
}

export {
  db,
  getPosts,
  addPost,
  deletePost,
  updatePostText,
}
