import { mongoDbErrors } from "mongo_db";
import { fireBaseAuthErr, firebaseFirestoreError, firebaseStorageError } from "./firebase_error"

const getFirebaseAuthError = (error_code)=>{
    return fireBaseAuthErr[error_code];
}

const getFirebaseStoreError = (error_code)=>{
    return firebaseFirestoreError[error_code];
}

const getFirebaseStorageError = (error_code)=>{
    return firebaseStorageError[error_code]
}

const getMongoError = (error_code)=>{
    return mongoDbErrors[error_code]
}

export {getFirebaseAuthError , getFirebaseStoreError , getFirebaseStorageError , getMongoError}