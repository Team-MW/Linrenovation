import { Star, CheckCircle } from 'lucide-react';
import { reviews } from '@/lib/content';

function Stars() {
  return (
    <div style={{ display: 'flex', gap: '3px' }} aria-label="5 étoiles sur 5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-24px', marginBottom: '40px' }}>
        <div className="rating-pill">
          <Stars />
          <strong>5,0 / 5</strong>
          <span>· Avis clients à Toulouse</span>
        </div>
      </div>

      <div className="grid-cards">
        {reviews.map((rev) => (
          <figure key={rev.author} className="da-card review-card">
            <div>
              <div className="review-top">
                <Stars />
                <span>{rev.date}</span>
              </div>
              <blockquote className="review-text">« {rev.comment} »</blockquote>
            </div>
            <figcaption className="review-author">
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <strong>{rev.author}</strong>
                <CheckCircle size={15} color="var(--brand-blue)" />
              </div>
              <div className="review-location">{rev.location}</div>
              <div className="review-project">Projet : {rev.project}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
