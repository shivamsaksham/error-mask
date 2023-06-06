import { fireBaseAuthErr } from "./firebase_error"

const getFirebaseAuthError = (error_code)=>{
    return fireBaseAuthErr[error_code];
}

export {getFirebaseAuthError}