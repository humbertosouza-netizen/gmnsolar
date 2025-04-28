'use client';

import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem,
  Grid,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { motion } from 'framer-motion';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const cidadesMS = [
  'Campo Grande',
  'Dourados',
  'Três Lagoas',
  'Corumbá',
  'Ponta Porã',
  'Naviraí',
  'Nova Andradina',
  'Aquidauana',
  'Maracaju',
  'Paranaíba',
  'Sidrolândia',
  'Coxim',
  'Amambai',
  'Rio Brilhante',
  'Chapadão do Sul',
  'Costa Rica',
  'São Gabriel do Oeste',
  'Miranda',
  'Cassilândia',
  'Ivinhema',
];

const segmentos = [
  { value: 'residencial', label: 'Residencial' },
  { value: 'comercial', label: 'Comercial' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'agro', label: 'Agronegócio' },
];

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  cidade: yup.string().required('Cidade é obrigatória'),
  segmento: yup.string().required('Segmento é obrigatório'),
  contaMedia: yup
    .number()
    .typeError('Informe um valor válido')
    .required('Valor da conta é obrigatório')
    .min(100, 'Valor mínimo é R$ 100,00')
    .max(50000, 'Para valores maiores, entre em contato direto'),
});

interface IFormInput {
  nome: string;
  cidade: string;
  segmento: string;
  contaMedia: number;
}

export default function SimuladorSolar() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { control, handleSubmit, formState: { errors }, watch } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      cidade: 'Campo Grande',
      segmento: 'residencial',
    },
  });

  const contaMedia = watch('contaMedia');
  const economiaEstimada = contaMedia ? contaMedia * 0.85 : 0;

  const onSubmit = async (data: IFormInput) => {
    setLoading(true);
    try {
      // Formata a mensagem para o WhatsApp
      const mensagem = encodeURIComponent(
        `Olá! Fiz uma simulação de energia solar:\n\n` +
        `Nome: ${data.nome}\n` +
        `Cidade: ${data.cidade}\n` +
        `Segmento: ${data.segmento}\n` +
        `Conta Média: R$ ${data.contaMedia.toFixed(2)}\n` +
        `Economia Estimada: R$ ${economiaEstimada.toFixed(2)}\n\n` +
        `Gostaria de mais informações!`
      );

      // Número do WhatsApp da empresa
      const whatsappNumber = '5567999999999';
      
      // Abre o WhatsApp em nova aba
      window.open(`https://wa.me/${whatsappNumber}?text=${mensagem}`, '_blank');
      
      setSuccess(true);
    } catch (error) {
      console.error('Erro ao enviar simulação:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 4 },
          background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
          border: '1px solid rgba(9, 48, 40, 0.1)',
        }}
      >
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Simule sua Economia
        </Typography>
        <Typography variant="subtitle1" gutterBottom align="center" color="text.secondary" sx={{ mb: 4 }}>
          Descubra quanto você pode economizar com energia solar
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="nome"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Nome completo"
                    fullWidth
                    error={!!errors.nome}
                    helperText={errors.nome?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="cidade"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="Cidade"
                    fullWidth
                    error={!!errors.cidade}
                    helperText={errors.cidade?.message}
                  >
                    {cidadesMS.map((cidade) => (
                      <MenuItem key={cidade} value={cidade}>
                        {cidade}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="segmento"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select
                    label="Segmento"
                    fullWidth
                    error={!!errors.segmento}
                    helperText={errors.segmento?.message}
                  >
                    {segmentos.map((segmento) => (
                      <MenuItem key={segmento.value} value={segmento.value}>
                        {segmento.label}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="contaMedia"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Valor médio da conta (R$)"
                    fullWidth
                    type="number"
                    error={!!errors.contaMedia}
                    helperText={errors.contaMedia?.message}
                  />
                )}
              />
            </Grid>

            {contaMedia > 0 && (
              <Grid item xs={12}>
                <Box
                  sx={{
                    bgcolor: 'primary.main',
                    color: 'white',
                    p: 3,
                    borderRadius: 2,
                    textAlign: 'center',
                    mb: 3,
                  }}
                >
                  <Typography variant="h6" gutterBottom>
                    Economia Estimada
                  </Typography>
                  <Typography variant="h4">
                    R$ {economiaEstimada.toFixed(2)}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
                    por mês*
                  </Typography>
                </Box>
              </Grid>
            )}

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="secondary"
                size="large"
                fullWidth
                disabled={loading}
                startIcon={<WhatsAppIcon />}
                sx={{ py: 2 }}
              >
                {loading ? (
                  <CircularProgress size={24} color="inherit" />
                ) : (
                  'Receber Simulação no WhatsApp'
                )}
              </Button>
            </Grid>
          </Grid>
        </form>

        <Typography
          variant="caption"
          align="center"
          color="text.secondary"
          sx={{ display: 'block', mt: 2 }}
        >
          *Valores estimados. A economia real pode variar conforme condições específicas.
        </Typography>

        <Snackbar
          open={success}
          autoHideDuration={6000}
          onClose={() => setSuccess(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSuccess(false)}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Simulação enviada com sucesso! Abrindo WhatsApp...
          </Alert>
        </Snackbar>
      </Paper>
    </motion.div>
  );
} 