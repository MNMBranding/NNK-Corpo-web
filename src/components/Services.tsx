import Image from 'next/image';
import Link from 'next/link';

const services = [
  {
    title: 'NNK AIRA | 3 BHK + HOME THEATRE',
    description: 'A hill-top living, grounded in peace',
    image: '/assets/675c20c228d1b98f7d5d34ef_photo-1.jpeg',
    link: '/service/conceptual-design',
  },
  {
    title: 'NNK ARAVALI | 2 BHK',
    description: 'Shaikpet’s Landmark Address for Elevated Living',
    image: '/assets/6760092ea6b15b1155e2e144_photo-2.avif',
    link: '/service/architectural-planning',
  },
  {
    title: 'NNK VYOMA | 3 BHK',
    description: 'A Community Crafted for Connoisseurs',
    image: '/assets/676015800f8658c7096cb490_photo-3.avif',
    link: '/service/interior-design',
  },
  {
    title: 'NNK VRINDAVAN | 2 & 3 BHK',
    description: 'Discover a Life of Harmony and Elegance',
    image: '/assets/6760169610470581a9fd8433_photo-4.avif',
    link: '/service/project-management',
  }
];

export default function Services() {
  return (
    <section className="bg-main text-white py-[100px] md:py-[200px] px-[3%] overflow-hidden">
      <div className="max-w-[1240px] mx-auto w-full relative">
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-0 mb-16 md:mb-32">
          <div className="md:col-start-1 md:col-end-3 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80">
              PROJECTS AT A GLANCE
            </span>
          </div>
          <div className="md:col-start-5 md:col-end-12">
            <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight">
              A curated portfolio of  iconic residences, defined by<span className="text-[#a1a1aa]"> timeless elegance, architectural excellence, and refined living</span>.
            </h2>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <Link 
              key={idx} 
              href={service.link}
              className="group relative h-[400px] md:h-[600px] block overflow-hidden bg-[#141414]"
            >
              {/* Image Background */}
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105" 
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none" />

              {/* Text Content */}
              <div className="absolute top-[30px] left-[30px] md:top-[50px] md:left-[50px] max-w-[85%] md:max-w-[73%] z-10">
                <div className="uppercase text-sm tracking-wide font-medium mb-3">
                  {service.title}
                </div>
                <p className="text-xl md:text-[25px] font-semibold leading-tight opacity-100">
                  {service.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 bg-[#141414]/90 backdrop-blur-sm rounded-full w-[80px] h-[80px] flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <span className="text-white text-[40px] leading-none font-light block pb-[4px]">
                  +
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
