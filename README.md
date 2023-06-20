# Error-Mask

The package for all you error to be beautified.

# Support

Currently we support Firebase (Firestore , Authentication , Storage) and MongoDb(Beta) - Errors code.

# Use

Install the package

```bash

npm i error-mask

or

yarn add error-mask

```

Import the Package in you file

```jsx
// import all the required functions
import {getFirebaseAuthError , getFirebaseStoreError , getFirebaseStorageError , getMongoError} from "error-mask"


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    
    // let there be an error code of "auth/email-already-exists"

    console.log(getFirebaseAuthError(errorCode).message) // this will print "Email Already in Use"

    // use this message in a toast or anything where user can see
  });

```

Pass The Error Code to the function and **error-mask** will give you the Human readable string


# Contribution

Contributions are always welcomed 