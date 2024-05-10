import { useState } from "react";
import Avatar from "./Avatar";

function App() {
  const obj = {
    src: "https://www.w3schools.com/howto/img_avatar.png",
    height: "100px",
    width: "100px",
  };

  const [todos] = useState(['todo1' ,'todo2'])
  return (
    <>
    <Avatar {...obj}></Avatar>
      <Avatar
        src="https://www.w3schools.com/howto/img_avatar.png"
        height="100px"
        width="100px"
      ></Avatar>
      <Avatar
        src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-14.jpg"
        height="100px"
        width="100px"
      ></Avatar>
      <Avatar
        src="https://www.w3schools.com/howto/img_avatar2.png"
        height="100px"
        width="100px"
      >
        <span>Child tag</span>
      </Avatar>

      {todos.map((v, idx) => <li key = {idx}>{v}</li> )}
    </>
  );
}

export default App;
