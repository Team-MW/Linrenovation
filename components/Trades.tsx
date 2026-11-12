import { Zap, Droplet, Layers, PaintRoller, Grid3x3 } from 'lucide-react';

export const trades = [
  { icon: Zap, label: 'Électricité' },
  { icon: Droplet, label: 'Plomberie / chauffage' },
  { icon: Layers, label: 'Placo / isolation' },
  { icon: PaintRoller, label: 'Peinture' },
  { icon: Grid3x3, label: 'Revêtements de sols' },
];

/** Bandeau des corps de métier, sous le hero. */
export default function Trades() {
  return (
    <div className="trades">
      <div className="container trades-in">
        <span className="trades-label">Nos corps de métier</span>
        <ul className="trades-list">
          {trades.map(({ icon: Icon, label }) => (
            <li key={label}>
              <Icon size={18} aria-hidden />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
