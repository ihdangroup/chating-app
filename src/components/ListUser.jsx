import React from "react";
import { AuthContext } from "../context/AuthContext";
// import { users } from "../../utils";

const ListUser = ({ click, setClick }) => {
  const { mainData } = React.useContext(AuthContext);
  return (
    <div
      className={` ${
        click ? "hidden sm:block" : "block"
      } bg-[#536dfe] w-full space-y-4 sm:w-1/3`}
    >
      <nav className="py-4 flex justify-between items-center text-white border-b-2 border-white px-8">
        <h2 className="text-2xl font-bold">Chat Room</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-clock-history"
          viewBox="0 0 16 16"
        >
          <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7 7 0 0 0-.985-.299l.219-.976q.576.129 1.126.342zm1.37.71a7 7 0 0 0-.439-.27l.493-.87a8 8 0 0 1 .979.654l-.615.789a7 7 0 0 0-.418-.302zm1.834 1.79a7 7 0 0 0-.653-.796l.724-.69q.406.429.747.91zm.744 1.352a7 7 0 0 0-.214-.468l.893-.45a8 8 0 0 1 .45 1.088l-.95.313a7 7 0 0 0-.179-.483m.53 2.507a7 7 0 0 0-.1-1.025l.985-.17q.1.58.116 1.17zm-.131 1.538q.05-.254.081-.51l.993.123a8 8 0 0 1-.23 1.155l-.964-.267q.069-.247.12-.501m-.952 2.379q.276-.436.486-.908l.914.405q-.24.54-.555 1.038zm-.964 1.205q.183-.183.35-.378l.758.653a8 8 0 0 1-.401.432z" />
          <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
          <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
        </svg>
      </nav>
      <div className="w-full p-8 space-y-4">
        {mainData
          ? mainData.room.participant.map((user) => (
              <div
                onClick={() => setClick(!click)}
                key={user.id}
                className="flex cursor-pointer justify-between items-center bg-white p-4 rounded-md "
              >
                <img src="/icon/person.svg" alt="" />
                <div>
                  <h5 className="font-semibold">{user.name}</h5>
                  <p className="text-sm">{user.id}</p>
                </div>
                <div>
                  <p>03/10/2024</p>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default ListUser;
