'use client';

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import FactoryIcon from '@mui/icons-material/Factory';
import SolarEffects from '@/components/SolarEffects';

const services = [
  {
    icon: HomeIcon,
    title: 'Residencial',
    description: 'Reduza sua conta de luz e valorize seu imóvel. Sistema sob medida para sua casa, com economia garantida desde o primeiro mês.',
  },
  {
    icon: StorefrontIcon,
    title: 'Comercial',
    description: 'Diminua os custos operacionais do seu negócio. Ideal para lojas, escritórios, restaurantes e outros estabelecimentos comerciais.',
  },
  {
    icon: AgricultureIcon,
    title: 'Agronegócio',
    description: 'Energia limpa para sua fazenda ou propriedade rural. Sistemas robustos para irrigação, armazenamento e toda sua produção.',
  },
  {
    icon: FactoryIcon,
    title: 'Industrial',
    description: 'Soluções de alta potência para indústrias. Reduza custos de produção e torne sua empresa mais competitiva e sustentável.',
  },
];

export default function ServicesSection() {
  return (
    <Box
      id="servicos"
      sx={{
        py: 12,
        position: 'relative',
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at top right, rgba(9, 48, 40, 0.03), transparent 70%)',
        },
      }}
    >
      <SolarEffects />
      <Container maxWidth="lg">
        <Typography 
          variant="h3" 
          align="center" 
          gutterBottom 
          color="primary"
          sx={{ 
            position: 'relative',
            zIndex: 2,
            fontWeight: 600,
            mb: 1
          }}
        >
          Soluções para todos os setores
        </Typography>
        <Typography 
          variant="subtitle1" 
          align="center" 
          sx={{ 
            mb: 8, 
            maxWidth: '800px', 
            mx: 'auto',
            color: 'text.secondary',
            position: 'relative',
            zIndex: 2
          }}
        >
          Energia solar inteligente para sua casa ou negócio. Economia real e sustentabilidade.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    borderRadius: 4,
                    transition: 'all 0.3s ease-in-out',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(45deg, rgba(9, 48, 40, 0.03) 0%, rgba(9, 48, 40, 0) 100%)',
                      zIndex: 1,
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: (theme) => `0 20px 40px ${theme.palette.primary.main}15`,
                      '& .service-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        color: 'secondary.main',
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      zIndex: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      height: '100%',
                    }}
                  >
                    <Icon
                      className="service-icon"
                      sx={{
                        fontSize: 56,
                        mb: 3,
                        color: 'primary.main',
                        transition: 'all 0.3s ease-in-out',
                      }}
                    />
                    <Typography 
                      variant="h5" 
                      gutterBottom
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        mb: 2
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
} 