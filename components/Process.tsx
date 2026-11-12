const steps = [
  {
    number: '01',
    title: 'Visite & étude technique gratuite',
    description:
      'Nous nous déplaçons chez vous à Toulouse ou en agglomération : écoute de vos attentes, prise de cotes et diagnostic des contraintes (murs porteurs, réseaux, isolation).',
  },
  {
    number: '02',
    title: 'Devis clair & délais contractuels',
    description:
      'Vous recevez un devis détaillé poste par poste, sans frais cachés. Les dates de début et de fin de chantier sont fixées noir sur blanc.',
  },
  {
    number: '03',
    title: 'Pilotage & travaux tous corps d’état',
    description:
      'Nos équipes qualifiées réalisent les travaux sous la responsabilité d’un conducteur de travaux dédié. Vous recevez des points d’avancement réguliers avec photos.',
  },
  {
    number: '04',
    title: 'Livraison clés en main',
    description:
      'Nettoyage du chantier, contrôle de chaque détail et remise des clés. Vos travaux sont couverts par notre garantie décennale et notre RC Professionnelle.',
  },
];

export default function Process() {
  return (
    <ol className="steps">
      {steps.map((step) => (
        <li key={step.number} className="step">
          <div className="num">{step.number}</div>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
