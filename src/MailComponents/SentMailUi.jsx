import { ListItem, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { deleteDataFromFirebase, getSentMailFromFirebase } from "../Redux/MailSlice";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';

export default function SentMailUi() {
  const dispatch = useDispatch();

  const { sentEmailArr: mailArr } = useSelector((state) => state.mailS);
  const [arrForUi, setArrForUi] = useState([]);

  useEffect(() => {
    dispatch(getSentMailFromFirebase());
  }, [dispatch]);

  useEffect(() => {
    setArrForUi(mailArr);
  }, [mailArr]);

  const deleteHandler = (user) => {
    console.log("Inside deleteHandler");
    console.log("id ", user);
    
    dispatch(deleteDataFromFirebase(user.id,"sent"))
    setArrForUi((prevExpenses) => {
      const updatedExpenses = prevExpenses.filter(
        (ex) => ex.id !== user.id
      );

      return updatedExpenses;
    });
  }

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
          <ListItem  key={user.id} style={{ display: "flex",justifyContent: "space-between" }}>
            <div style={{ display: "flex" }}>
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
                   cursor:'pointer'
                }}
              >
                {user.subject}
                <span style={{ marginLeft: "1.2vw", fontWeight: "100", cursor:'pointer' }}>
                  {user.msg}
                </span>
              </span>
            </div>
            <span style={{ marginLeft: "1.2vw", fontWeight: "100" }}>
              {new Date(user.timeStamp).toISOString().split("T")[0]}
            </span>
            <DeleteIcon
              onClick={() => deleteHandler(user)}
              style={{ cursor: "pointer" }}
            />
          

          
          </ListItem>
        ))}
      </Paper>

      {/* Terms, Privacy, Program Policies */}
      <h6 style={{ fontWeight: "400", marginLeft: "28vw" }}>
        Terms . Privacy . Program Policies
      </h6>
    </div>
  );
}
