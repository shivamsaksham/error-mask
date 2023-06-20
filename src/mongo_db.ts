interface MongoError {
  [key: string]: {
    message: string
  }
}

const mongoDbErrorsList: MongoError = {
  1: {
    message: "An internal error occurred.",
  },
  2: {
    message: "The provided value is invalid.",
  },
  3: {
    message: "The requested key does not exist.",
  },
  4: {
    message: "Failed to parse the data.",
  },
  5: {
    message: "Cannot mutate the object.",
  },
  6: {
    message: "User not found.",
  },
  7: {
    message: "Unable to reach the host.",
  },
  8: {
    message: "Duplicate key found.",
  },
  9: {
    message: "Unauthorized access.",
  },
  10: {
    message: "The requested resource was not found.",
  },
  11: {
    message: "The primary resource is not writable.",
  },
  12: {
    message: "Exceeded the time limit for the operation.",
  },
};

export const getMongoError = (error_code: string) => {
  const msg = mongoDbErrorsList[error_code]
  if (msg) {
    return msg
  } else {
    return fixNotFound(error_code)
  }
}

function fixNotFound(error_code: string) {
  try {
    let err = error_code.split("/")[1]
    err = err?.replace("-", " ")
    err = err?.toUpperCase()


    return { message: err }
  } catch (error) {
    return { message : error_code }
  }
}