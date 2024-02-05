import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialMailState = {
  inboxMailArr: [],
  sentEmailArr: [],
};
const MailSlice = createSlice({
  name: "mailSlice",
  initialState: initialMailState,
  reducers: {
    inboxMail(state, action) {
      // state.inboxMailArr.push(action.payload);
      state.inboxMailArr = action.payload;
    },
    sentMail(state, action) {
      // state.sentEmailArr.push(action.payload);
      state.sentEmailArr = action.payload;
    },
  },
});
export default MailSlice.reducer;
export const { sentMail, inboxMail } = MailSlice.actions;

function cleanGmailAddress(emailid) {
  if (emailid) {
    return emailid.replaceAll(`@`, "").replaceAll(".", "");
  }
}
export const sentMailToFirebase = (action) => {
  // console.log("Action before posting ", action);
  let email = localStorage.getItem("email") || false;
  let cleanEmailForSent = cleanGmailAddress(email);
  let cleanEmailForInbox = cleanGmailAddress(action.to);
  return async function sentData() {
    let url = `https://sharpener-assignment-bbf12-default-rtdb.firebaseio.com`;

    try {
      // for user who sent the data
      await axios.post(
        // const responseForSent = await axios.post(
        `${url}/sent/${cleanEmailForSent}.json`,
        action
      );
      // const data1 = await responseForSent.data;
      // console.log("Response from sentMailToFirebase ", data1);
      //   for reciever in inbox
      await axios.post(
      // const responseForInbox = await axios.post(
        `${url}/inbox/${cleanEmailForInbox}.json`,
        action
      );
      // const data2 = await responseForInbox.data;
      // console.log("Response from sentMailToFirebase ", data2);
    } catch (error) {
      console.log("Error in postData", error);

      if (error.response) {
        console.log("Server responded with a non-2xx status");
        console.log("Response data:", error.response.data);
        console.log("HTTP status code:", error.response.status);
        console.log("Headers:", error.response.headers);
      } else if (error.request) {
        console.log("Request was made but no response was received");
        console.log("Request:", error.request);
      } else {
        console.log("Error during request setup:", error.message);
      }
      console.log("Error config:", error.config);
    }
  };
};

export const getSentMailFromFirebase = () => {
  let email = localStorage.getItem("email") || false;
  let cleanEmailForSent = cleanGmailAddress(email);

  return async function sentData(dispatch) {
    let url = `https://sharpener-assignment-bbf12-default-rtdb.firebaseio.com`;

    try {
      // get back sent user data
      const responseForSent = await axios.get(`${url}/sent/${cleanEmailForSent}.json`);
      const data1 = await responseForSent.data;

      const emailArrayForSent = [];
      for (const key in data1) {
        emailArrayForSent.push({ id: key, ...data1[key] });
      }      
      emailArrayForSent.sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp));
      dispatch(sentMail(emailArrayForSent));
      

      const responseForInbox = await axios.get(
        `${url}/inbox/${cleanEmailForSent}.json`
      );
      const data2 = await responseForInbox.data;
      
      const emailArray = [];
      for (const key in data2) {
        emailArray.push({ id: key, ...data2[key] });
      }

      
      emailArray.sort((a, b) => new Date(b.timeStamp) - new Date(a.timeStamp));
      

      dispatch(inboxMail(emailArray));
      
    } catch (error) {
      console.log("Error in postData", error);
      if (error.response) {
        console.log("Server responded with a non-2xx status");
        console.log("Response data:", error.response.data);
        console.log("HTTP status code:", error.response.status);
        console.log("Headers:", error.response.headers);
      } else if (error.request) {
        console.log("Request was made but no response was received");
        console.log("Request:", error.request);
      } else {
        console.log("Error during request setup:", error.message);
      }
      console.log("Error config:", error.config);
    }
  };
};
export const deleteDataFromFirebase = (action,type) => {
  console.log("Action in delete ",action,type);
  let email =  localStorage.getItem('email') || false;
  
 
  let cleanEmail = cleanGmailAddress(email);
  console.log("clean email ",cleanEmail);
  return async function delHandler() {
    if (!action) {
      console.error("Action object must have an 'id' property for deletion.");
      return;
    }
    let url = `https://sharpener-assignment-bbf12-default-rtdb.firebaseio.com/${type}/${cleanEmail}/${action}.json`;

    try {
      const responseInDeleteHandler = await axios.delete(url);
      console.log("Data",responseInDeleteHandler);
    
    } catch (error) {
      console.log("Error ", error);
    }
  };
};