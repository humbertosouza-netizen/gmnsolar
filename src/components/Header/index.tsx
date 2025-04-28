'use client';

import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Toolbar,
  Typography,
  useScrollTrigger,
  keyframes,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const rotateKeyframe = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SunLogo = styled(WbSunnyIcon)(({ theme }) => ({
  fontSize: '2rem',
  color: theme.palette.secondary.main,
  marginRight: '8px',
  animation: `${rotateKeyframe} 20s linear infinite`,
  transition: 'all 0.3s ease-in-out',
  '@media (max-width: 600px)': {
    fontSize: '1.5rem',
  },
  '&:hover': {
    animation: `${rotateKeyframe} 2s linear infinite`,
    color: theme.palette.secondary.light,
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backdropFilter: 'blur(10px)',
  backgroundColor: 'transparent',
  transition: 'all 0.3s ease-in-out',
  '&.scrolled': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
}));

const pages = [
  { label: 'Início', id: 'hero' },
  { label: 'Simulador', id: 'simulador' },
  { label: 'Energia Solar', id: 'porque-solar' },
  { label: 'Como Funciona', id: 'como-funciona' },
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Equipe', id: 'equipe' },
  { label: 'Dúvidas', id: 'faq' },
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const scrollToSection = (id: string) => {
    handleCloseNavMenu();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledAppBar position="fixed" className={trigger ? 'scrolled' : ''}>
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: '56px', sm: '64px' },
            py: { xs: 1, sm: 1.5 },
          }}
        >
          {/* Logo para desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <SunLogo />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                fontWeight: 600,
                color: trigger ? 'primary.main' : 'white',
                textDecoration: 'none',
                cursor: 'pointer',
                letterSpacing: '0.5px',
              }}
              onClick={() => scrollToSection('hero')}
            >
              GMN SOLAR
            </Typography>
          </Box>

          {/* Menu mobile */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="small"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              sx={{ 
                color: trigger ? 'primary.main' : 'white',
                p: 1,
              }}
            >
              <MenuIcon sx={{ fontSize: '1.5rem' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '8px',
                  mt: 1,
                },
              }}
            >
              {pages.map((item) => (
                <MenuItem 
                  key={item.id} 
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    py: 1,
                    minHeight: '40px',
                  }}
                >
                  <Typography 
                    textAlign="center"
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo para mobile */}
          <Box 
            sx={{ 
              display: { xs: 'flex', md: 'none' }, 
              alignItems: 'center', 
              flexGrow: 1,
              justifyContent: 'center',
            }}
          >
            <SunLogo />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontSize: { xs: '1.1rem', sm: '1.25rem' },
                fontWeight: 600,
                color: trigger ? 'primary.main' : 'white',
                textDecoration: 'none',
                cursor: 'pointer',
                letterSpacing: '0.5px',
              }}
              onClick={() => scrollToSection('hero')}
            >
              GMN SOLAR
            </Typography>
          </Box>

          {/* Menu desktop */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            {pages.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{
                  px: 1.5,
                  py: 1,
                  mx: 0.5,
                  color: trigger ? 'primary.main' : 'white',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  position: 'relative',
                  opacity: 0.9,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 6,
                    left: '50%',
                    width: 0,
                    height: 2,
                    bgcolor: 'secondary.main',
                    transition: 'all 0.3s ease-in-out',
                    transform: 'translateX(-50%)',
                    opacity: 0.7,
                  },
                  '&:hover': {
                    opacity: 1,
                    backgroundColor: 'transparent',
                    '&::after': {
                      width: '60%',
                    },
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
} 