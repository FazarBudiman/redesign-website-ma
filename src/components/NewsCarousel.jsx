/* eslint-disable react/prop-types */
import { FaAngleLeft, FaAngleRight, FaRegDotCircle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../assets/styles/news.css";
import { Flex, Space, Typography } from "antd";
import news1 from "../assets/images/news/news-1.png";
import news2 from "../assets/images/news/news-2.png";
import news3 from "../assets/images/news/news-3.png";

const NewsCarousel = () => {
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, fontSize: "2em", zIndex: 1 }} onClick={onClick}>
        <FaAngleLeft color="#E6B325" style={{ border: "1px solid #E6B325" }} />
      </div>
    );
  };
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div className={className} style={{ ...style, fontSize: "2em", zIndex: 1, right: -20 }} onClick={onClick}>
        <FaAngleRight color="#E6B325" style={{ border: "1px solid #E6B325" }} />
      </div>
    );
  };
  const settingCarousel = {
    customPaging: function () {
      return (
        <a>
          <FaRegDotCircle className="dots" />
        </a>
      );
    },
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 731,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          speed: 500,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const dataNews = [
    {
      id: 1,
      title: "KMA Lantik Panitera Muda",
      desc: "Pelantikan Panitera Muda Tata Usaha Negara Mahkamah Agung.",
      image: news1,
    },
    {
      id: 2,
      title: "Laporan Kinerja Anggaran 2023",
      desc: "Penyampaian Laporan Kinerja Anggaran Tahun 2023. ",
      image: news2,
    },
    {
      id: 3,
      title: "Disrupsi dalam Dunia Peradilan Indonesia",
      desc: "Paradigma Disrupsi dalam Dunia Peradilan Indonesia",
      image: news3,
    },
    {
      id: 4,
      title: "KMA Lantik Panitera Muda",
      desc: "Pelantikan Panitera Muda Tata Usaha Negara Mahkamah Agung. ",
      image: news1,
    },
    {
      id: 5,
      title: "Laporan Kinerja Anggaran 2023",
      desc: "Penyampaian Laporan Kinerja Anggaran Tahun 2023.",
      image: news2,
    },
    {
      id: 6,
      title: "Disrupsi dalam Dunia Peradilan Indonesia",
      desc: "Paradigma Disrupsi dalam Dunia Peradilan Indonesia",
      image: news3,
    },
  ];

  return (
    <Slider {...settingCarousel}>
      {dataNews.map((val) => {
        return (
          <div key={val.id}>
            <Flex style={{ height: "100%" }} vertical justify={"space-between"} gap={30}>
              <Space direction="vertical" size={"small"} style={{ padding: "10px 0px 0px 5px" }}>
                <Typography.Text style={{ color: "#E6B325", fontSize: 14 }}>
                  <strong>{val.title}</strong>
                </Typography.Text>
                <Typography.Text style={{ fontSize: 12 }}>{val.desc}</Typography.Text>
              </Space>
              <img src={val.image} alt={val.id} width={"100%"} />
            </Flex>
          </div>
        );
      })}
    </Slider>
  );
};

export default NewsCarousel;
