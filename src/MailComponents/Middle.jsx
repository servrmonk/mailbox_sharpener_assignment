import { ListItem, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getSentMailFromFirebase } from "../Redux/MailSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Middle() {
  const dispatch = useDispatch();

  const { inboxMailArr: mailArr } = useSelector((state) => state.mailS);
  const [arrForUi,setArrForUi] = useState([]);

  useEffect(() => {
    dispatch(getSentMailFromFirebase());
    console.log("Data fetched");
  }, [dispatch]);

  console.log("Value of mailArr is ", mailArr);
  useEffect(()=>{
    setArrForUi(mailArr)
  },[mailArr])
  console.log("Mailforui ",arrForUi);

  return (
    <div style={{ position: "static", marginLeft: "2.5vw", width: "75vw" }}>
      <img
        style={{
          width: "1.5vw",
          height: "1.5vw",
          marginLeft: "1.5vw",
          marginTop: "2vw",
          paddingTop: "6vw",
        }}
        src="https://tse3.mm.bing.net/th?id=OIP.NJ0h3cKSkS99y32rjkZ5ewHaHa&pid=Api&P=0&h=180"
        alt=""
      />
      <Paper
        elevation={0}
        style={{
          borderBottom: "1px solid #EFEFEF",
          borderTop: "1px solid #EFEFEF",
          marginTop: "1.5vw",
          backgroundColor: "#F8FCFF",
        }}
      >
        {arrForUi?.map((user) => (
        <ListItem key={user.id}>
        {/* <ListItem> */}
          <img
            style={{ width: "1.4vw", height: "1.4vw" }}
            src="https://tse2.mm.bing.net/th?id=OIP.z1oe7RLr5Sv6yaCszUf7tQHaHa&pid=Api&P=0&h=180"
            alt="star_image"
          />
          <span
            style={{
              fontSize: "1.3vw",
              marginLeft: "1.2vw",
              fontWeight: "500",
            }}
          >
            {user.subject} 
            {/* kdiel */}
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              {user.msg}
              {/* msg */}
            </span>
          </span>
        </ListItem>
        ))}
      </Paper>

      {/* Terms , Privacy, Program Policies  */}
      <h6 style={{ fontWeight: "400", marginLeft: "28vw" }}>
        Terms . Privacy . Program Policies
      </h6>
    </div>
  );
}
