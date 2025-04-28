'use client';

import { Button, keyframes } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const glowKeyframe = keyframes`
  0% {
    box-shadow: 0 0 5px #FFCE00, 0 0 10px #FFCE00, 0 0 15px #FFCE00;
  }
  50% {
    box-shadow: 0 0 10px #FFCE00, 0 0 20px #FFCE00, 0 0 30px #FFCE00;
  }
  100% {
    box-shadow: 0 0 5px #FFCE00, 0 0 10px #FFCE00, 0 0 15px #FFCE00;
  }
`;

const rotateKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const StyledButton = styled(Button)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.secondary.light})`,
  animation: `${glowKeyframe} 2s infinite`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-3px)',
    background: `linear-gradient(45deg, ${theme.palette.secondary.light}, ${theme.palette.secondary.main})`,
    '& .sun-icon': {
      animation: `${rotateKeyframe} 4s linear infinite`,
    },
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 60%)',
    transform: 'rotate(0deg)',
    transition: 'transform 0.5s ease-in-out',
  },
  '&:hover::before': {
    transform: 'rotate(180deg)',
  },
}));

export default function CTAButton() {
  const handleClick = () => {
    const simulador = document.getElementById('simulador');
    if (simulador) {
      simulador.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledButton
      variant="contained"
      color="secondary"
      size="large"
      onClick={handleClick}
      sx={{ py: 2, px: 4, fontSize: '1.2rem' }}
      startIcon={<WbSunnyIcon className="sun-icon" />}
      endIcon={<ArrowForwardIcon />}
    >
      Simule sua economia agora mesmo
    </StyledButton>
  );
} 