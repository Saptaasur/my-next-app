"use client";
import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

interface BannerImageProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onEdit: () => void;
}

const BannerContainer = styled.div<Pick<BannerImageProps, 'background'>>`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background-image: url(${props => props.background});
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100%;
  border: 2px solid black;

  @media (max-width: 768px) {
    display: flex;
    padding: 10px;
    box-sizing: border-box;
  }
`;

const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.5);
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120%;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    padding: 10px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 50%;
    padding-left: 10px;
  }
`;

const Title = styled.h2`
  font-size: 1.5em;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1em;
  margin: 10px 0;
`;

const CTAButton = styled.button`
  background-color: #f0b90b;
  color: #000;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
`;

const EditButton = styled(IconButton)`
  position: absolute !important;
  top: 10px;
  right: 10px;
  color: #fff !important;
`;

const BannerImageComp: React.FC<BannerImageProps> = ({ title, description, cta, image, background, onEdit }) => {
  return (
    <BannerContainer background={background}>
      <EditButton onClick={onEdit} aria-label="edit">
        <EditIcon />
      </EditButton>
      <Overlay>
        <Image src={image} alt={title} />
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <CTAButton>{cta}</CTAButton>
        </Content>
      </Overlay>
    </BannerContainer>
  );
};

export default BannerImageComp;
