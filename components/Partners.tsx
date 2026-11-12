import { Landmark, Building2, DraftingCompass } from 'lucide-react';

const partners = [
  { icon: Landmark, title: 'Mairies', text: 'Des collectivités nous confient l’entretien et la rénovation de leurs bâtiments.' },
  { icon: Building2, title: 'Agences immobilières', text: 'Remise en état avant vente ou location, dans des délais tenus.' },
  { icon: DraftingCompass, title: 'Architectes', text: 'Nous exécutons leurs projets avec rigueur, du gros œuvre aux finitions.' },
];

export default function Partners() {
  return (
    <div className="partners">
      {partners.map(({ icon: Icon, title, text }) => (
        <div key={title} className="partner">
          <Icon size={28} aria-hidden />
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}
