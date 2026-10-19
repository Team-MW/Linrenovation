import { MapPin, Navigation, Check } from 'lucide-react';
import { toulouseDistricts, surroundingCities } from '@/lib/content';

export default function ZoneIntervention() {
  const zones = [
    { icon: MapPin, title: 'Toulouse intra-muros', items: toulouseDistricts },
    { icon: Navigation, title: 'Métropole & agglomération', items: surroundingCities },
  ];

  return (
    <div className="grid-two">
      {zones.map((zone) => {
        const Icon = zone.icon;
        return (
          <div key={zone.title} className="soft-panel">
            <div className="panel-head">
              <div className="icon-tile icon-tile-white icon-tile-sm">
                <Icon size={20} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 600 }}>{zone.title}</h3>
            </div>
            <ul className="zone-list">
              {zone.items.map((item) => (
                <li key={item}>
                  <Check size={14} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
