import { Typography, Box } from '@mui/material';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <Box textAlign="center" mb={6}>
      <Typography variant="h2" component="h2" fontWeight={700} gutterBottom sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="h6" component="p" color="text.secondary" fontWeight={400} sx={{ maxWidth: 600, mx: 'auto' }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
