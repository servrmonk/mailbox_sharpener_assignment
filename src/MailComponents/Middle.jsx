import {  ListItem, Paper } from "@mui/material";
import React from "react";
import { getSentMailFromFirebase } from "../Redux/MailSlice";
import { useDispatch } from "react-redux";

export default function Middle() {
  const dispatch = useDispatch()
  
  dispatch(getSentMailFromFirebase())
  return (
    <div style={{ position:'static',marginLeft: "2.5vw", width: "75vw" }}>
      {/* here i m using paper component from material ui */}
      <img
        style={{
          width: "1.5vw",
          height: "1.5vw",
          marginLeft: "1.5vw",
          marginTop: "2vw",
          paddingTop:'6vw'
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
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid #EFEFEF",
          borderTop: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid #EFEFEF",
          borderTop: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid #EFEFEF",
          borderTop: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid #EFEFEF",
          borderTop: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid #EFEFEF",
          borderTop: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid #EFEFEF",
          borderTop: "1px solid #EFEFEF",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>

      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      <Paper
        elevation={0}
        style={{
          backgroundColor: "#F8FCFF",
          borderBottom: "1px solid lightgrey",
          borderTop: "1px solid lightgrey",
        }}
      >
        <ListItem>
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
            kdielsiel
            <span style={{ marginLeft: "12vw", fontWeight: "100" }}>
              kdoi,kdie
            </span>
          </span>
        </ListItem>
      </Paper>
      {/* Terms , Privacy, Program Policies  */}
      <h6 style={{fontWeight:'400',marginLeft:'28vw'}}>Terms . Privacy . Program Policies</h6>
    </div>
  );
}
