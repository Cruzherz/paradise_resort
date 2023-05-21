"use client";
import { FC } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const CarouselGym: FC = () => {
  return (
    <AwesomeSlider>
      <div data-src="/gym.jpg" />
      <div data-src="/gym2.jpg" />
      <div data-src="/gym3.jpg" />
    </AwesomeSlider>
  );
};
export default CarouselGym;
