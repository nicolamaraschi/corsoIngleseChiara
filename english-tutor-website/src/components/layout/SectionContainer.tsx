import { Container, Box } from '@mui/material';
import type { BoxProps } from '@mui/material';
import type { ReactNode } from 'react';

interface SectionContainerProps extends BoxProps {
  id?: string;
  children: ReactNode;
  bg?: 'default' | 'paper' | 'primary' | 'secondary';
}

export function SectionContainer({ id, children, bg = 'default', ...props }: SectionContainerProps) {
  const getBgColor = () => {
    switch (bg) {
      case 'paper': return 'background.paper';
      case 'primary': return 'primary.main';
      case 'secondary': return 'secondary.main';
      default: return 'background.default';
    }
  };

  const getTextColor = () => {
    if (bg === 'primary' || bg === 'secondary') return 'white';
    return 'text.primary';
  };

  return (
    <Box 
      component="section" 
      id={id} 
      sx={{ 
        py: { xs: 8, md: 12 },
        bgcolor: getBgColor(),
        color: getTextColor(),
      }}
      {...props}
    >
      <Container maxWidth="lg">
        {children}
      </Container>
    </Box>
  );
}
