import { firebaseDB } from '../firebase/config';
import {
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  query,
  where,
} from 'firebase/firestore/lite';
import { emailFormatter } from '../utils';

/**
 * The function `saveUserInfo` saves user information to a Firebase database.
 */
export const saveUserInfo = async ({
  name: userName,
  email,
  image: userImage,
}: {
  name: string,
  email: string,
  image: string,

}) => {
  await setDoc(doc(firebaseDB, 'user', email), {
    userName,
    email,
    userImage,
  });
};

/**
 * The function `getUserInfo` retrieves user information from a Firebase database based on the provided
 * user ID.
 * @returns The function `getUserInfo` returns the data of the user document if it exists in the
 * Firebase database. If the document does not exist, it logs a message saying "No such document!"
 */
export const getUserInfo = async ({ userId }: { userId: string }) => {
  const docRef = doc(firebaseDB, 'user', emailFormatter(userId));
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!');
  }
};

/**
 * The function `getUserPins` retrieves a list of pins from a Firebase collection based on a user's
 * email.
 * @returns a list of pins associated with a specific user.
 */
export const getUserPins = async ({ userId }: { userId: string }) => {
  let listOfPins: any = [];
  const q = query(
    collection(firebaseDB, 'pinterest-post'),
    where('email', '==', emailFormatter(userId))
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    listOfPins.push(doc.data());
  });

  return listOfPins;
};

/**
 * The function `getAllPins` retrieves all the documents from the "pinterest-post" collection in
 * Firebase and returns them as an array.
 * @returns a Promise that resolves to an array of Pinterest post data.
 */
export const getAllPins = async () => {
  let listOfPins: any = [];
  const q = query(collection(firebaseDB, 'pinterest-post'));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    listOfPins.push(doc.data());
  });

  return listOfPins;
};

/**
 * The function `getPinDetail` retrieves the data of a Pinterest post with the specified pinId from a
 * Firebase database.
 * @returns The function `getPinDetail` returns the data of the document with the specified `pinId`
 * from the "pinterest-post" collection in the Firebase database. If the document exists, the function
 * returns the data using `docSnap.data()`. If the document does not exist, it logs "No such document!"
 * to the console.
 */
export const getPinDetail = async ({ pinId }: { pinId: string }) => {
  const docRef = doc(firebaseDB, 'pinterest-post', pinId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log('No such document!');
  }
};
