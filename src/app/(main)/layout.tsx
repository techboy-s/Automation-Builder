import InfoBar from "../components/infobar";
import Sidebar from "../components/sidebar";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">
        {props.children}
        <InfoBar />
      </div>
    </div>
  );
};

export default Layout;
