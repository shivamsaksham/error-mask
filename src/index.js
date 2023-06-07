import { mongoDbErrors } from "./mongo_db";
import { fireBaseAuthErr, firebaseFirestoreError, firebaseStorageError } from "./firebase_error"

const getFirebaseAuthError = (error_code)=>{
    const msg = fireBaseAuthErr[error_code];
    if (msg) {
        return msg
    }else{
        fixNotFound(error_code)
    }
}

const getFirebaseStoreError = (error_code)=>{
    const msg = firebaseFirestoreError[error_code];
    if (msg) {
        return msg
    }else{
        fixNotFound(error_code)
    }
}

const getFirebaseStorageError = (error_code)=>{
    const msg = firebaseStorageError[error_code]
    if (msg) {
        return msg;
    }else{
        fixNotFound(error_code)
    }
}

const getMongoError = (error_code)=>{
    const msg =  mongoDbErrors[error_code]
    if (msg) {
        return msg
    }else{
        fixNotFound(error_code)
    }
}

const fixNotFound = (error_code)=>{
    try {
        let err = error_code.split("/")[1]
        err = err.replace("-" , " ")
        err = err.toUpperCase()
        return err
    } catch (error) {
        return error_code
    }
}

export {getFirebaseAuthError , getFirebaseStoreError , getFirebaseStorageError , getMongoError}