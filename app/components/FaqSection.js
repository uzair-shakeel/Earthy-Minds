import React from "react";

const FaqSection = () => {
  const faqs = [
    {
      question: "What is Earthy Minds: Rise of the Wild?",
      answer:
        "It's a habit-tracking fantasy adventure where your real-life eco actions shape your journey through the magical world of Biolysium.",
    },
    {
      question: "How do I start?",
      answer:
        "Sign up with your email to get early access. You'll receive your first quest and help bring the app to life as a Founding Guardian.",
    },
    {
      question: "Is it free?",
      answer:
        "Yes, free to play! Watch ads for extra rewards when it suits you. Trueheart fans can support with subs to power the mission.",
    },
    {
      question: "When is it launching?",
      answer:
        "When enough adventurers join, we'll build it! Sign up and show your support. Launch updates will land in your inbox.",
    },
    {
      question: "Where can I give feedback or ask a question?",
      answer:
        "You can always reach out to us at hello@earthyminds.com — we'd love to hear your thoughts.",
    },
  ];

  return (
    <div id="faq" className="max-w-[872px] w-full mx-auto my-10 md:mt-[94px] md:mb-[99px] md:bg-[#B3853E4A]/30 md:border border-[#B3853E] md:p-8 rounded-[10px]">
      <h2 className="text-2xl md:text-3xl font-bold font-cinzel mb-4 md:mb-6">FAQ</h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="text-sm sm:text-xl font-bold font-lora mb-2">
              {index + 1}. {faq.question}
            </h3>
            <p className="text-sm sm:text-xl font-semibold font-lora">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
