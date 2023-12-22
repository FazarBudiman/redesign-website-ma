import { Layout } from "antd";
import Headers from "../components/Headers";
import Hero from "../components/Hero";
import Footers from "../components/Footers";
import MenuBottom from "../components/MenuBottom";
import AppEksternal from "../components/AppEksternal";
import AppInternal from "../components/AppInternal";
import News from "../components/News";

const Home = () => {
  return (
    <Layout>
      <Headers />
      <Hero />
      <News />
      <AppInternal />
      <AppEksternal />
      <MenuBottom />
      <Footers />
    </Layout>
  );
};

export default Home;
