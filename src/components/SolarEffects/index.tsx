'use client';

import { Box, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';

const pulseKeyframe = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.4;
  }
  100% {
    transform: scale(1);
    opacity: 0.6;
  }
`;

const floatKeyframe = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const SolarRay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '150px',
  height: '150px',
  background: `radial-gradient(circle, ${theme.palette.secondary.light} 0%, rgba(255,206,0,0) 70%)`,
  animation: `${pulseKeyframe} 3s infinite ease-in-out`,
}));

const FloatingSun = styled(Box)(({ theme }) => ({
  position: 'absolute',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  background: `linear-gradient(45deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
  boxShadow: `0 0 60px ${theme.palette.secondary.main}`,
  animation: `${floatKeyframe} 6s infinite ease-in-out`,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '-10px',
    left: '-10px',
    right: '-10px',
    bottom: '-10px',
    borderRadius: '50%',
    background: 'inherit',
    filter: 'blur(10px)',
    opacity: 0.3,
  },
}));

export default function SolarEffects() {
  return (
    <Box sx={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <SolarRay sx={{ top: '10%', left: '5%' }} />
      <SolarRay sx={{ top: '30%', right: '10%' }} />
      <SolarRay sx={{ bottom: '20%', left: '15%' }} />
      <FloatingSun sx={{ top: '15%', right: '15%' }} />
      <FloatingSun sx={{ bottom: '25%', left: '10%' }} />
    </Box>
  );
} 