import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const TemplateShowcase = () => {
  const templates = [
    {
      name: 'Givest',
      description: 'Non Profit PSD Template',
      category: 'Charity / Fund Rising / Non Profit',
      imageUrl: '/src/assets/imgs/codeward143.png',
    },
    {
      name: 'Musion',
      description: 'Gardening Website Template',
      category: 'Gardening / Landscaping / Green',
      imageUrl: '/src/assets/imgs/codeward143.png',
    },
    {
      name: 'Musion',
      description: 'Gardening Website Template',
      category: 'Gardening / Landscaping / Green',
      imageUrl: '/src/assets/imgs/codeward143.png',
    },
    {
      name: 'Musion',
      description: 'Gardening Website Template',
      category: 'Gardening / Landscaping / Green',
      imageUrl: '/src/assets/imgs/codeward143.png',
    },
    {
      name: 'Musion',
      description: 'Gardening Website Template',
      category: 'Gardening / Landscaping / Green',
      imageUrl: '/src/assets/imgs/codeward143.png',
    },
    {
      name: 'Musion',
      description: 'Gardening Website Template',
      category: 'Gardening / Landscaping / Green',
      imageUrl: '/src/assets/imgs/codeward143.png',
    },
    {
      name: 'Musion',
      description: 'Gardening Website Template',
      category: 'Gardening / Landscaping / Green',
      imageUrl: '/src/assets/imgs/codeward143.png',
    },
    {
      name: 'Musion',
      description: 'Gardening Website Template',
      category: 'Gardening / Landscaping / Green',
      imageUrl: '/src/assets/imgs/codeward143.png',
    },
    {
      name: 'Musion',
      description: 'Gardening Website Template',
      category: 'Gardening / Landscaping / Green',
      imageUrl: '/src/assets/imgs/codeward143.png',
    },
  ];

  return (
    <div className="template-showcase">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="mySwiper"
        slidesPerView={2}
      >
        {templates.map((template, index) => (
          <SwiperSlide key={index}>
            <div className="template-card">
              <img src={template.imageUrl} alt={template.name} className="template-image" />
              <h2 className="template-name">{template.name}</h2>
              <p className="template-description">{template.description}</p>
              <p className="template-category">{template.category}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TemplateShowcase;