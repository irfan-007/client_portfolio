import React from "react";
// import Swiper core and required modules
import { Pagination, Autoplay, EffectFlip, EffectCoverflow } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import img1 from "../../assets/Ayon/img1.jpg";
import img2 from "../../assets/Ayon/img2.jpg";
import img3 from "../../assets/Ayon/img3.jpg";
import img4 from "../../assets/Ayon/img4.jpg";
import img5 from "../../assets/Ayon/img5.jpg";
import img6 from "../../assets/Ayon/img6.jpg";
import img7 from "../../assets/Ayon/img7.jpg";
import img8 from "../../assets/Ayon/img8.jpg";

function Company() {
  const prt = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    },
  ];

  return (
    <div>
      <h2 className="d-flex align-items-center justify-content-center mb-5">
        About Company
      </h2>
      <Swiper
        className="container col-md-5 shadow-lg" // install Swiper modules
        modules={[Autoplay, Pagination, EffectFlip, EffectCoverflow]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        effect="coverflow"
      >
        {prt.map(({ id, img }) => {
          return (
            <SwiperSlide
              className="shadow-lg rounded align-items-center justify-content-center d-flex "
              key={id}
            >
              <div>
                <img
                  src={img}
                  className="img w-100 h-25 rounded border-0 shadow "
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default Company;

// import React from "react";
// import "./Testimonials.css";
// import avr1 from "../../assets/avatar1.jpg";
// import avr2 from "../../assets/avatar2.jpg";
// import avr3 from "../../assets/avatar3.jpg";
// import avr4 from "../../assets/avatar4.jpg";

// //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// function Testimonials() {
//   const data = [
//     {
//       id: 1,
//       name: "Jhone Snow",
//       img: avr1,
//       review:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores beatae libero quae dolores quidem deserunt. Dignissimos repellendus nemo vero expedita pariatur asperiores ea, impedit reiciendis, ab, laudantium aut dolores assumenda",
//     },
//     {
//       id: 2,
//       name: "Dragon Queen",
//       img: avr2,
//       review:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores beatae libero quae dolores quidem deserunt. Dignissimos repellendus nemo vero expedita pariatur asperiores ea, impedit reiciendis, ab, laudantium aut dolores assumenda",
//     },
//     {
//       id: 3,
//       name: "Arya Stark",
//       img: avr3,
//       review:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores beatae libero quae dolores quidem deserunt. Dignissimos repellendus nemo vero expedita pariatur asperiores ea, impedit reiciendis, ab, laudantium aut dolores assumenda",
//     },
//     {
//       id: 4,
//       name: "Tyrion Lanister",
//       img: avr4,
//       review:
//         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores beatae libero quae dolores quidem deserunt. Dignissimos repellendus nemo vero expedita pariatur asperiores ea, impedit reiciendis, ab, laudantium aut dolores assumenda",
//     },
//   ];

//   return (
//     <section id="testimonials">
//       <h5>Review from Clients</h5>
//       <h2>Testimonials</h2>

//
//     </section>
//   );
// }
