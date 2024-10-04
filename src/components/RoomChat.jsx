import React from "react";
import { AuthContext } from "../context/AuthContext";

const RoomChat = () => {
  const { message, user } = React.useContext(AuthContext);
  const messagesEndRef = React.useRef(null);

  // Function to scroll to the bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Use effect to scroll automatically when component renders or updates
  React.useEffect(() => {
    scrollToBottom();
  }, [message]);
  return (
    <div className="py-12 px-6 space-y-4 h-[70vh] no-scrollbar overflow-y-scroll">
      {message.map((chat) =>
        chat.sender == user.id ? (
          <div className="flex" key={chat.id}>
            <div className="flex ml-auto">
              <div>
                <div className="mr-4 p-4 rounded-b-full rounded-tr-none shadow-xl rounded-tl-full text-[#536dfe]">
                  <p>{chat.message}</p>
                </div>
                {chat.type === "image" && (
                  <img
                    src={chat.url}
                    alt={chat.message}
                    className="my-2 max-w-xs"
                  />
                )}
                {chat.type === "video" && (
                  <video controls className="my-2 max-w-xs">
                    <source src={chat.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
                {chat.type === "pdf" && (
                  <a
                    href={chat.url}
                    className="text-black underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View PDF
                  </a>
                )}
              </div>

              <img src="/icon/person.svg" alt="" />
            </div>
          </div>
        ) : (
          <div className="flex" key={chat.id}>
            <img src="/icon/person.svg" alt="" />
            <div>
              <div className="ml-4 p-4 text-white rounded-b-full rounded-tr-full rounded-tl-none bg-[#536dfe] shadow-custom-blue">
                <p>{chat.message}</p>
              </div>
              {chat.type === "image" && (
                <img
                  src={chat.url}
                  alt={chat.message}
                  className="my-2 max-w-xs p-4 bg-slate-200"
                />
              )}
              {chat.type === "video" && (
                <video controls className="my-2 max-w-xs">
                  <source src={chat.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              {chat.type === "pdf" && (
                <a
                  href={chat.url}
                  className="text-black underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  View PDF
                </a>
              )}
            </div>
          </div>
        )
      )}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default RoomChat;
