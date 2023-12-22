import { Col, ConfigProvider, Row, Space } from "antd";

import Link from "antd/es/typography/Link";
import Title from "antd/es/typography/Title";

const MenuBottom = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorText: "#000",
          fontWeightStrong: 700,
        },
        components: {
          Typography: {
            colorLink: "#61481C",
          },
        },
      }}
    >
      <Row style={{ padding: "40px 0px", backgroundColor: "#DFE1E2" }}>
        <Col offset={4} span={5}>
          <Space direction="vertical">
            <Title level={5}>Kesekretariatan</Title>
            <Space size="middle" align="start">
              <Space direction="vertical">
                <Link>Kepaniteraan</Link>
                <Link>
                  Badan Urusan
                  <br /> Administrasi
                </Link>
                <Link>
                  Badan Penelitian <br /> Pengembangan <br /> Pendidikan dan
                  <br /> Pelatihan Hukum <br /> dan Peradilan
                </Link>
              </Space>
              <Space direction="vertical">
                <Link>Badan Pengawasan</Link>
                <Link>
                  Badan Peradilan <br /> Agama
                </Link>
                <Link>
                  Badan Peradilan <br /> Umum
                </Link>
                <Link>
                  Badan Peradilan <br /> Militer dan Tata <br /> Usaha Negara
                </Link>
              </Space>
            </Space>
          </Space>
        </Col>
        <Col span={3}>
          <Space direction="vertical">
            <Title level={5} l>
              Profil
            </Title>
            <Space direction="vertical">
              <Link>
                Tugas Pokok <br /> dan Fungsi
              </Link>
              <Link>
                Lambang <br /> Mahkamah Agung
              </Link>
              <Link>Struktur Organisasi</Link>
              <Link>Badan dan Peradilan</Link>
            </Space>
          </Space>
        </Col>
        <Col span={4}>
          <Space direction="vertical">
            <Title level={5} l>
              Pembaruan Peradilan
            </Title>
            <Space direction="vertical">
              <Link>Cetak Biru MA</Link>
              <Link>Laporan Tahunan</Link>
              <Link>Kemudahan Berusaha</Link>
              <Link>Laporan Keuangan</Link>
            </Space>
          </Space>
        </Col>
        <Col span={3}>
          <Space direction="vertical">
            <Title level={5} l>
              Layanan Informasi
            </Title>
            <Space direction="vertical">
              <Link>
                Media Informasi <br />
                dan Pengaduan
              </Link>
              <Link>Rapat Kerja Nasional</Link>
              <Link>Mediasi di Pengadilan</Link>
              <Link>Info Perkara Meja Informasi</Link>
            </Space>
          </Space>
        </Col>
        <Col span={2}>
          <Space direction="vertical">
            <Title level={5} l>
              Pustaka
            </Title>
            <Space direction="vertical">
              <Link>
                Majalah
                <br /> Mahkamah Agung
              </Link>
            </Space>
          </Space>
        </Col>
      </Row>
    </ConfigProvider>
  );
};

export default MenuBottom;
