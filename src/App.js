import "./App.css";
import InputForm from "./InputForm";
import { useId } from "react";

function App() {
  const strId = useId();

  return (
    <div className="App">
      <InputForm id={strId + "first name"} label="First Name" type="text" />
      <InputForm id={strId + "last name"} label="Last Name" type="text" />
      <InputForm id={strId + "email"} label="Email" type="email" />
    </div>
  );
}

export default App;

// Solution for task #3

// function App() {
//   return (
//     <div className="App">
//       <InputForm id={"first name"} label="First Name" type="text" />
//       <InputForm id={"last name"} label="Last Name" type="text" />
//       <InputForm id={"email"} label="Email" type="email" />
//     </div>
//   );
// }

// export default App;
