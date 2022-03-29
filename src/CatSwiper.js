import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export function CatSwiper(props) {
  const cat = props.breedCat //選択された猫の画像
  console.log(cat)

  //breedImage 選択された猫の負画像を取得
  // const breedcatimg = cat.map((c) => (
  //   <SwiperSlide key ={c}>
  //     <img key ={c} src={c}></img>
  //   </SwiperSlide>
  // ))

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={console.log('change')}
      onSlideChange={props.onSubmitImage}
    >


     <SwiperSlide >
      <img src={cat}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src={cat}></img>
      </SwiperSlide>
      <SwiperSlide >
      <img src={cat}></img>
      </SwiperSlide>
      <SwiperSlide>
      <img src={cat}></img>
      </SwiperSlide> */}
      ...
    </Swiper>
  )
}
export default CatSwiper;
