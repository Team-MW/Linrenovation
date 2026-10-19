import { Calendar, FileText, Wrench, Award } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Visite & étude technique gratuite',
    description:
      'Nous nous déplaçons chez vous à Toulouse ou en agglomération : écoute de vos attentes, prise de cotes et diagnostic des contraintes (murs porteurs, réseaux, isolation).',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Devis clair & délais contractuels',
    description:
      'Sous 48 h, vous recevez un devis détaillé poste par poste, sans frais cachés. Les dates de début et de fin de chantier sont fixées noir sur blanc.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Pilotage & travaux tous corps d’état',
    description:
      'Nos équipes qualifiées réalisent les travaux sous la responsabilité d’un conducteur de travaux dédié. Vous recevez des points d’avancement réguliers avec photos.',
  },
  {
    number: '04',
    icon: Award,
    title: 'Livraison clés en main',
    description:
      'Nettoyage du chantier, contrôle de chaque détail et remise des clés. Vos travaux sont couverts par notre garantie décennale et notre RC Professionnelle.',
  },
];

export default function Process() {
  return (
    <div className="grid-steps">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <div key={step.number} className="step-card">
            <div className="step-top">
              <div className="icon-tile icon-tile-white">
                <Icon size={22} />
              </div>
              <span className="step-number">{step.number}</span>
            </div>
            <h3 className="card-title" style={{ fontSize: '19px' }}>{step.title}</h3>
            <p className="card-text" style={{ marginBottom: 0 }}>{step.description}</p>
          </div>
        );
      })}
    </div>
  );
}
