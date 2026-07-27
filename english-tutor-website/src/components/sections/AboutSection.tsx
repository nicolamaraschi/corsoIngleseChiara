import { Box, Typography, Stack, Chip, Grid, Card, CardContent } from '@mui/material';
import {
  School as SchoolIcon,
  WorkspacePremium as WorkspacePremiumIcon,
  Language as LanguageIcon,
  FormatQuote as FormatQuoteIcon
} from '@mui/icons-material';
import { siteContent } from '../../content/siteContent';
import { SectionContainer } from '../layout/SectionContainer';
import { SectionHeading } from '../common/SectionHeading';
import type { Qualification } from '../../types/content';

export function AboutSection() {
  const getIcon = (iconName: Qualification['icon']) => {
    switch (iconName) {
      case 'school': return <SchoolIcon />;
      case 'certificate': return <WorkspacePremiumIcon />;
      case 'language': return <LanguageIcon />;
      default: return <SchoolIcon />;
    }
  };

  return (
    <SectionContainer id="chi-sono" bg="default">
      <SectionHeading title="Chi sono e come lavoro" subtitle={siteContent.teacher.professionalTitle} />
      
      <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center" mb={10}>
        {/* Video Column */}
        <Grid item xs={12} md={5}>
          <Box sx={{ 
            borderRadius: 4, 
            overflow: 'hidden',
            boxShadow: '0 12px 32px rgba(0,0,0,0.1)',
            bgcolor: 'black',
            aspectRatio: '9/16',
            width: '100%',
            maxWidth: 400,
            mx: 'auto'
          }}>
            <video
              controls
              playsInline
              preload="metadata"
              poster={siteContent.video.poster}
              aria-label={siteContent.video.accessibleDescription}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            >
              <source src={siteContent.video.webm} type="video/webm" />
              <source src={siteContent.video.mp4} type="video/mp4" />
              Il browser non supporta la riproduzione video.
            </video>
          </Box>
          <Typography variant="caption" display="block" textAlign="center" mt={2} color="text.secondary">
            {siteContent.video.accessibleDescription}
          </Typography>
        </Grid>
        
        {/* Text Column */}
        <Grid item xs={12} md={7}>
          <Typography variant="h4" fontWeight={700} color="primary.main" gutterBottom>
            Ciao, sono {siteContent.teacher.name.split(' ')[0]}
          </Typography>
          
          <Typography variant="body1" paragraph fontSize="1.125rem" lineHeight={1.8}>
            {siteContent.teacher.shortIntroduction}
          </Typography>
          
          <Typography variant="body1" paragraph fontSize="1.125rem" lineHeight={1.8}>
            {siteContent.teacher.fullIntroduction}
          </Typography>
          
          <Box mt={4}>
            <Typography variant="overline" color="secondary.main" fontWeight={700} display="block" mb={2}>
              Qualifiche
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap={1.5}>
              {siteContent.qualifications.map(qual => (
                <Chip 
                  key={qual.id} 
                  icon={getIcon(qual.icon)} 
                  label={qual.label} 
                  color="primary"
                  variant="outlined"
                  sx={{ borderRadius: 2, px: 1, py: 2.5, bgcolor: 'background.paper', borderColor: 'primary.main', borderWidth: 2 }}
                />
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>

      {/* Testimonials */}
      <Box mt={8}>
        <Typography variant="h4" textAlign="center" fontWeight={700} mb={6}>
          Cosa dicono i miei studenti
        </Typography>
        
        <Grid container spacing={4}>
          {siteContent.testimonials.map((testimonial) => (
            <Grid item xs={12} sm={6} md={4} key={testimonial.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1, p: 4 }}>
                  <FormatQuoteIcon color="secondary" sx={{ fontSize: 40, opacity: 0.5, mb: 2 }} />
                  <Box component="blockquote" sx={{ m: 0 }}>
                    <Typography variant="body1" paragraph fontStyle="italic" sx={{ minHeight: 80 }}>
                      "{testimonial.quote}"
                    </Typography>
                    <Box component="footer" mt={4}>
                      <Typography variant="subtitle2" fontWeight={700}>
                        {testimonial.author}
                      </Typography>
                      {testimonial.role && (
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      )}
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </SectionContainer>
  );
}
