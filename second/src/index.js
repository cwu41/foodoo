import React from "react";
import ReactDOM from "react-dom";
import { Container, Header, List } from "semantic-ui-react";
import Example from "./example";
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyC6fiemjMHEvvHG37NeorbUsZX1eBumA18",
  authDomain: "foodoo-project.firebaseapp.com",
  databaseURL: "https://foodoo-project.firebaseio.com",
  projectId: "foodoo-project",
  storageBucket: "foodoo-project.appspot.com",
  messagingSenderId: "256411486158",
  appId: "1:256411486158:web:eb4ddbd4b971d27687cd9f",
  measurementId: "G-QBBT57PHNX"
};
firebase.initializeApp(firebaseConfig);

const App = ({ children }) => (
  <Container style={{ margin: 20 }}>
    <Header as="h1">FooDoo</Header>
    <Header as="h2">
      Select your ingredients!
    </Header>

    {children}
  </Container>
);

// TODO: Switch to https://github.com/palmerhq/the-platform#stylesheet when it will be stable
const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

ReactDOM.render(
  <App>
    <Example />
  </App>,
  document.getElementById("root")
);