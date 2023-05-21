"use client";
import { FC } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

const CarouselRes: FC = () => {
  return (
    <AwesomeSlider>
      <div data-src="/restaurant.jpg" />
      <div data-src="/restaurant2.jpg" />
      <div data-src="/restaurant3.jpg" />
    </AwesomeSlider>
  );
};
export default CarouselRes;
