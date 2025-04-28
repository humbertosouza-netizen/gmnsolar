'use client';

import { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Alert,
  Snackbar,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

interface IFormInput {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export default function ContactForm() {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { control, handleSubmit, reset } = useForm<IFormInput>();

  const onSubmit = async (data: IFormInput) => {
    try {
      // Aqui você implementará a lógica de envio do formulário
      console.log(data);
      setOpenSnackbar(true);
      reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
    }
  };

  return (
    <Box sx={{ py: 6, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Typography variant="h2" textAlign="center" color="primary" sx={{ mb: 4 }}>
          Entre em Contato
        </Typography>
        <Typography textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas úteis
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Controller
                name="nome"
                control={control}
                defaultValue=""
                rules={{ required: 'Nome é obrigatório' }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Nome completo"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Email é obrigatório',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email inválido',
                  },
                }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Email"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="telefone"
                control={control}
                defaultValue=""
                rules={{ required: 'Telefone é obrigatório' }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Telefone"
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Controller
                name="mensagem"
                control={control}
                defaultValue=""
                rules={{ required: 'Mensagem é obrigatória' }}
                render={({ field, fieldState: { error } }) => (
                  <TextField
                    {...field}
                    label="Mensagem"
                    multiline
                    rows={4}
                    fullWidth
                    error={!!error}
                    helperText={error?.message}
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                fullWidth
                sx={{ py: 1.5 }}
              >
                Enviar Mensagem
              </Button>
            </Grid>
          </Grid>
        </form>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Mensagem enviada com sucesso! Em breve entraremos em contato.
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
} 