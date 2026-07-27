import { Button, Fab } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import { ChatRounded as ChatRoundedIcon } from '@mui/icons-material';
import type { StudentCategory } from '../../types/content';
import { siteContent } from '../../content/siteContent';
import { buildWhatsAppUrl, buildWhatsAppMessage } from '../../utils/whatsapp';

interface WhatsAppButtonProps extends Omit<ButtonProps, 'variant'> {
  label: string;
  category?: StudentCategory;
  variant?: 'contained' | 'outlined';
  fullWidth?: boolean;
}

export function WhatsAppButton({ label, category, variant = 'contained', fullWidth, ...props }: WhatsAppButtonProps) {
  const handleClick = () => {
    const defaultData = {
      teacherName: siteContent.teacher.name.split(' ')[0],
      category: category ? category.title : 'Non specificata',
      level: 'Da definire',
      need: 'Informazioni generali',
      lessonMode: 'Da valutare'
    };
    
    const message = buildWhatsAppMessage(defaultData);
    const url = buildWhatsAppUrl(import.meta.env.VITE_WHATSAPP_PHONE || siteContent.teacher.whatsappPhone, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Button
      variant={variant}
      color="primary"
      startIcon={<ChatRoundedIcon />}
      fullWidth={fullWidth}
      onClick={handleClick}
      {...props}
    >
      {label}
    </Button>
  );
}

export function WhatsAppFloatingButton() {
  const handleClick = () => {
    const defaultData = {
      teacherName: siteContent.teacher.name.split(' ')[0],
      category: 'Non specificata',
      level: 'Da definire',
      need: 'Informazioni generali',
      lessonMode: 'Da valutare'
    };
    
    const message = buildWhatsAppMessage(defaultData);
    const url = buildWhatsAppUrl(import.meta.env.VITE_WHATSAPP_PHONE || siteContent.teacher.whatsappPhone, message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <Fab
      color="primary"
      aria-label="Contatta l’insegnante tramite WhatsApp"
      onClick={handleClick}
      sx={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 1000,
        width: 56,
        height: 56,
      }}
    >
      <ChatRoundedIcon />
    </Fab>
  );
}
