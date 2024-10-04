import React from "react";
export const AuthContext = React.createContext({});
export const AuthContextProvider = ({ children }) => {
  const bash_url = "../utils/chat.json";
  const [dataUser, setDataUser] = React.useState({
    name: "Agent A",
    email: "agent@mail.com",
  });
  const [user, setUser] = React.useState(null);
  const [mainData, setMainData] = React.useState(null);
  const [message, setMessage] = React.useState([]);
  async function getMainData() {
    const response = await fetch("/chat.json");
    const data = await response.json();
    // if (data) {
    setMainData(data?.results[0]);
    setMessage(data?.results[0].comments);
  }
  React.useEffect(() => {
    const userStorage = localStorage.getItem("user");
    const userParse = userStorage ? JSON.parse(userStorage) : null;
    userParse ? setUser(userParse) : null;
    getMainData();
  }, []);

  function handleLoginChange(name, value) {
    setDataUser({
      ...dataUser,
      [name]: value,
    });
  }
  const [newMessage, setNewMessage] = React.useState({
    id: new Date(),
    type: "text",
    message: "",
    sender: user?.id,
  });
  function sendMessage(e, newMessage) {
    e.preventDefault();
    newMessage.message == null || newMessage.message == ""
      ? null
      : setMessage([...message, newMessage]);
    setNewMessage({
      id: new Date(),
      type: "text",
      message: "",
      sender: user?.id,
    });
  }
  function handleLogin(e) {
    e.preventDefault();
    const getUser = mainData.room.participant.filter(
      (data) => data.id == dataUser.email && data.name == dataUser.name
    );
    if (getUser.length > 0) {
      setUser(getUser[0]);
      const userJson = JSON.stringify(getUser[0]);
      localStorage.setItem("user", userJson);
    } else {
      console.log("email atau username salah");
    }
  }
  function logout() {
    if (confirm("anda yakin ingin keluar?")) {
      localStorage.removeItem("user");
      setUser(null);
    }
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        logout,
        mainData,
        dataUser,
        setDataUser,
        message,
        newMessage,
        setNewMessage,
        sendMessage,
        handleLogin,
        handleLoginChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
