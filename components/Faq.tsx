import { ChevronDown } from 'lucide-react';
import { faqs } from '@/lib/content';

export default function Faq() {
  return (
    <div className="faq-list">
      {faqs.map((f) => (
        <details key={f.q} className="faq-item">
          <summary>
            <span>{f.q}</span>
            <ChevronDown size={18} className="faq-chevron" />
          </summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
