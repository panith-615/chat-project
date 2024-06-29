import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PollOptionList } from "./pollOption/PollOptionList";
import { PollOptionCreate } from "./pollOption/PollOptionCreate";
import { PollOptionEdit } from "./pollOption/PollOptionEdit";
import { PollOptionShow } from "./pollOption/PollOptionShow";
import { RoomList } from "./room/RoomList";
import { RoomCreate } from "./room/RoomCreate";
import { RoomEdit } from "./room/RoomEdit";
import { RoomShow } from "./room/RoomShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { BreakoutRoomList } from "./breakoutRoom/BreakoutRoomList";
import { BreakoutRoomCreate } from "./breakoutRoom/BreakoutRoomCreate";
import { BreakoutRoomEdit } from "./breakoutRoom/BreakoutRoomEdit";
import { BreakoutRoomShow } from "./breakoutRoom/BreakoutRoomShow";
import { PollList } from "./poll/PollList";
import { PollCreate } from "./poll/PollCreate";
import { PollEdit } from "./poll/PollEdit";
import { PollShow } from "./poll/PollShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"VideoChatService-1"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="PollOption"
          list={PollOptionList}
          edit={PollOptionEdit}
          create={PollOptionCreate}
          show={PollOptionShow}
        />
        <Resource
          name="Room"
          list={RoomList}
          edit={RoomEdit}
          create={RoomCreate}
          show={RoomShow}
        />
        <Resource
          name="Message"
          list={MessageList}
          edit={MessageEdit}
          create={MessageCreate}
          show={MessageShow}
        />
        <Resource
          name="BreakoutRoom"
          list={BreakoutRoomList}
          edit={BreakoutRoomEdit}
          create={BreakoutRoomCreate}
          show={BreakoutRoomShow}
        />
        <Resource
          name="Poll"
          list={PollList}
          edit={PollEdit}
          create={PollCreate}
          show={PollShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
