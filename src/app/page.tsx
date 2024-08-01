"use client";
import { useState } from 'react';
import BannerImageComp from '../components/BannerImageComp';
import EditBannerTemplateBs from '../components/EditBannerTemplateBs';

const initialBanners = [
  {
    title: 'Boost Your Leads',
    description: 'Harness AI for Effective Campaigns',
    cta: 'Learn More',
    image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/8/square.png',
    background: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png',
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness AI for Effective Campaigns',
    cta: 'Learn More',
    image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/2/square.png',
    background: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png',
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness AI for Effective Campaigns',
    cta: 'Learn More',
    image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png',
    background: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png',
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness AI for Effective Campaigns',
    cta: 'Learn More',
    image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png',
    background: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png',
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness AI for Effective Campaigns',
    cta: 'Learn More',
    image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png',
    background: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png',
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness AI for Effective Campaigns',
    cta: 'Learn More',
    image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png',
    background: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png',
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness AI for Effective Campaigns',
    cta: 'Learn More',
    image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/12/square.png',
    background: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png',
  },
  {
    title: 'Boost Your Leads',
    description: 'Harness AI for Effective Campaigns',
    cta: 'Learn More',
    image: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/7/square.png',
    background: 'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png',
  },
];

const Home = () => {
  const [banners, setBanners] = useState(initialBanners);
  const [open, setOpen] = useState(false);
  const [currentBanner, setCurrentBanner] = useState(initialBanners[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleEdit = (index: number) => {
    setCurrentBanner(banners[index]);
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleSave = (data: { title: string; description: string; image: string; cta?: string; background?: string }) => {
    const updatedData = {
      title: data.title,
      description: data.description,
      image: data.image,
      cta: data.cta || '', 
      background: data.background || '', 
    };
  
    const updatedBanners = banners.map((banner, index) =>
      index === currentIndex ? updatedData : banner
    );
    setBanners(updatedBanners);
  };

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gridGap: '20px',
      height: '100vh',
      overflow: 'hidden',
      padding: '20px'
    }}>
      {banners.map((banner, index) => (
        <BannerImageComp
          key={index}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          onEdit={() => handleEdit(index)}
        />
      ))}
      <EditBannerTemplateBs
        open={open}
        handleClose={() => setOpen(false)}
        initialData={currentBanner}
        onSave={handleSave}
      />
    </div>
  );
};

export default Home;
