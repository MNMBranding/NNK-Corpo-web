export default function LocationMap({ address, name }: { address: string; name: string }) {
  const encoded = encodeURIComponent(address);

  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden">
      <iframe
        src={`https://www.google.com/maps?q=${encoded}&output=embed`}
        className="absolute inset-0 w-full h-full border-0 invert-[0.9] hue-rotate-180 contrast-[0.85] brightness-[0.85] saturate-[0.25]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${name} location map`}
      />
    </section>
  );
}
