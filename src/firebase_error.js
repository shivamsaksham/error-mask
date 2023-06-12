const fireBaseAuthErr = {
  "auth/popup-closed-by-user": {
    description:
      "The authentication popup was closed by the user. Please make sure to complete the authentication process by keeping the popup open until it finishes.",
    message: "Authentication Popup Closed",
  },
  "auth/claims-too-large": {
    description:
      "The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.",
    message: "Claims Payload Too Large",
  },
  "auth/email-already-exists": {
    description:
      "The provided email is already in use by an existing user. Each user must have a unique email.",
    message: "Email Already in Use",
  },
  "auth/id-token-expired": {
    description: "The provided Firebase ID token is expired.",
    message: "ID Token has Expired",
  },
  "auth/id-token-revoked": {
    description: "The Firebase ID token has been revoked.",
    message: "ID token has been revoked.",
  },
  "auth/insufficient-permission": {
    description:
      "The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.",
    message: "Insufficient Permission",
  },
  "auth/internal-error": {
    description:
      "The Authentication server encountered an unexpected error while trying to process the request. The error message should contain the response from the Authentication server containing additional information. If the error persists, please report the problem to our Bug Report support channel.",
    message: "Internal Error",
  },
  "auth/invalid-argument": {
    description:
      "An invalid argument was provided to an Authentication method. The error message should contain additional information.",
    message: "Invalid Argument",
  },
  "auth/invalid-claims": {
    description:
      "The custom claim attributes provided to setCustomUserClaims() are invalid.",
    message: "Invalid Claims",
  },
  "auth/invalid-continue-uri": {
    description: "The continue URL must be a valid URL string.",
    message: "Invalid Continue URL",
  },
  "auth/invalid-creation-time": {
    description: "The creation time must be a valid UTC date string.",
    message: "Invalid Creation Time",
  },
  "auth/invalid-credential": {
    description:
      "The credential used to authenticate the Admin SDKs cannot be used to perform the desired action. Certain Authentication methods such as createCustomToken() and verifyIdToken() require the SDK to be initialized with a certificate credential as opposed to a refresh token or Application Default credential. See Initialize the SDK for documentation on how to authenticate the Admin SDKs with a certificate credential.",
    message: "Invalid Credential",
  },
  "auth/invalid-disabled-field": {
    description:
      "The provided value for the disabled user property is invalid. It must be a boolean.",
    message: "Invalid Disabled Field",
  },
  "auth/invalid-display-name": {
    description:
      "The provided value for the displayName user property is invalid. It must be a non-empty string.",
    message: "Invalid Display Name",
  },
  "auth/invalid-dynamic-link-domain": {
    description:
      "The provided dynamic link domain is not configured or authorized for the current project.",
    message: "Invalid Dynamic Link Domain",
  },
  "auth/invalid-email": {
    description:
      "The provided value for the email user property is invalid. It must be a string email address.",
    message: "Invalid Email",
  },
  "auth/invalid-email-verified": {
    description:
      "The provided value for the emailVerified user property is invalid. It must be a boolean.",
    message: "Invalid Email Verified",
  },
  "auth/invalid-hash-algorithm": {
    description:
      "The hash algorithm must match one of the strings in the list of supported algorithms.",
    message: "Invalid Hash Algorithm",
  },
  "auth/invalid-hash-block-size": {
    description: "The hash block size must be a valid number.",
    message: "Invalid Hash Block Size",
  },
  "auth/invalid-hash-derived-key-length": {
    description: "The hash derived key length must be a valid number.",
    message: "Invalid Hash Derived Key Length",
  },
  "auth/invalid-hash-key": {
    description: "The hash key must be a valid byte buffer.",
    message: "Invalid Hash Key",
  },
  "auth/invalid-hash-memory-cost": {
    description: "The hash memory cost must be a valid number.",
    message: "Invalid Hash Memory Cost",
  },
  "auth/invalid-hash-parallelization": {
    description: "The hash parallelization must be a valid number.",
    message: "Invalid Hash Parallelization",
  },
  "auth/invalid-hash-rounds": {
    description: "The hash rounds must be a valid number.",
    message: "Invalid Hash Rounds",
  },
  "auth/invalid-hash-salt-separator": {
    description:
      "The hashing algorithm salt separator field must be a valid byte buffer.",
    message: "Invalid Hash Salt Separator",
  },
  "auth/invalid-id-token": {
    description: "The provided ID token is not a valid Firebase ID token.",
    message: "Invalid ID Token",
  },
  "auth/invalid-last-sign-in-time": {
    description: "The last sign-in time must be a valid UTC date string.",
    message: "Invalid Last Sign-In Time",
  },
  "auth/invalid-page-token": {
    description:
      "The provided next page token in listUsers() is invalid. It must be a valid non-empty string.",
    message: "Invalid Page Token",
  },
  "auth/invalid-password": {
    description:
      "The provided value for the password user property is invalid. It must be a string with at least six characters.",
    message: "Invalid Password",
  },
  "auth/invalid-password-hash": {
    description: "The password hash must be a valid byte buffer.",
    message: "Invalid Password Hash",
  },
  "auth/invalid-password-salt": {
    description: "The password salt must be a valid byte buffer.",
    message: "Invalid Password Salt",
  },
  "auth/invalid-phone-number": {
    description:
      "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
    message: "Invalid Phone Number",
  },
  "auth/invalid-photo-url": {
    description:
      "The provided value for the photoURL user property is invalid. It must be a string URL.",
    message: "Invalid Photo URL",
  },
  "auth/invalid-provider-data": {
    description: "The providerData must be a valid array of UserInfo objects.",
    message: "Invalid Provider Data",
  },
  "auth/invalid-provider-id": {
    description:
      "The providerId must be a valid supported provider identifier string.",
    message: "Invalid Provider ID",
  },
  "auth/invalid-oauth-responsetype": {
    description: "Only exactly one OAuth responseType should be set to true.",
    message: "Invalid OAuth Response Type",
  },
  "auth/invalid-session-cookie-duration": {
    description:
      "The session cookie duration must be a valid number in milliseconds.",
    message: "Invalid Session Cookie Duration",
  },
  "auth/invalid-uid": {
    description:
      "The provided uid must be a non-empty string with no more than 128 characters.",
    message: "Invalid UID",
  },
  "auth/invalid-user-import": {
    description:
      "The user record to import is invalid. See the Firebase Auth API documentation for more details on the requirements for importing user records.",
    message: "Invalid User Import",
  },
  "auth/maximum-user-count-exceeded": {
    description:
      "The maximum allowed number of users to import has been exceeded. The limit is 1000 user records for each batch of user imports, and 100,000 user records in total.",
    message: "Maximum User Count Exceeded",
  },
  "auth/missing-hash-algorithm": {
    description:
      "The hash algorithm must be specified when importing users in order to hash passwords.",
    message: "Missing Hash Algorithm",
  },
  "auth/missing-uid": {
    description: "A uid identifier is required for the current operation.",
    message: "Missing UID",
  },
  "auth/reserved-claims": {
    description:
      "The provided custom claims include reserved keys. Reserved claims are not allowed in custom claims.",
    message: "Reserved Claims",
  },
  "auth/session-cookie-expired": {
    description: "The Firebase session cookie is expired.",
    message: "Session Cookie Expired",
  },
  "auth/session-cookie-revoked": {
    description: "The Firebase session cookie has been revoked.",
    message: "Session Cookie Revoked",
  },
  "auth/uid-already-exists": {
    description:
      "The provided uid is already in use by an existing user. Each user must have a unique uid.",
    message: "UID Already in Use",
  },
  "auth/user-not-found": {
    description:
      "No account was found for the given credentials.",
    message: "Invalid Credentials",
  },
  "auth/wrong-password": {
    description:
      "No account was found for the given credentials.",
    message: "Invalid Credentials",
  },
};

const firebaseFirestoreError = {
  "firestore/cancelled": {
    description: "The operation was cancelled (typically by the caller).",
    message: "Operation cancelled.",
  },
  "firestore/unknown": {
    description: "Unknown error or an error from a different error domain.",
    message: "Unknown error.",
  },
  "firestore/invalid-argument": {
    description: "Client specified an invalid argument.",
    message: "Invalid argument.",
  },
  "firestore/deadline-exceeded": {
    description: "Deadline expired before operation could complete.",
    message: "Deadline exceeded.",
  },
  "firestore/not-found": {
    description: "Some requested document was not found.",
    message: "Document not found.",
  },
  "firestore/already-exists": {
    description: "Some document that we attempted to create already exists.",
    message: "Document already exists.",
  },
  "firestore/permission-denied": {
    description:
      "The caller does not have permission to execute the specified operation.",
    message: "Permission denied.",
  },
  "firestore/resource-exhausted": {
    description: "Some resource has been exhausted.",
    message: "Resource exhausted.",
  },
  "firestore/failed-precondition": {
    description:
      "Operation was rejected because the system is not in a required state.",
    message: "Precondition failed.",
  },
  "firestore/aborted": {
    description:
      "The operation was aborted, typically due to a concurrency issue.",
    message: "Operation aborted.",
  },
  "firestore/out-of-range": {
    description: "Operation was attempted past the valid range.",
    message: "Out of range.",
  },
  "firestore/unimplemented": {
    description: "Operation is not implemented or not supported/enabled.",
    message: "Not implemented.",
  },
  "firestore/internal": {
    description: "Internal errors. Something is very broken.",
    message: "Internal error.",
  },
  "firestore/unavailable": {
    description: "The service is currently unavailable. Retry with a backoff.",
    message: "Service unavailable.",
  },
  "firestore/data-loss": {
    description: "Unrecoverable data loss or corruption.",
    message: "Data loss.",
  },
  "firestore/unauthenticated": {
    description: "The request does not have valid authentication credentials.",
    message: "Unauthenticated request.",
  },
};

const firebaseStorageError = {
  "storage/unknown": {
    description: "An unknown error occurred.",
    message: "Unknown error.",
  },
  "storage/object-not-found": {
    description: "No object exists at the desired reference.",
    message: "Object not found at the desired reference.",
  },
  "storage/bucket-not-found": {
    description: "No bucket is configured for Cloud Storage",
    message: "Bucket not found.",
  },
  "storage/project-not-found": {
    description: "No project is configured for Cloud Storage",
    message: "Project not found.",
  },
  "storage/quota-exceeded": {
    description:
      "Quota on your Cloud Storage bucket has been exceeded. If you're on the no-cost tier, upgrade to a paid plan. If you're on a paid plan, reach out to Firebase support.",
    message: "Quota exceeded.",
  },
  "storage/unauthenticated": {
    description: "User is unauthenticated, please authenticate and try again.",
    message: "Unauthenticated request.",
  },
  "storage/unauthorized": {
    description:
      "User is not authorized to perform the desired action, check your security rules to ensure they are correct.",
    message: "Unauthorized request.",
  },
  "storage/retry-limit-exceeded": {
    description:
      "The maximum time limit on an operation (upload, download, delete, etc.) has been exceeded. Try uploading again.",
    message: "Retry limit exceeded.",
  },
  "storage/invalid-checksum": {
    description:
      "File on the client does not match the checksum of the file received by the server. Try uploading again.",
    message: "Invalid checksum.",
  },
  "storage/canceled": {
    description: "User canceled the operation.",
    message: "Operation canceled.",
  },
  "storage/invalid-event-name": {
    description:
      "Invalid event name provided. Must be one of [running, progress, pause]",
    message: "Invalid event name.",
  },
  "storage/invalid-url": {
    description:
      "Invalid URL provided to refFromURL(). Must be of the form: gs://bucket/object or https://firebasestorage.googleapis.com/v0/b/bucket/o/object?token=<TOKEN>",
    message: "Invalid URL.",
  },
  "storage/invalid-argument": {
    description:
      "The argument passed to put() must be File, Blob, or UInt8 Array. The argument passed to putString() must be a raw, Base64, or Base64URL string.",
    message: "Invalid argument.",
  },
  "storage/no-default-bucket": {
    description:
      "No bucket has been set in your config's storageBucket property.",
    message: "No default bucket.",
  },
  "storage/cannot-slice-blob": {
    description:
      "Commonly occurs when the local file has changed (deleted, saved again, etc.). Try uploading again after verifying that the file hasn't changed.",
    message: "Cannot slice blob.",
  },
  "storage/server-file-wrong-size": {
    description:
      "File on the client does not match the size of the file received by the server. Try uploading again.",
    message: "Server file size mismatch.",
  },
};

export { fireBaseAuthErr, firebaseFirestoreError, firebaseStorageError };
