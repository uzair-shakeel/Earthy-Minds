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
    <div className="mt-16 mb-12 bg-[#EAE2C9] p-8 rounded-lg">
      <h2 className="text-3xl font-bold font-cinzel mb-8 text-center">FAQ</h2>

      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <p className="text-lg font-bold font-lora mb-2">
              {index + 1}. {faq.question}
            </p>
            <p className="text-lg font-lora">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
