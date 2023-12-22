import { Col, ConfigProvider, Row, Typography } from "antd";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";
import NewsCarousel from "./NewsCarousel";
import About from "./About";

const News = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#FFF",
        },
        components: {
          Typography: {
            colorLink: "#E6B325",
          },
        },
      }}
    >
      <Row justify={"center"} style={{ backgroundColor: "#61481C", padding: "50px 0 50px" }} gutter={[0, 20]}>
        <Col xs={20} sm={20} md={20} lg={17} xl={14}>
          <About />
        </Col>
        <Col span={14}>
          <Title level={3}>Terkini</Title>
          <Typography.Text>
            Dapatkan pembaruan terkini mengenai <Link>Berita, </Link>
            <Link>Pengumuman, </Link>
            <Link>Keputusan, </Link>
            <Link> dan Pengumuman </Link>
            dari Mahkamah Agung
          </Typography.Text>
        </Col>
        <Col span={12}>
          <NewsCarousel />
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default News;
