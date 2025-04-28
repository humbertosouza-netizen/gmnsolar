'use client';

import { Box, Container, Typography, Grid, Paper, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import BusinessIcon from '@mui/icons-material/Business';
import SellIcon from '@mui/icons-material/Sell';

const teamMembers = {
  diretoria: [
    { name: 'Gilvan', whatsapp: '5567998267020', role: 'Diretor' },
    { name: 'Givanildo', whatsapp: '5567992251055', role: 'Diretor' },
  ],
  vendas: [
    { name: 'Murilo', whatsapp: '5567991406350', role: 'Consultor de Vendas' },
    { name: 'Israel', whatsapp: '5567998483699', role: 'Consultor de Vendas' },
    { name: 'Lucas', whatsapp: '5567991402785', role: 'Consultor de Vendas' },
    { name: 'Christopher', whatsapp: '5567991465016', role: 'Consultor de Vendas' },
  ]
};

export default function TeamSection() {
  const handleWhatsAppClick = (whatsapp: string, name: string) => {
    const message = encodeURIComponent(`Olá ${name}, gostaria de saber mais sobre energia solar!`);
    window.open(`https://wa.me/${whatsapp}?text=${message}`, '_blank');
  };

  return (
    <Box
      id="equipe"
      sx={{
        py: 8,
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at bottom right, rgba(9, 48, 40, 0.05), transparent 60%)',
        },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h3" align="center" gutterBottom color="primary">
          Nossa Equipe
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Conheça os profissionais dedicados a transformar sua forma de consumir energia
        </Typography>

        {/* Diretoria */}
        <Typography variant="h4" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
          <BusinessIcon color="primary" /> Diretoria
        </Typography>
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {teamMembers.diretoria.map((member) => (
            <Grid item xs={12} sm={6} md={4} key={member.name}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {member.role}
                </Typography>
                <IconButton
                  color="success"
                  onClick={() => handleWhatsAppClick(member.whatsapp, member.name)}
                  sx={{ mt: 1 }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Vendas */}
        <Typography variant="h4" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
          <SellIcon color="primary" /> Equipe Comercial
        </Typography>
        <Grid container spacing={3}>
          {teamMembers.vendas.map((member) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  textAlign: 'center',
                  transition: 'transform 0.2s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {member.name}
                </Typography>
                <Typography color="text.secondary" gutterBottom>
                  {member.role}
                </Typography>
                <IconButton
                  color="success"
                  onClick={() => handleWhatsAppClick(member.whatsapp, member.name)}
                  sx={{ mt: 1 }}
                >
                  <WhatsAppIcon />
                </IconButton>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
} 