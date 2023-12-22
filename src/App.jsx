import { ConfigProvider } from "antd";
import Home from "./pages/Home";
import "@fontsource/source-sans-pro/400.css";
import "@fontsource/source-sans-pro/600.css";
import "@fontsource/source-sans-pro/700.css";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorTextBase: "#61481C",
          colorLinkHover: "#BF9742",
          colorLinkActive: "#61481C",
          colorSplit: "#C9C9C9",
        },
        components: {
          Layout: {
            headerBg: "#FFF",
            headerHeight: 45,
            bodyBg: "#FFF",
            footerBg: "#A47E3B",
            footerPadding: "24px 0px 0px",
          },
          Typography: {
            colorLink: "#000",
          },
          Input: {
            addonBg: "#E6B325",
          },
          Menu: {
            horizontalItemSelectedColor: "#E6B325",
            activeBarHeight: 0,
            horizontalItemHoverColor: "#FFF",
            itemHoverColor: "#BF9742",
          },
        },
      }}
    >
      <Home />
    </ConfigProvider>
  );
};

export default App;
