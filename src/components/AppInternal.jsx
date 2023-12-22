import { Icon } from "@iconify/react";
import { Col, Flex, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";

const AppInternal = () => {
  const DataAppsInternal = [
    {
      label: "PENGADUAN",
      icon: "emojione-monotone:speaking-head",
      fontSize: 60,
    },
    {
      label: "PERPUSTAKAAN",
      icon: "iconoir:book-solid",
      fontSize: 55,
    },
    {
      label: "LPSE",
      icon: "fa6-regular:money-bill-1",
      fontSize: 55,
    },
    {
      label: "PERKARA",
      icon: "mdi:court-hammer",
      fontSize: 55,
    },
    {
      label: "PUTUSAN",
      icon: "mdi:warning-box",
      fontSize: 55,
    },
    {
      label: "JDIH",
      icon: "ep:document",
      fontSize: 55,
    },
    {
      label: "LELANG JABATAN",
      icon: "gridicons:pencil",
      fontSize: 55,
    },
    {
      label: "HUKUM ONLINE",
      icon: "gg:notes",
      fontSize: 50,
    },
    {
      label: "EODB",
      icon: "basil:diamond-solid",
      fontSize: 55,
    },
    {
      label: "E-COURT",
      icon: "emojione-monotone:globe-showing-americas",
      fontSize: 50,
    },
    {
      label: "SIPP BANDING",
      icon: "uiw:dot-chart",
      fontSize: 50,
    },
    {
      label: "EPPIB",
      icon: "nimbus:ecosystem",
      fontSize: 50,
    },
    {
      label: "PNBP",
      icon: "mdi:calculator",
      fontSize: 55,
    },
    {
      label: "SIRUP",
      icon: "fontisto:line-chart",
      fontSize: 45,
    },
    {
      label: "E-BERPADU",
      icon: "subway:file-13",
      fontSize: 50,
    },
  ];
  return (
    <Row justify={"center"} align={"middle"} style={{ marginTop: 30 }}>
      <Col span={17} style={{ borderBottom: "7px solid #BF9742", paddingLeft: "2rem" }}>
        <Title level={3} color="#BF9742" style={{ fontWeight: "bold" }}>
          Aplikasi Internal
        </Title>
      </Col>
      <Col span={24} style={{ padding: "30px 0px", backgroundColor: "#A47E3B", display: "flex", justifyContent: "center" }}>
        <Flex wrap="wrap" gap="middle" justify="center" style={{ width: "65%" }}>
          {DataAppsInternal.map((app, index) => {
            return (
              <Flex justify="end" vertical align="center" gap={5} key={index} style={{ border: "2px solid #707070", width: "18%", height: "110px", backgroundColor: "white", color: "black", borderRadius: "5px", padding: 10 }}>
                <Icon icon={app.icon} style={{ fontSize: app.fontSize }} />
                <Typography.Text color="#000">
                  <strong>{app.label}</strong>
                </Typography.Text>
              </Flex>
            );
          })}
        </Flex>
      </Col>
    </Row>
  );
};

export default AppInternal;
