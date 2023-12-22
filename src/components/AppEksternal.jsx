import { Icon } from "@iconify/react";
import { Col, Flex, Row, Typography } from "antd";
import Title from "antd/es/typography/Title";

const AppEksternal = () => {
  const DataAppsEksternal = [
    {
      label: "SIPP",
      icon: "game-icons:scales",
      fontSize: 60,
    },
    {
      label: "KOMDANAS",
      icon: "material-symbols-light:data-table-sharp",
      fontSize: 55,
    },
    {
      label: "SIMARI",
      icon: "icomoon-free:library",
      fontSize: 50,
    },
    {
      label: "SIKEP",
      icon: "fa6-solid:user-tie",
      fontSize: 50,
    },
    {
      label: "E-Mail",
      icon: "clarity:email-line",
      fontSize: 55,
    },
    {
      label: "E-LEARNING",
      icon: "fluent:hat-graduation-28-filled",
      fontSize: 60,
    },
    {
      label: "SAKIP",
      icon: "bx:box",
      fontSize: 60,
    },
    {
      label: "E-SADEWA",
      icon: "material-symbols:monitor-outline",
      fontSize: 60,
    },
    {
      label: "E-BIMA",
      icon: "clarity:file-group-solid",
      fontSize: 55,
    },
    {
      label: "MONITORING",
      icon: "bi:clipboard-data",
      fontSize: 50,
    },
    {
      label: "E-PRIMA",
      icon: "fluent:box-20-regular",
      fontSize: 60,
    },
    {
      label: "E-IPLANS",
      icon: "fa:pencil-square-o",
      fontSize: 45,
    },
    {
      label: "PNBP",
      icon: "ion:calculator",
      fontSize: 50,
    },
    {
      label: "LLK",
      icon: "ph:file-fill",
      fontSize: 50,
    },
  ];

  return (
    <Row justify={"center"} align={"middle"} style={{ marginTop: 30 }}>
      <Col span={17} style={{ borderBottom: "7px solid #BF9742", paddingLeft: "2rem" }}>
        <Title level={3} color="#BF9742" style={{ fontWeight: "bold" }}>
          Aplikasi Eksternal
        </Title>
      </Col>
      <Col span={24} style={{ padding: "30px 0px", backgroundColor: "#A47E3B", display: "flex", justifyContent: "center" }}>
        <Flex wrap="wrap" gap="middle" justify="center" style={{ width: "65%" }}>
          {DataAppsEksternal.map((app, index) => {
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

export default AppEksternal;
