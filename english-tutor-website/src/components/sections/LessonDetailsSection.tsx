import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import {
  LaptopMac as LaptopMacIcon,
  Home as HomeIcon,
  Business as BusinessIcon
} from '@mui/icons-material';
import { siteContent } from '../../content/siteContent';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeading } from '../common/SectionHeading';
import type { LessonMode } from '../../types/content';
import { WhatsAppButton } from '../common/WhatsAppButton';

export function LessonDetailsSection() {
  const getIcon = (iconName: LessonMode['icon']) => {
    switch (iconName) {
      case 'online': return <LaptopMacIcon sx={{ fontSize: 40, color: 'secondary.main' }} />;
      case 'home': return <HomeIcon sx={{ fontSize: 40, color: 'secondary.main' }} />;
      case 'studio': return <BusinessIcon sx={{ fontSize: 40, color: 'secondary.main' }} />;
      default: return <LaptopMacIcon sx={{ fontSize: 40, color: 'secondary.main' }} />;
    }
  };

  const getPriceText = (price?: string) => {
    if (!price || price === 'Inserire prezzo') {
      return 'Contattami per conoscere il prezzo';
    }
    return price;
  };

  return (
    <SectionContainer id="modalita-prezzi" bg="default">
      <SectionHeading title="Modalità, luogo e prezzi" />

      <Grid container spacing={4} justifyContent="center" mb={6}>
        {siteContent.lessonModes.map((mode) => (
          <Grid item xs={12} sm={8} md={4} key={mode.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box display="flex" alignItems="center" gap={2} mb={3}>
                  {getIcon(mode.icon)}
                  <Typography variant="h6" component="h3" fontWeight={700}>
                    {mode.title}
                  </Typography>
                </Box>
                
                <Typography variant="body1" paragraph color="text.secondary">
                  {mode.description}
                </Typography>
                
                <Box mb={4} flexGrow={1}>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Luogo:</strong> {mode.location}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    <strong>Prezzo:</strong> {getPriceText(mode.price)}
                  </Typography>
                </Box>
                
                <WhatsAppButton 
                  label="Chiedi disponibilità" 
                  variant="contained" 
                  fullWidth 
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      
      <Typography variant="body2" textAlign="center" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
        * Durata, frequenza e programma vengono definiti in base agli obiettivi dello studente.
      </Typography>
    </SectionContainer>
  );
}
