import { Col, Input, Menu, Row, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import logo from "../assets/images/logo-ma.png";
import { IoSearch } from "react-icons/io5";
import Link from "antd/es/typography/Link";
import "../assets/styles/headers.css";

const itemMenuNav = [
  {
    label: <a>Beranda</a>,
    key: "beranda",
  },
  {
    label: <a>Perkara</a>,
    key: "perkara",
  },
  {
    label: <a>Berita</a>,
    key: "berita",
  },
  {
    label: <a>Pengumuman</a>,
    key: "pengumuman",
  },
  {
    label: <a>Kebijakan</a>,
    key: "kebijakan",
  },
  {
    label: <a>Artikel</a>,
    key: "artikel",
  },
  {
    label: <a>Agenda</a>,
    key: "agenda",
  },
];

const Headers = () => {
  return (
    <>
      <Row align={"middle"} justify={"space-evenly"} style={{ marginTop: "8vh" }}>
        <Col>
          <img src={logo} alt="logo-ma" />
        </Col>
        <Col>
          <Space>
            <Input addonBefore={<IoSearch color="#000" size={16} />} placeholder="Cari kata kunci" />
            <Link>English</Link>
          </Space>
        </Col>
      </Row>

      <Header className="headers">
        <Menu mode="horizontal" items={itemMenuNav} style={{ fontWeight: 700, display: "flex", justifyContent: "center", gap: 15 }} />
      </Header>
    </>
  );
};

export default Headers;
