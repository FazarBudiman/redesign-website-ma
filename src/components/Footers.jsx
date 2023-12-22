import { Col, ConfigProvider, Divider, Flex, Row, Space, Typography } from "antd";
import { Footer } from "antd/es/layout/layout";
import logo from "../assets/images/logo-ma.png";
import Title from "antd/es/typography/Title";

const Footers = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#FFF",
        },
      }}
    >
      <Footer>
        <Row justify={"center"}>
          <Col span={14}>
            <Space size="middle">
              <img src={logo} alt="logo-ma" />
              <Title level={5}>
                Mahkamah Agung <br />
                Republik Indonesia
              </Title>
            </Space>
            <Divider />
          </Col>
        </Row>

        <Row>
          <Col></Col>
          <Col span={24}>
            <Flex align={"center"} justify={"space-evenly"} style={{ width: "100%" }}>
              <Typography.Text>
                Jl. Medan Merdeka Utara No. 9-13 <br />
                Jakarta Pusat - DKI Jakarta 10110
              </Typography.Text>
              <Space size="middle">
                <Typography.Text>
                  <strong>Kontak</strong>
                  <br />
                  Email | Telepon
                </Typography.Text>
                <Typography.Text>
                  <strong>Media</strong>
                  <br />
                  Youtube
                </Typography.Text>
              </Space>
            </Flex>
          </Col>
        </Row>

        <Row justify={"center"} style={{ backgroundColor: "#61481C", padding: "10px ", color: "#FFF", marginTop: 30 }}>
          <Col>
            <Typography.Text>Mahkamah Agung Republik Indonesia 2023</Typography.Text>
          </Col>
        </Row>
      </Footer>
    </ConfigProvider>
  );
};

export default Footers;
