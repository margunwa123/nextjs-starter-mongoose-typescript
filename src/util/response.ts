type responseValue = "Success" | "Failure" | "Pending";

interface IResponse {
  data: object;
  value: responseValue;
  message: string;
}

const createSuccessMessage = ({
  data = {},
  message = "Operation is successful",
}): IResponse => {
  return {
    data,
    value: "Success",
    message,
  };
};
const createFailureMessage = ({
  data = {},
  message = "Operation failed",
}): IResponse => {
  return {
    data,
    value: "Failure",
    message,
  };
};

export { createSuccessMessage, createFailureMessage };
