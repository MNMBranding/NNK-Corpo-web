export default function LocationMap({ address, name }: { address: string; name: string }) {
  const encoded = encodeURIComponent(address);

  return (
    <section className="relative w-full h-[60vh] md:h-screen overflow-hidden mb-[50px] md:mb-[100px]">
      <iframe
        src={`https://www.google.com/maps?q=${encoded}&output=embed`}
        className="absolute inset-0 w-full h-full border-0 saturate-[0.35]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${name} location map`}
      />
    </section>
  );
}
