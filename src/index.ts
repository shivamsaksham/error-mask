import { mongoDbErrors } from "./mongo_db";
import { fireBaseAuthErr, firebaseFirestoreError, firebaseStorageError } from "./firebase_error"



const getFirebaseAuthError = (error_code : string)=>{
    const msg = fireBaseAuthErr[error_code];
    if (msg) {
        return msg
    }else{
        return fixNotFound(error_code)
    }
}

const getFirebaseStoreError = (error_code : string)=>{
    const msg = firebaseFirestoreError[error_code];
    if (msg) {
        return msg
    }else{
        return fixNotFound(error_code)
    }
}

const getFirebaseStorageError = (error_code: string)=>{
    const msg = firebaseStorageError[error_code]
    if (msg) {
        return msg;
    }else{
        return fixNotFound(error_code)
    }
}

const getMongoError = (error_code : string)=>{
    const msg =  mongoDbErrors[error_code]
    if (msg) {
        return msg
    }else{
        return fixNotFound(error_code)
    }
}

const fixNotFound = (error_code : string)=>{
    try {
        let err = error_code.split("/")[1]
        err = err?.replace("-" , " ")
        err = err?.toUpperCase()
        return err
    } catch (error) {
        return error_code
    }
}

export {getFirebaseAuthError , getFirebaseStoreError , getFirebaseStorageError , getMongoError}