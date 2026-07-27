export interface WhatsAppContactData {
  teacherName: string;
  studentName?: string;
  category: string;
  level: string;
  need: string;
  lessonMode: string;
  additionalInformation?: string;
}

export function buildWhatsAppMessage(data: WhatsAppContactData): string {
  const nameLine = data.studentName ? data.studentName : 'Non specificato';
  const additionalInfoLine = data.additionalInformation ? data.additionalInformation : 'Nessuna';

  return `Ciao ${data.teacherName}, ho visto il tuo sito e vorrei ricevere informazioni sulle lezioni di inglese.

Nome: ${nameLine}
Categoria: ${data.category}
Classe o livello: ${data.level}
Obiettivo o necessità: ${data.need}
Modalità preferita: ${data.lessonMode}
Ulteriori informazioni: ${additionalInfoLine}

Vorrei sapere disponibilità, modalità e prezzi. Grazie.`;
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const normalizedPhone = phone.replace(/\D/g, '');
  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(message)}`;
}
