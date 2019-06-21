export const MD_HANDLE_CHANGE = "MD_HANDLE_CHANGE";

export const SubmitMDHandleChange = dispatch => event => {
  console.log(event);

  dispatch(MDHandleChange(event));
};

export const MDHandleChange = event => ({
  type: MD_HANDLE_CHANGE,
  payload: event.target.value // The text of the textarea.
});
