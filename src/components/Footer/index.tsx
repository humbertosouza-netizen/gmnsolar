'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  keyframes,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';

const rotateKeyframe = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulseKeyframe = keyframes`
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
`;

const shockKeyframe = keyframes`
  0% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
  20% { transform: translate(-2px, 2px) rotate(-2deg); opacity: 0.9; }
  40% { transform: translate(2px, -2px) rotate(2deg); opacity: 1; }
  60% { transform: translate(-2px, -2px) rotate(-1deg); opacity: 0.9; }
  80% { transform: translate(2px, 2px) rotate(1deg); opacity: 1; }
  100% { transform: translate(0, 0) rotate(0deg); opacity: 1; }
`;

const SunIcon = styled(WbSunnyIcon)(({ theme }) => ({
  fontSize: '2rem',
  color: theme.palette.secondary.main,
  animation: `${rotateKeyframe} 20s linear infinite`,
  '&:hover': {
    animation: `${rotateKeyframe} 2s linear infinite`,
    color: theme.palette.secondary.light,
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  transition: 'all 0.3s ease-in-out',
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginBottom: '8px',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const DevSignature = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  color: theme.palette.text.secondary,
  '& .shock-icon': {
    color: theme.palette.secondary.main,
    animation: `${shockKeyframe} 2s infinite`,
    fontSize: '1.2rem',
  },
  '& a': {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    position: 'relative',
    '&:hover': {
      color: theme.palette.secondary.main,
      '&::after': {
        width: '100%',
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: 0,
      width: 0,
      height: '2px',
      backgroundColor: theme.palette.secondary.main,
      transition: 'width 0.3s ease-in-out',
    },
  },
}));

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(9, 48, 40, 0.2), transparent)',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <SunIcon />
              <Typography
                variant="h6"
                sx={{
                  ml: 1,
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #093028, #237A57)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                GMN SOLAR
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Transformando a energia solar em economia real para sua empresa ou residência.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Navegação
            </Typography>
            {['Início', 'Simulador', 'Por que Solar?', 'Como Funciona', 'FAQ'].map((item) => (
              <Typography
                key={item}
                component="div"
                sx={{ mb: 1 }}
              >
                <FooterLink href="#" underline="none">
                  {item}
                </FooterLink>
              </Typography>
            ))}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Contato
            </Typography>
            <Typography variant="subtitle2" color="primary" sx={{ mt: 2, mb: 1 }}>
              Diretoria
            </Typography>
            <FooterLink 
              href="https://wa.me/5567998267020" 
              target="_blank" 
              underline="none"
            >
              <WhatsAppIcon /> Gilvan
            </FooterLink>
            <FooterLink 
              href="https://wa.me/5567992251055" 
              target="_blank" 
              underline="none"
            >
              <WhatsAppIcon /> Givanildo
            </FooterLink>

            <Typography variant="subtitle2" color="primary" sx={{ mt: 2, mb: 1 }}>
              Equipe Comercial
            </Typography>
            <FooterLink 
              href="https://wa.me/5567991406350" 
              target="_blank" 
              underline="none"
            >
              <WhatsAppIcon /> Murilo
            </FooterLink>
            <FooterLink 
              href="https://wa.me/5567998483699" 
              target="_blank" 
              underline="none"
            >
              <WhatsAppIcon /> Israel
            </FooterLink>
            <FooterLink 
              href="https://wa.me/5567991402785" 
              target="_blank" 
              underline="none"
            >
              <WhatsAppIcon /> Lucas
            </FooterLink>
            <FooterLink 
              href="https://wa.me/5567991465016" 
              target="_blank" 
              underline="none"
            >
              <WhatsAppIcon /> Christopher
            </FooterLink>

            <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 2, fontSize: '0.7rem' }}>
              Clique no nome para iniciar uma conversa
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Endereço
            </Typography>
            <FooterLink href="https://maps.google.com/?q=Av. Mal. Deodoro, 804 - Jardim Leblon, Campo Grande - MS" target="_blank" underline="none">
              <LocationOnIcon /> Av. Mal. Deodoro, 804 - Jardim Leblon
            </FooterLink>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Campo Grande - MS, 79092-000
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="primary" gutterBottom>
              Redes Sociais
            </Typography>
            <FooterLink href="https://www.instagram.com/gmnsolar/" target="_blank" underline="none">
              <InstagramIcon /> @gmnsolar
            </FooterLink>
            <FooterLink href="https://g.co/kgs/NCgx6xJ" target="_blank" underline="none">
              <BusinessIcon /> Google Meu Negócio
            </FooterLink>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 4,
            pt: 3,
            borderTop: '1px solid',
            borderColor: 'divider',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              mb: 2,
            }}
          >
            <SunIcon sx={{ fontSize: '1rem' }} />
            © {new Date().getFullYear()} GMN Solar. Todos os direitos reservados.
          </Typography>
          
          <DevSignature>
            <ElectricBoltIcon className="shock-icon" />
            Desenvolvido com muito amor por{' '}
            <Link href="https://www.instagram.com/humbertodev.js/" target="_blank" rel="noopener noreferrer">
              Humberto Azambuja
            </Link>
            <ElectricBoltIcon className="shock-icon" />
          </DevSignature>
        </Box>
      </Container>
    </Box>
  );
} 