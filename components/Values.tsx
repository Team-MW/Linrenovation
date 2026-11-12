import { Heart, ReceiptText, ShieldCheck, MapPin } from 'lucide-react';

const values = [
  { icon: Heart, title: 'À l’écoute', text: 'On part de votre vie, pas d’un catalogue.' },
  { icon: ReceiptText, title: 'Devis transparent', text: 'Un prix clair, tenu jusqu’au bout.' },
  { icon: ShieldCheck, title: 'Garantie décennale', text: 'Assurée, déclarée, on répond de tout.' },
  { icon: MapPin, title: 'Artisans locaux', text: 'Une équipe toulousaine, pas de sous-traitance au rabais.' },
];

export default function Values() {
  return (
    <div className="values-block">
      <div>
        <span className="eyebrow-badge">Nos valeurs</span>
        <p className="values-quote">
          Lin Rénovation, ce sont des <span className="serif-i">hommes et des femmes</span> proches de leurs clients, qui
          vous accompagnent dans vos projets.
        </p>
      </div>
      <div className="values">
        {values.map(({ icon: Icon, title, text }) => (
          <div key={title} className="value">
            <Icon size={22} aria-hidden />
            <div>
              <b>{title}</b>
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
