import { BrowserRouter, Routes, Route } from "react-router-dom";


import Feed from "../pages/Feed";
import CreaatePost from "../pages/CreaatePost";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path='/create-post' element={<CreaatePost />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
