import React from "react";
import style from "./Logos.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SimpleSlider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 5,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className={style.logoSliders}>
      <h1>Employers of Choice</h1>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
        arrows={false}
      >
        <div>
          <img
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/june/ZnNwNuQzQu0ja8wsf8vGg4ajsi5RRpd7vlOX71RC.jpeg"
            alt="logo"
          />
        </div>
        <div>
          <img
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/3u92a6TD7MslWbPJic4wSzABsLPBwtL0mrthYvxW.jpeg"
            alt="logo"
          />
        </div>
        <div>
          <img
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/Vt3mzVSvBb6NkFhELbk0NzIv3sSmcRm9LFUGC4rG.jpeg"
            alt="logo"
          />
        </div>
        <div>
          <img
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/august/nGqLoPmZun0GxVuKOgaEBB7Q63BGdyOPqHxRpTCl.jpeg"
            alt="logo"
          />
        </div>
        <div>
          <img
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/april/Mp2fRLKl9YmxG7YBxanGbRYdkzMayIcwhiEe8HyD.jpeg"
            alt="logo"
          />
        </div>
        <div>
          <img
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/october/S75zzSg0xsbyLirgPUWCqPUuUT9LpsXVQp6uLb7B.jpeg"
            alt="logo"
          />
        </div>
        <div>
          <img
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2021/november/aGHVfuwztrBLUqQ4hUb3uhV1zgbGZTf9VaoKyRkm.jpeg"
            alt="logo"
          />
        </div>
        <div>
          <img
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/january/I32QY2OzbvdjaGT1p5mPc7YPDdxkEOAMeyIt3vHT.jpeg"
            alt="logo"
          />
        </div>
        <div>
          <img
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/march/THyXXtT5sPRi1gVwdxkrksZzSsv7f5UkDFwkaQJD.jpeg"
            alt="logo"
          />
        </div>
        <div>
          <img
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/may/csLqDvD5G1J8NuUjYIXIS9vjE8FQMQjWJ6SRP4aj.jpeg"
            alt="logo"
          />
        </div>
        <div>
          <img
            src="https://media.monsterindia.com/trex/prod-cdn/media/promotedemployer/2022/july/JpYoK5TOwijxrufQCDo0F2jYc6sImQgHW6Befx8f.jpeg"
            alt="logo"
          />
        </div>
      </Carousel>
      
    </div>
  );
}
