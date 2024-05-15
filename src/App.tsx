import "./App.css";
import userRouter from "./routers/UserRouter";
import { Route, Routes, useRoutes } from "react-router-dom";

function App() {
  const userRouting = useRoutes(userRouter);
  return (
    <div>
      <Routes>
        <Route path="/*" element={userRouting} />
      </Routes>
    </div>
  );
}

export default App;
