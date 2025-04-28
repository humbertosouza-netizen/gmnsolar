import { Box, Container, Typography, Button } from '@mui/material';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import RefreshIcon from '@mui/icons-material/Refresh';

export default function Offline() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          py: 4,
        }}
      >
        <WifiOffIcon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
        
        <Typography variant="h4" component="h1" gutterBottom color="primary">
          Você está offline
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Parece que você está sem conexão com a internet.
          Verifique sua conexão e tente novamente.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          startIcon={<RefreshIcon />}
          onClick={() => window.location.reload()}
          sx={{ mb: 2 }}
        >
          Tentar Novamente
        </Button>

        <Typography variant="body2" color="text.secondary">
          Algumas funcionalidades podem estar limitadas enquanto você estiver offline.
        </Typography>
      </Box>
    </Container>
  );
} 