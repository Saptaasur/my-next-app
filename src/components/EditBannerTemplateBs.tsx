"use client";
import  { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, TextField, Button, Input } from '@mui/material';
import { Close as CloseIcon, CloudUpload as CloudUploadIcon } from '@mui/icons-material';
import styled from 'styled-components';

interface EditBannerTemplateBsProps {
  open: boolean;
  handleClose: () => void;
  initialData: {
    title: string;
    description: string;
    image: string;
    cta: string;
    background: string;
  };
  onSave: (data: { title: string; description: string; image: string; cta: string; background: string }) => void;
}

const PreviewImage = styled.img`
  width: 40%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ImageAttribution = styled.p`
  font-size: 0.8em;
  color: #666;
  text-align: center;
`;

const ImageSelection = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px 0;
`;

const ImageOption = styled.img<{ selected?: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  cursor: pointer;
  border: ${props => props.selected ? '2px solid #007BFF' : '2px solid transparent'};
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const FormField = styled(TextField)`
  margin-bottom: 20px !important;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
`;

const SaveButton = styled(Button)`
  background-color: #28a745 !important;
  color: #fff !important;
  margin-right: 10px !important;
  padding: 10px 20px !important;
  border-radius: 5px !important;
  transition: background-color 0.3s;

  &:hover {
    background-color: #218838 !important;
  }
`;

const UploadButtonContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #007BFF;
  color: #fff;
  border-radius: 50%;
  padding: 10px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Container = styled.div`
  background: linear-gradient(to bottom right, #f0f0f0, #e0e0e0);
  border-radius: 10px;
  padding: 20px;
`;

const EditBannerTemplateBs = ({ open, handleClose, initialData, onSave }: EditBannerTemplateBsProps) => {
  const [title, setTitle] = useState(initialData.title);
  const [description, setDescription] = useState(initialData.description);
  const [selectedImage, setSelectedImage] = useState(initialData.image);
  const [cta, setCta] = useState(initialData.cta);
  const [background, setBackground] = useState(initialData.background);

  const handleSave = () => {
    const updatedBanner = {
      title,
      description,
      image: selectedImage,
      cta,
      background
    };
    console.log('Saving banner:', updatedBanner);
    onSave(updatedBanner);
    handleClose();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const images = [
    'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/5/square.png',
    'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/8/square.png',
    'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/2/square.png',
    'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/9/square.png',
    'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png',
    'https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png',
  ];

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>
        Edit Banner
        <IconButton style={{ position: 'absolute', right: '10px', top: '10px' }} onClick={handleClose} aria-label="close">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Container>
          <PreviewImage src={selectedImage} alt="Banner preview" />
          <ImageAttribution>
            Image Attribution: <a href="https://unsplash.com/photos/ts1VzlS1br8" target="_blank" rel="noopener noreferrer">Photo by Xu Haiwei on Unsplash</a>
          </ImageAttribution>
          <ImageSelection>
            {images.map((img, idx) => (
              <ImageOption
                key={idx}
                src={img}
                alt={`Option ${idx + 1}`}
                selected={img === selectedImage}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </ImageSelection>
          <UploadButtonContainer>
            <label htmlFor="upload-button">
              <CloudUploadIcon />
              <Input
                id="upload-button"
                type="file"
                hidden
                onChange={handleImageUpload}
              />
            </label>
          </UploadButtonContainer>
          <FormField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            variant="filled"
          />
          <FormField
            label="Description"
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            variant="filled"
          />
          <FormField
            label="Call to Action"
            fullWidth
            value={cta}
            onChange={(e) => setCta(e.target.value)}
            variant="filled"
          />
          <FormField
            label="Background Image"
            fullWidth
            value={background}
            onChange={(e) => setBackground(e.target.value)}
            variant="filled"
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <SaveButton onClick={handleSave}>Done</SaveButton>
          </div>
        </Container>
      </DialogContent>
    </Dialog>
  );
};

export default EditBannerTemplateBs;
