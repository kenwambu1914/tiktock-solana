import MainView from "../Components/MainView";

let connected = true;
export default function Home() {
  return (
    <div className="app">
      {connected ? (
        <MainView />
      ) : (
        <div className="loginContainer">
          <div className="loginTitle">Log in to Tiktok</div>
          <div className="loginSubtitle">
            Manage your account, check notifications, comment on videos, more
          </div>
        </div>
      )}
    </div>
  );
}
