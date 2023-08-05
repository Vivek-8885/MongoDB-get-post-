import "./App.css";
import TextForm from "./components/TextForm";
import Navbar from "./components/Navbar";
import Background from "./Background";
function App() {
  return (
    <>
      {/* props means here we need to send the required data to navbar */}
      {/* where the data will send to the function in the argument as props and the elements are */}
      {/* accessed by using props.title or anything that we declare below */}
      {/* for better understanding see navbar.js file */}
      <Navbar title="Develop" About="New About"></Navbar>
      <Background> </Background>
      {/* if we use default then we dont pass any argument so nav bar remains empty as below
<Navbar></Navbar> */}
      <div className="container my-3" >
        <TextForm heading="Lower Case <<-->> Upper Case: "></TextForm>
      </div>
    </>
  );
}

export default App;