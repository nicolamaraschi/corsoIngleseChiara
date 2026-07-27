/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Button,
  useMediaQuery,
  useTheme,
  Stack,
  Typography
} from '@mui/material';
import type { StudentCategory } from '../../types/content';
import { siteContent } from '../../content/siteContent';
import { buildWhatsAppMessage, buildWhatsAppUrl } from '../../utils/whatsapp';

interface ContactDialogProps {
  open: boolean;
  onClose: () => void;
  category: StudentCategory | null;
}

export function ContactDialog({ open, onClose, category }: ContactDialogProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [name, setName] = useState('');
  const [level, setLevel] = useState('');
  const [need, setNeed] = useState('');
  const [lessonMode, setLessonMode] = useState('');
  const [notes, setNotes] = useState('');
  
  const [errors, setErrors] = useState({
    level: false,
    need: false,
    lessonMode: false
  });

  useEffect(() => {
    if (open) {
      // Reset form when opened
      setName('');
      setLevel('');
      setNeed('');
      setLessonMode('');
      setNotes('');
      setErrors({ level: false, need: false, lessonMode: false });
    }
  }, [open]);

  const handleSend = () => {
    const newErrors = {
      level: !level,
      need: !need,
      lessonMode: !lessonMode
    };
    
    setErrors(newErrors);
    
    if (newErrors.level || newErrors.need || newErrors.lessonMode || !category) {
      return;
    }

    const data = {
      teacherName: siteContent.teacher.name.split(' ')[0],
      studentName: name.trim(),
      category: category.title,
      level,
      need,
      lessonMode,
      additionalInformation: notes.trim()
    };
    
    const message = buildWhatsAppMessage(data);
    const phone = import.meta.env.VITE_WHATSAPP_PHONE || siteContent.teacher.whatsappPhone;
    const url = buildWhatsAppUrl(phone, message);
    
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const modeOptions = ['Online', 'A domicilio', 'Presso la sede', 'Da valutare'];

  if (!category) return null;

  return (
    <Dialog open={open} onClose={onClose} fullScreen={isMobile} maxWidth="sm" fullWidth>
      <DialogTitle fontWeight={700}>Richiedi informazioni</DialogTitle>
      <DialogContent dividers>
        <Stack spacing={3}>
          <Box>
             <Typography variant="body2" color="text.secondary" gutterBottom>
               Percorso selezionato
             </Typography>
             <Typography variant="body1" fontWeight={600}>
               {category.title}
             </Typography>
          </Box>
          
          <TextField
            label="Nome (facoltativo)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
          
          <TextField
            select
            label="Classe o livello *"
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
              setErrors(prev => ({ ...prev, level: false }));
            }}
            error={errors.level}
            helperText={errors.level ? 'Campo obbligatorio' : ''}
            fullWidth
          >
            {category.levelOptions.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </TextField>
          
          <TextField
            select
            label="Necessità principale *"
            value={need}
            onChange={(e) => {
              setNeed(e.target.value);
              setErrors(prev => ({ ...prev, need: false }));
            }}
            error={errors.need}
            helperText={errors.need ? 'Campo obbligatorio' : ''}
            fullWidth
          >
            {category.needOptions.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label="Modalità preferita *"
            value={lessonMode}
            onChange={(e) => {
              setLessonMode(e.target.value);
              setErrors(prev => ({ ...prev, lessonMode: false }));
            }}
            error={errors.lessonMode}
            helperText={errors.lessonMode ? 'Campo obbligatorio' : ''}
            fullWidth
          >
            {modeOptions.map((opt) => (
              <MenuItem key={opt} value={opt}>{opt}</MenuItem>
            ))}
          </TextField>
          
          <TextField
            label="Ulteriori informazioni (facoltativo)"
            multiline
            rows={3}
            value={notes}
            onChange={(e) => {
              if (e.target.value.length <= 300) {
                setNotes(e.target.value);
              }
            }}
            helperText={`${notes.length}/300`}
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions sx={{ p: 2, px: 3 }}>
        <Button onClick={onClose} color="inherit">
          Annulla
        </Button>
        <Button onClick={handleSend} variant="contained" color="primary">
          Invia su WhatsApp
        </Button>
      </DialogActions>
    </Dialog>
  );
}

// Needed to avoid React error: 'Box' is not defined. We'll import it above.
import { Box } from '@mui/material';
