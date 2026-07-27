import { Box, Typography, Button, Stack } from '@mui/material';
import { CheckCircleOutline as CheckCircleOutlineIcon } from '@mui/icons-material';
import { siteContent } from '../../content/siteContent';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { SectionContainer } from '../layout/SectionContainer';

export function HeroSection() {
  return (
    <SectionContainer bg="paper" sx={{ 
      minHeight: { xs: 'calc(100svh - 56px)', md: 'calc(100vh - 64px)' },
      display: 'flex',
      alignItems: 'center'
    }}>
      <Stack direction={{ xs: 'column-reverse', md: 'row' }} spacing={{ xs: 6, md: 8 }} alignItems="center">
        
        {/* Left column: Text */}
        <Box flex={{ xs: 1, md: 1.2 }} width="100%">
          <Typography variant="overline" color="secondary.main" fontWeight={700} sx={{ display: 'block', mb: 2, letterSpacing: 1.5 }}>
            Lezioni individuali e personalizzate
          </Typography>
          
          <Typography variant="h1" component="h1" fontWeight={800} gutterBottom sx={{ 
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
            lineHeight: 1.1,
            color: 'primary.main',
            mb: 3
          }}>
            {siteContent.hero.headline}
          </Typography>
          
          <Typography variant="h6" component="p" color="text.secondary" sx={{ mb: 4, fontWeight: 400, fontSize: { xs: '1.125rem', md: '1.25rem' } }}>
            {siteContent.hero.subheadline}
          </Typography>
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} mb={5}>
            <WhatsAppButton label={siteContent.hero.primaryCta} size="large" />
            <Button variant="outlined" color="primary" size="large" href="#percorsi" sx={{ borderWidth: 2, '&:hover': { borderWidth: 2 } }}>
              {siteContent.hero.secondaryCta}
            </Button>
          </Stack>
          
          <Stack spacing={1.5}>
            {['Online e in presenza', 'Percorso personalizzato', 'Prima prova gratuita'].map((text, idx) => (
              <Stack key={idx} direction="row" alignItems="center" spacing={1}>
                <CheckCircleOutlineIcon color="secondary" fontSize="small" />
                <Typography variant="body2" fontWeight={600} color="text.primary">
                  {text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
        
        {/* Right column: Image */}
        <Box flex={{ xs: 1, md: 0.8 }} width="100%" display="flex" justifyContent={{ xs: 'center', md: 'flex-end' }}>
          <Box sx={{ 
            position: 'relative',
            width: '100%',
            maxWidth: { xs: 400, md: 500 },
            borderRadius: 4,
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(24, 59, 86, 0.1)',
            aspectRatio: '4/5',
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }
          }}>
            <picture>
              <source srcSet={siteContent.teacher.portraitWebp} type="image/webp" />
              <img
                src={siteContent.teacher.portraitFallback}
                alt={`Ritratto di ${siteContent.teacher.name}, insegnante di inglese`}
                width="640"
                height="800"
                loading="eager"
              />
            </picture>
          </Box>
        </Box>

      </Stack>
    </SectionContainer>
  );
}
