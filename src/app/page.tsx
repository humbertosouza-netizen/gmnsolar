import type { Metadata } from 'next';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BoltIcon from '@mui/icons-material/Bolt';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import EngineeringIcon from '@mui/icons-material/Engineering';
import FactoryIcon from '@mui/icons-material/Factory';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import SimuladorSolar from '@/components/SimuladorSolar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import CTAButton from '@/components/CTAButton';
import SolarEffects from '@/components/SolarEffects';
import TeamSection from '@/components/TeamSection';
import ServicesSection from '@/components/ServicesSection';

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

export const metadata: Metadata = {
  title: 'GMN Solar - Energia Solar em Campo Grande e MS | Instalação e Manutenção',
  description: 'Líder em energia solar em Campo Grande e MS. Soluções para sua casa, fazenda, comércio e indústria. Economia garantida e suporte técnico especializado.',
  keywords: 'energia solar mato grosso do sul, painel solar ms, economia de energia ms, empresa de energia solar ms',
  openGraph: {
    title: 'GMN Solar - Energia Solar em Campo Grande e MS',
    description: 'Líder em energia solar em Campo Grande e MS. Soluções para sua casa, fazenda, comércio e indústria.',
    images: ['/og-image.jpg'],
  },
};

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          id="hero"
          sx={{
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(9, 48, 40, 0.95), rgba(9, 48, 40, 0.8)), url("/hero-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            py: { xs: 8, md: 12 },
            textAlign: 'center',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at top right, rgba(255, 206, 0, 0.1), transparent 70%)',
            },
          }}
        >
          <SolarEffects />
          <Container maxWidth="lg">
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 600,
                mb: 2,
                position: 'relative',
                zIndex: 1,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                '& .energy-icon': {
                  color: '#FFD700',
                  filter: 'drop-shadow(0 2px 4px rgba(255,215,0,0.3))',
                  marginRight: '4px'
                },
                '& .highlight': {
                  color: '#FFD700',
                  position: 'relative',
                  textShadow: '0 2px 10px rgba(255,215,0,0.3)'
                }
              }}
            >
              <span className="energy-icon">⚡</span>
              Reduza sua conta de luz em até <span className="highlight">95%</span> com energia solar!
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 400,
                mb: 4,
                color: 'rgba(255, 255, 255, 0.9)',
                position: 'relative',
                zIndex: 1
              }}
            >
              Soluções em energia solar para sua casa, fazenda, comércio ou indústria em todo Mato Grosso do Sul.
              Comece a economizar com energia limpa e renovável.
            </Typography>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <CTAButton />
            </Box>
          </Container>
        </Box>

        {/* Simulador Section */}
        <Container id="simulador" maxWidth="lg" sx={{ mt: -6, position: 'relative', zIndex: 2 }}>
          <SimuladorSolar />
        </Container>

        {/* Por que mudar para energia solar? */}
        <Box 
          id="porque-solar"
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
              background: 'radial-gradient(circle at bottom left, rgba(255, 206, 0, 0.05), transparent 60%)',
            },
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary">
              Energia solar é investimento garantido
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
              Chega de contas de luz altas. Com energia solar você economiza desde o primeiro mês 
              e se protege dos aumentos constantes na tarifa. Além da economia, você contribui com 
              o meio ambiente e valoriza seu imóvel.
            </Typography>
          </Container>
        </Box>

        {/* Como funciona */}
        <Box 
          id="como-funciona"
          sx={{ 
            py: 8, 
            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at top right, rgba(9, 48, 40, 0.05), transparent 60%)',
            },
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary">
              Do orçamento à economia em 4 passos
            </Typography>
            
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                {
                  title: 'Faça sua simulação',
                  description: 'Use nosso simulador e descubra quanto pode economizar todo mês.',
                },
                {
                  title: 'Receba seu orçamento',
                  description: 'Nossa equipe vai criar a melhor solução para sua economia.',
                },
                {
                  title: 'Instalação rápida',
                  description: 'Instaladores experientes e material de primeira linha.',
                },
                {
                  title: 'Comece a economizar',
                  description: 'Acompanhe sua economia em tempo real pelo celular.',
                },
              ].map((step, index) => (
                <Grid item xs={12} md={3} key={index}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      bgcolor: 'transparent',
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        color: 'primary.main',
                        opacity: 0.2,
                        fontSize: '4rem',
                        mb: 2,
                      }}
                    >
                      {index + 1}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      {step.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {step.description}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Sobre a GMN Solar */}
        <Box 
          id="sobre"
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
              background: 'radial-gradient(circle at bottom right, rgba(255, 206, 0, 0.05), transparent 60%)',
            },
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary">
              Por que escolher a GMN Solar?
            </Typography>
            <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: '800px', mx: 'auto' }}>
              Somos especialistas em energia solar no Mato Grosso do Sul. Nossa equipe já ajudou 
              centenas de clientes a reduzirem suas contas de luz. Trabalhamos com as melhores 
              marcas do mercado e oferecemos garantia real em todos os equipamentos e instalação.
            </Typography>
          </Container>
        </Box>

        {/* Depoimentos */}
        <Box 
          id="depoimentos"
          sx={{ 
            py: 8, 
            background: 'linear-gradient(135deg, rgba(9, 48, 40, 0.95), rgba(9, 48, 40, 0.9))',
            position: 'relative',
            color: 'white',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at center, rgba(255, 206, 0, 0.1), transparent 70%)',
            },
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom>
              O que nossos clientes dizem
            </Typography>
            
            <Grid container spacing={4} sx={{ mt: 4 }}>
              {[
                {
                  quote: "Instalamos o sistema com a GMN Solar em nossa residência e a economia foi imediata. Muito satisfeito!",
                  author: "Cliente Residencial",
                },
                {
                  quote: "Instalamos o sistema com a GMN Solar em nossa fazenda em Aquidauana e a economia foi imediata.",
                  author: "Produtor Rural",
                },
                {
                  quote: "Reduzimos em mais de 80% a conta de luz do nosso galpão em Três Lagoas.",
                  author: "Empresário Industrial",
                },
                {
                  quote: "A equipe foi excelente do início ao fim. Recomendo 100%.",
                  author: "Comerciante",
                },
              ].map((testimonial, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Paper sx={{ p: 4, height: '100%', bgcolor: 'rgba(255,255,255,0.1)', color: 'white' }}>
                    <FormatQuoteIcon sx={{ fontSize: 40, opacity: 0.5, mb: 2 }} />
                    <Typography variant="h6" gutterBottom>
                      {testimonial.quote}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ opacity: 0.8, mt: 2 }}>
                      {testimonial.author}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        {/* Atendimento Local */}
        <Box sx={{ 
          py: 8, 
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at top left, rgba(9, 48, 40, 0.05), transparent 60%)',
          },
        }}>
          <Container maxWidth="lg">
            <Typography variant="subtitle1" align="center" sx={{ maxWidth: '1000px', mx: 'auto' }}>
              Atendemos Campo Grande, Dourados, Três Lagoas, Corumbá, Ponta Porã, Naviraí, 
              Aquidauana, Paranaíba, Nova Andradina, Coxim e todo Mato Grosso do Sul com rapidez 
              e qualidade.
            </Typography>
          </Container>
        </Box>

        {/* Seção de Serviços */}
        <ServicesSection />

        {/* Seção da Equipe */}
        <TeamSection />

        {/* FAQ */}
        <Box 
          id="faq"
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
              background: 'radial-gradient(circle at bottom right, rgba(255, 206, 0, 0.05), transparent 60%)',
            },
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h3" align="center" gutterBottom color="primary">
              Dúvidas Frequentes
            </Typography>
            
            <Grid container spacing={3} sx={{ mt: 4 }}>
              {[
                {
                  question: "Em quanto tempo vou recuperar o investimento?",
                  answer: "Em média, nossos clientes recuperam o investimento em 3 a 5 anos. Depois disso, é só economia.",
                },
                {
                  question: "Posso financiar meu sistema?",
                  answer: "Sim! Temos várias opções de financiamento com parcelas que cabem no seu bolso.",
                },
                {
                  question: "O sistema funciona em dias nublados?",
                  answer: "Sim, os painéis continuam gerando energia mesmo sem sol direto, só com uma eficiência um pouco menor.",
                },
                {
                  question: "Como funciona o suporte técnico?",
                  answer: "Oferecemos monitoramento 24h e suporte técnico sempre que precisar, com atendimento rápido e eficiente.",
                },
              ].map((faq, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Paper sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom color="primary">
                      {faq.question}
                    </Typography>
                    <Typography color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}
