import Chai from "./Chai";

function App() {
  const username = 'chai aur code'

  return (
    <>
      <Chai /> 
      <h1>Evaluated expression : {username}</h1>
      <p>Caant write if username because evaluated expression</p>
    </>
  );
}

export default App;
