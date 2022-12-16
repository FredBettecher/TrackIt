import { AppStyle } from "./AppStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <AppStyle>
        <Routes>
          <Route path="/" element={<Homepage />}/>
        </Routes>
      </AppStyle>
    </BrowserRouter>
  );
}

export default App;
