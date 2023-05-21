"use client";
import { FC } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const CarouselYoga: FC = () => {
  return (
    <AwesomeSlider>
      <div data-src="/yoga.jpg" />
      <div data-src="/yoga2.jpg" />
      <div data-src="/yoga3.jpg" />
    </AwesomeSlider>
  );
};
export default CarouselYoga;
