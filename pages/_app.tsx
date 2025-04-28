import { useEffect, useState } from 'react';
import type { AppProps } from 'next/app';
import { Snackbar, Button } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  const [showReload, setShowReload] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      // Registra o service worker
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);

        // Verifica se há uma nova versão disponível
        registration.addEventListener('waiting', event => {
          if (registration.waiting) {
            setWaitingWorker(registration.waiting);
            setShowReload(true);
          }
        });

        // Atualiza a página quando o service worker é atualizado
        registration.addEventListener('controlling', event => {
          window.location.reload();
        });
      }).catch(error => {
        console.error('Erro ao registrar Service Worker:', error);
      });
    }
  }, []);

  // Função para atualizar o service worker
  const reloadPage = () => {
    waitingWorker?.postMessage({ type: 'SKIP_WAITING' });
    setShowReload(false);
    window.location.reload();
  };

  return (
    <>
      <Component {...pageProps} />
      
      <Snackbar
        open={showReload}
        message="Nova versão disponível"
        action={
          <Button
            color="secondary"
            size="small"
            onClick={reloadPage}
          >
            Atualizar
          </Button>
        }
      />
    </>
  );
}

export default MyApp; 