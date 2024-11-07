import { Route, Routes } from "react-router-dom";
import { useGetPhonesQuery } from "./redux/service/phone";
import { Login } from "./components/Login/login";
import { Register } from "./components/registir/registir";
function App() {
  // const { data, isLoading } = useGetPhonesQuery();
  // console.log(data);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
