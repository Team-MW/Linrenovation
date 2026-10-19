interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  as?: 'h1' | 'h2';
}

export default function SectionHeading({ eyebrow, title, description, as: Tag = 'h2' }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <div className="eyebrow-badge">{eyebrow}</div>
      <Tag className="section-title">{title}</Tag>
      {description && <p className="section-lead">{description}</p>}
      <div className="da-separator" />
    </div>
  );
}
