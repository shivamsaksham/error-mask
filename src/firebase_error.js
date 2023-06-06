const fireBaseAuthErr = {
  "auth/claims-too-large": {
    errorCode: "auth/claims-too-large",
    description:
      "The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.",
    message:"The claims payload exceeded (allowed size of 1000 bytes)"
  },
  "auth/email-already-exists": {
    errorCode: "auth/email-already-exists",
    description:
      "The provided email is already in use by an existing user. Each user must have a unique email.",
    message:"Email Already in Use"
  },
  "auth/id-token-expired": {
    errorCode: "auth/id-token-expired",
    description: "The provided Firebase ID token is expired.",
  },
  "auth/id-token-revoked": {
    errorCode: "auth/id-token-revoked",
    description: "The Firebase ID token has been revoked.",
  },
  "auth/insufficient-permission": {
    errorCode: "auth/insufficient-permission",
    description:
      "The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.",
  },
  "auth/internal-error": {
    errorCode: "auth/internal-error",
    description:
      "The Authentication server encountered an unexpected error while trying to process the request. The error message should contain the response from the Authentication server containing additional information. If the error persists, please report the problem to our Bug Report support channel.",
  },
  "auth/invalid-argument": {
    errorCode: "auth/invalid-argument",
    description:
      "An invalid argument was provided to an Authentication method. The error message should contain additional information.",
  },
  "auth/invalid-claims": {
    errorCode: "auth/invalid-claims",
    description:
      "The custom claim attributes provided to setCustomUserClaims() are invalid.",
  },
  "auth/invalid-continue-uri": {
    errorCode: "auth/invalid-continue-uri",
    description: "The continue URL must be a valid URL string.",
  },
  "auth/invalid-creation-time": {
    errorCode: "auth/invalid-creation-time",
    description: "The creation time must be a valid UTC date string.",
  },
  "auth/invalid-credential": {
    errorCode: "auth/invalid-credential",
    description:
      "The credential used to authenticate the Admin SDKs cannot be used to perform the desired action. Certain Authentication methods such as createCustomToken() and verifyIdToken() require the SDK to be initialized with a certificate credential as opposed to a refresh token or Application Default credential. See Initialize the SDK for documentation on how to authenticate the Admin SDKs with a certificate credential.",
  },
  "auth/invalid-disabled-field": {
    errorCode: "auth/invalid-disabled-field",
    description:
      "The provided value for the disabled user property is invalid. It must be a boolean.",
  },
  "auth/invalid-display-name": {
    errorCode: "auth/invalid-display-name",
    description:
      "The provided value for the displayName user property is invalid. It must be a non-empty string.",
  },
  "auth/invalid-dynamic-link-domain": {
    errorCode: "auth/invalid-dynamic-link-domain",
    description:
      "The provided dynamic link domain is not configured or authorized for the current project.",
  },
  "auth/invalid-email": {
    errorCode: "auth/invalid-email",
    description:
      "The provided value for the email user property is invalid. It must be a string email address.",
  },
  "auth/invalid-email-verified": {
    errorCode: "auth/invalid-email-verified",
    description:
      "The provided value for the emailVerified user property is invalid. It must be a boolean.",
  },
  "auth/invalid-hash-algorithm": {
    errorCode: "auth/invalid-hash-algorithm",
    description:
      "The hash algorithm must match one of the strings in the list of supported algorithms.",
  },
  "auth/invalid-hash-block-size": {
    errorCode: "auth/invalid-hash-block-size",
    description: "The hash block size must be a valid number.",
  },
  "auth/invalid-hash-derived-key-length": {
    errorCode: "auth/invalid-hash-derived-key-length",
    description: "The hash derived key length must be a valid number.",
  },
  "auth/invalid-hash-key": {
    errorCode: "auth/invalid-hash-key",
    description: "The hash key must be a valid byte buffer.",
  },
  "auth/invalid-hash-memory-cost": {
    errorCode: "auth/invalid-hash-memory-cost",
    description: "The hash memory cost must be a valid number.",
  },
  "auth/invalid-hash-parallelization": {
    errorCode: "auth/invalid-hash-parallelization",
    description: "The hash parallelization must be a valid number.",
  },
  "auth/invalid-hash-rounds": {
    errorCode: "auth/invalid-hash-rounds",
    description: "The hash rounds must be a valid number.",
  },
  "auth/invalid-hash-salt-separator": {
    errorCode: "auth/invalid-hash-salt-separator",
    description:
      "The hashing algorithm salt separator field must be a valid byte buffer.",
  },
  "auth/invalid-id-token": {
    errorCode: "auth/invalid-id-token",
    description: "The provided ID token is not a valid Firebase ID token.",
  },
  "auth/invalid-last-sign-in-time": {
    errorCode: "auth/invalid-last-sign-in-time",
    description: "The last sign-in time must be a valid UTC date string.",
  },
  "auth/invalid-page-token": {
    errorCode: "auth/invalid-page-token",
    description:
      "The provided next page token in listUsers() is invalid. It must be a valid non-empty string.",
  },
  "auth/invalid-password": {
    errorCode: "auth/invalid-password",
    description:
      "The provided value for the password user property is invalid. It must be a string with at least six characters.",
  },
  "auth/invalid-password-hash": {
    errorCode: "auth/invalid-password-hash",
    description: "The password hash must be a valid byte buffer.",
  },
  "auth/invalid-password-salt": {
    errorCode: "auth/invalid-password-salt",
    description: "The password salt must be a valid byte buffer.",
  },
  "auth/invalid-phone-number": {
    errorCode: "auth/invalid-phone-number",
    description:
      "The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.",
  },
  "auth/invalid-photo-url": {
    errorCode: "auth/invalid-photo-url",
    description:
      "The provided value for the photoURL user property is invalid. It must be a string URL.",
  },
  "auth/invalid-provider-data": {
    errorCode: "auth/invalid-provider-data",
    description: "The providerData must be a valid array of UserInfo objects.",
  },
  "auth/invalid-provider-id": {
    errorCode: "auth/invalid-provider-id",
    description:
      "The providerId must be a valid supported provider identifier string.",
  },
  "auth/invalid-oauth-responsetype": {
    errorCode: "auth/invalid-oauth-responsetype",
    description: "Only exactly one OAuth responseType should be set to true.",
  },
  "auth/invalid-session-cookie-duration": {
    errorCode: "auth/invalid-session-cookie-duration",
    description:
      "The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.",
  },
  "auth/invalid-uid": {
    errorCode: "auth/invalid-uid",
    description:
      "The provided uid must be a non-empty string with at most 128 characters.",
  },
  "auth/invalid-user-import": {
    errorCode: "auth/invalid-user-import",
    description: "The user record to import is invalid.",
  },
  "auth/maximum-user-count-exceeded": {
    errorCode: "auth/maximum-user-count-exceeded",
    description: "The maximum allowed number of users to import has been exceeded.",
  },
  "auth/missing-android-pkg-name": {
    errorCode: "auth/missing-android-pkg-name",
    description:
      "An Android Package Name must be provided if the Android App is required to be installed.",
  },
  "auth/missing-continue-uri": {
    errorCode: "auth/missing-continue-uri",
    description: "A valid continue URL must be provided in the request.",
  },
  "auth/missing-hash-algorithm": {
    errorCode: "auth/missing-hash-algorithm",
    description:
      "Importing users with password hashes requires that the hashing algorithm and its parameters be provided.",
  },
  "auth/missing-ios-bundle-id": {
    errorCode: "auth/missing-ios-bundle-id",
    description: "The request is missing a Bundle ID.",
  },
  "auth/missing-uid": {
    errorCode: "auth/missing-uid",
    description: "A uid identifier is required for the current operation.",
  },
  "auth/missing-oauth-client-secret": {
    errorCode: "auth/missing-oauth-client-secret",
    description:
      "The OAuth configuration client secret is required to enable OIDC code flow.",
  },
  "auth/operation-not-allowed": {
    errorCode: "auth/operation-not-allowed",
    description:
      "The provided sign-in provider is disabled for your Firebase project. Enable it from the Sign-in Method section of the Firebase console.",
  },
  "auth/phone-number-already-exists": {
    errorCode: "auth/phone-number-already-exists",
    description:
      "The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.",
  },

  "auth/project-not-found": {
    errorCode: "auth/project-not-found",
    description:
      "No Firebase project was found for the credential used to initialize the Admin SDKs. Refer to Set up a Firebase project for documentation on how to generate a credential for your project and use it to authenticate the Admin SDKs.",
  },
  "auth/reserved-claims": {
    errorCode: "auth/reserved-claims",
    description:
      "One or more custom user claims provided to setCustomUserClaims() are reserved. For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should not be used as keys for custom claims.",
  },
  "auth/session-cookie-expired": {
    errorCode: "auth/session-cookie-expired",
    description: "The provided Firebase session cookie is expired.",
  },
  "auth/session-cookie-revoked": {
    errorCode: "auth/session-cookie-revoked",
    description: "The Firebase session cookie has been revoked.",
  },
  "auth/uid-already-exists": {
    errorCode: "auth/uid-already-exists",
    description:
      "The provided uid is already in use by an existing user. Each user must have a unique uid.",
  },
  "auth/unauthorized-continue-uri": {
    errorCode: "auth/unauthorized-continue-uri",
    description:
      "The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase Console.",
  },
  "auth/user-not-found": {
    errorCode: "auth/user-not-found",
    description:
      "There is no existing user record corresponding to the provided identifier.",
  },
};

const firebaseFirestoreError = {
  cancelled: {
    errorCode: "cancelled",
    description: "The operation was cancelled (typically by the caller).",
  },
  unknown: {
    errorCode: "unknown",
    description: "Unknown error or an error from a different error domain.",
  },
  "invalid-argument": {
    errorCode: "invalid-argument",
    description:
      "Client specified an invalid argument. Note that this differs from 'failed-precondition'. 'invalid-argument' indicates arguments that are problematic regardless of the state of the system (e.g. an invalid field name).",
  },
  "deadline-exceeded": {
    errorCode: "deadline-exceeded",
    description:
      "Deadline expired before operation could complete. For operations that change the state of the system, this error may be returned even if the operation has completed successfully. For example, a successful response from a server could have been delayed long enough for the deadline to expire.",
  },
  "not-found": {
    errorCode: "not-found",
    description: "Some requested document was not found.",
  },
  "already-exists": {
    errorCode: "already-exists",
    description: "Some document that we attempted to create already exists.",
  },
  "permission-denied": {
    errorCode: "permission-denied",
    description:
      "The caller does not have permission to execute the specified operation.",
  },
  "resource-exhausted": {
    errorCode: "resource-exhausted",
    description:
      "Some resource has been exhausted, perhaps a per-user quota, or perhaps the entire file system is out of space.",
  },
  "failed-precondition": {
    errorCode: "failed-precondition",
    description:
      "Operation was rejected because the system is not in a state required for the operation's execution.",
  },
  aborted: {
    errorCode: "aborted",
    description:
      "The operation was aborted, typically due to a concurrency issue like transaction aborts, etc.",
  },
  "out-of-range": {
    errorCode: "out-of-range",
    description: "Operation was attempted past the valid range.",
  },
  unimplemented: {
    errorCode: "unimplemented",
    description: "Operation is not implemented or not supported/enabled.",
  },
  internal: {
    errorCode: "internal",
    description:
      "Internal errors. Means some invariants expected by underlying system has been broken. If you see one of these errors, something is very broken.",
  },
  unavailable: {
    errorCode: "unavailable",
    description:
      "The service is currently unavailable. This is most likely a transient condition and may be corrected by retrying with a backoff.",
  },
  "data-loss": {
    errorCode: "data-loss",
    description: "Unrecoverable data loss or corruption.",
  },
  unauthenticated: {
    errorCode: "unauthenticated",
    description:
      "The request does not have valid authentication credentials for the operation.",
  },
};

const firebaseStorageError = {
  "storage/unknown": {
    errorCode: "storage/unknown",
    description: "An unknown error occurred.",
  },
  "storage/object-not-found": {
    errorCode: "storage/object-not-found",
    description: "No object exists at the desired reference.",
  },
  "storage/bucket-not-found": {
    errorCode: "storage/bucket-not-found",
    description: "No bucket is configured for Cloud Storage",
  },
  "storage/project-not-found": {
    errorCode: "storage/project-not-found",
    description: "No project is configured for Cloud Storage",
  },
  "storage/quota-exceeded": {
    errorCode: "storage/quota-exceeded",
    description:
      "Quota on your Cloud Storage bucket has been exceeded. If you're on the no-cost tier, upgrade to a paid plan. If you're on a paid plan, reach out to Firebase support.",
  },
  "storage/unauthenticated": {
    errorCode: "storage/unauthenticated",
    description: "User is unauthenticated, please authenticate and try again.",
  },
  "storage/unauthorized": {
    errorCode: "storage/unauthorized",
    description:
      "User is not authorized to perform the desired action, check your security rules to ensure they are correct.",
  },
  "storage/retry-limit-exceeded": {
    errorCode: "storage/retry-limit-exceeded",
    description:
      "The maximum time limit on an operation (upload, download, delete, etc.) has been exceeded. Try uploading again.",
  },
  "storage/invalid-checksum": {
    errorCode: "storage/invalid-checksum",
    description:
      "File on the client does not match the checksum of the file received by the server. Try uploading again.",
  },
  "storage/canceled": {
    errorCode: "storage/canceled",
    description: "User canceled the operation.",
  },
  "storage/invalid-event-name": {
    errorCode: "storage/invalid-event-name",
    description:
      "Invalid event name provided. Must be one of [`running`, `progress`, `pause`]",
  },
  "storage/invalid-url": {
    errorCode: "storage/invalid-url",
    description:
      "Invalid URL provided to refFromURL(). Must be of the form: gs://bucket/object or https://firebasestorage.googleapis.com/v0/b/bucket/o/object?token=<TOKEN>",
  },
  "storage/invalid-argument": {
    errorCode: "storage/invalid-argument",
    description:
      "The argument passed to put() must be `File`, `Blob`, or `UInt8` Array. The argument passed to putString() must be a raw, `Base64`, or `Base64URL` string.",
  },
  "storage/no-default-bucket": {
    errorCode: "storage/no-default-bucket",
    description: "No bucket has been set in your config's storageBucket property.",
  },
  "storage/cannot-slice-blob": {
    errorCode: "storage/cannot-slice-blob",
    description:
      "Commonly occurs when the local file has changed (deleted, saved again, etc.). Try uploading again after verifying that the file hasn't changed.",
  },
  "storage/server-file-wrong-size": {
    errorCode: "storage/server-file-wrong-size",
    description:
      "File on the client does not match the size of the file received by the server. Try uploading again.",
  },
};


export {fireBaseAuthErr , firebaseFirestoreError , firebaseStorageError}