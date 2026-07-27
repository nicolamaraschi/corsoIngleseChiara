import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { siteContent } from '../../content/siteContent';
import { WhatsAppButton } from '../common/WhatsAppButton';

export function Header() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1} sx={{ bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'none' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 56, md: 64 } }}>
          <Typography 
            variant="h6" 
            component="a" 
            href="#" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 700, 
              color: 'primary.main',
              textDecoration: 'none'
            }}
          >
            {/* On mobile, show shorter text if possible, but for now just the name */}
            <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>{siteContent.teacher.name}</Box>
            <Box component="span" sx={{ display: { xs: 'inline', sm: 'none' } }}>English with {siteContent.teacher.name.split(' ')[0]}</Box>
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1, mr: 3 }}>
            <Button color="inherit" href="#chi-sono" sx={{ fontWeight: 600 }}>Chi sono</Button>
            <Button color="inherit" href="#percorsi" sx={{ fontWeight: 600 }}>Percorsi</Button>
            <Button color="inherit" href="#modalita-prezzi" sx={{ fontWeight: 600 }}>Modalità e prezzi</Button>
          </Box>

          <WhatsAppButton label="Contattami" sx={{ display: { xs: 'none', sm: 'flex' } }} />
          <WhatsAppButton label="Chat" sx={{ display: { xs: 'flex', sm: 'none' }, minWidth: 44 }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
