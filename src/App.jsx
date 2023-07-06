import Form from "./Form";
import ColorList from "./ColorList";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
  const [colors, setColors] = useState(new Values("#aaa").all(10));
  return (
    <main>
      <Form />
      <ColorList colors={colors} />
      <ToastContainer />
      {toast.error("Error")}
    </main>
  );
};
export default App;