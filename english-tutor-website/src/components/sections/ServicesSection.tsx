import { useState } from 'react';
import { Grid, Card, CardContent, Typography, Box, Button } from '@mui/material';
import {
  ChildCare as ChildCareIcon,
  AutoStories as AutoStoriesIcon,
  ConnectWithoutContact as ConnectWithoutContactIcon
} from '@mui/icons-material';
import { siteContent } from '../../content/siteContent';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeading } from '../common/SectionHeading';
import { ContactDialog } from '../common/ContactDialog';
import type { StudentCategory } from '../../types/content';

export function ServicesSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<StudentCategory | null>(null);

  const getIcon = (iconName: StudentCategory['icon']) => {
    switch (iconName) {
      case 'children': return <ChildCareIcon sx={{ fontSize: 48, color: 'primary.main' }} />;
      case 'school': return <AutoStoriesIcon sx={{ fontSize: 48, color: 'primary.main' }} />;
      case 'adult': return <ConnectWithoutContactIcon sx={{ fontSize: 48, color: 'primary.main' }} />;
      default: return <AutoStoriesIcon sx={{ fontSize: 48, color: 'primary.main' }} />;
    }
  };

  const handleOpenDialog = (category: StudentCategory) => {
    setSelectedCategory(category);
    setDialogOpen(true);
  };

  return (
    <SectionContainer id="percorsi" bg="paper">
      <SectionHeading 
        title="Trova il percorso adatto a te" 
        subtitle="Scegli la tua situazione e raccontami brevemente il tuo obiettivo."
      />

      <Grid container spacing={4} justifyContent="center">
        {siteContent.studentCategories.map((category) => (
          <Grid item xs={12} sm={8} md={4} key={category.id}>
            <Card 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                }
              }}
            >
              <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <Box mb={3} textAlign="center">
                  {getIcon(category.icon)}
                </Box>
                
                <Typography variant="h5" component="h3" fontWeight={700} textAlign="center" gutterBottom>
                  {category.title}
                </Typography>
                
                <Typography variant="subtitle2" color="secondary.main" textAlign="center" mb={3} fontWeight={700} textTransform="uppercase">
                  {category.target}
                </Typography>
                
                <Box mb={4} flexGrow={1}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    <strong>Servizio:</strong> {category.service}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Risultato:</strong> {category.result}
                  </Typography>
                </Box>
                
                <Button 
                  variant="outlined" 
                  color="primary" 
                  fullWidth 
                  onClick={() => handleOpenDialog(category)}
                  sx={{ mt: 'auto', borderWidth: 2, '&:hover': { borderWidth: 2 } }}
                >
                  Scegli questo percorso
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <ContactDialog 
        open={dialogOpen} 
        onClose={() => setDialogOpen(false)} 
        category={selectedCategory} 
      />
    </SectionContainer>
  );
}
