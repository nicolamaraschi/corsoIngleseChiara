import { Box, Container, Typography, Link, Stack } from '@mui/material';
import { siteContent } from '../../content/siteContent';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const phone = import.meta.env.VITE_WHATSAPP_PHONE || siteContent.teacher.whatsappPhone;
  const whatsappUrl = buildWhatsAppUrl(phone, 'Salve, vorrei ricevere informazioni.');

  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'center', md: 'flex-start' }} spacing={4}>
          <Box textAlign={{ xs: 'center', md: 'left' }}>
            <Typography variant="h6" fontWeight={700} gutterBottom>
              {siteContent.teacher.name}
            </Typography>
            <Typography variant="body2" color="rgba(255,255,255,0.7)" gutterBottom>
              Lezioni private di inglese a {siteContent.teacher.city} e online
            </Typography>
          </Box>
          
          <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-end' }}>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
              Contattami su WhatsApp
            </Link>
            {/* Placeholder per informativa privacy */}
            <Link href="#" color="rgba(255,255,255,0.7)" underline="hover" sx={{ fontSize: '0.875rem' }}>
              Informativa sulla privacy
            </Link>
          </Stack>
        </Stack>
        
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" color="rgba(255,255,255,0.5)">
            &copy; {currentYear} {siteContent.teacher.name}. Tutti i diritti riservati.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
