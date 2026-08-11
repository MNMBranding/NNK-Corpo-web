export default function FAQSection() {
  const faqs = [
    {
      question: "How Long Does the Design and Construction Process Take?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      question: "What Is the Cost Estimation and Budgeting Process?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      question: "Do You Handle Building Permits and Regulatory Approvals?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      question: "How Do You Incorporate Sustainability into Your Designs?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      question: "Can You Assist with Interior Design and Space Planning?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
      question: "What Sets Your Architecture Services Apart from Others?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    }
  ];

  return (
    <section className="bg-main text-white py-[100px] md:py-[200px] px-[3%]">
      <div className="max-w-[1240px] mx-auto w-full">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[30px] md:gap-[50px] mb-[100px]">
          <div className="md:col-start-1 md:col-end-4 pt-2">
            <span className="uppercase text-sm tracking-wide opacity-80 text-white">
              FAQ
            </span>
          </div>
          <div className="md:col-start-4 md:col-end-13">
            <h2 className="text-[10vw] md:text-[5vw] leading-[1.1] font-medium tracking-tight text-white">
              Frequently <span className="text-[#a1a1aa]">asked questions</span> about our architectural services.
            </h2>
          </div>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[50px] gap-y-[80px]">
          {faqs.map((faq, idx) => (
            <div key={idx} className="md:pr-[5vw]">
              <div className="text-[27px] font-medium leading-[1.2] text-white">
                {faq.question}
              </div>
              <div className="h-[1px] bg-[#262626] my-[25px]" />
              <p className="text-[#a1a1aa] text-[21px] leading-[1.4]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
