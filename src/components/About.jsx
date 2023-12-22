import { Col, ConfigProvider, Flex, Row, Space } from "antd";
import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";

const About = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#1B1B1B",
        },
        components: {
          Typography: {
            colorLink: "#1B1B1B",
          },
        },
      }}
    >
      <Row justify={"center"} style={{ backgroundColor: "#FFF", position: "relative", top: "-6em", zIndex: 2, padding: "15px 15px 40px" }}>
        <Col span={24}>
          <Title level={3}>Tentang Mahkamah Agung</Title>
        </Col>
        <Col span={24}>
          <Space align="center" size={"large"} style={{ width: "100%", marginTop: "10px" }}>
            <Flex style={{ borderLeft: "3px solid #E6B325", padding: 10, fontSize: 12 }}>
              <Link>Mahkamah Agung</Link>
            </Flex>
            <Flex style={{ borderLeft: "3px solid #E6B325", padding: 10, fontSize: 12 }}>
              <Link>Tugas Pokok dan Fungsi</Link>
            </Flex>
            <Flex style={{ borderLeft: "3px solid #E6B325", padding: 10, fontSize: 12 }}>
              <Link>Struktur dan Organisasi</Link>
            </Flex>
            <Flex style={{ borderLeft: "3px solid #E6B325", padding: 10, fontSize: 12 }}>
              <Link>Media Informasi dan Pengaduan</Link>
            </Flex>
          </Space>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default About;
