import { MD_HANDLE_CHANGE } from "./markdownActions";

const initialState = {
  markdownText:
    '# Heading \n\n## Sub-Heading \n\n[Link](example.com) \n\n`This is code` \n\n```javascript\nvar s = "Test";\n``` \n\n- List item\n-Item 2 \n\n\n > Blockquote. \n\n Logo: ![Alt](https://images.shazam.com/coverart/t407848600-b1455499506_s400.jpg "Title") \n\n **bolded**'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MD_HANDLE_CHANGE:
      return {
        ...state,
        markdownText: action.payload
      };
    default:
      return state;
  }
};
