// Renders schema.org structured data as a <script type="application/ld+json"> tag.
// "<" is escaped so text inside the data can never close the script tag early.
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
