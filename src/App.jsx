import React from "react";
import ListUser from "./components/ListUser";
import NavList from "./components/NavList";
import NavRoomChat from "./components/NavRoomChat";
import RoomChat from "./components/RoomChat";
import WriteMessage from "./components/WriteMessage";
import { AuthContext } from "./context/AuthContext";
import "./index.css";
import LandingPage from "./pages/landing-pages";
function App() {
  const [click, setClick] = React.useState(false);
  const { user } = React.useContext(AuthContext);
  return (
    <>
      {user == null ? (
        <LandingPage />
      ) : (
        <div className="flex h-screen">
          <NavList />
          <ListUser click={click} setClick={setClick} />
          <div
            className={` ${
              click ? "block" : "hidden sm:block"
            } relative w-full sm:w-2/3`}
          >
            <NavRoomChat click={click} setClick={setClick} />
            <RoomChat />
            <WriteMessage />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
