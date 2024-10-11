export default function FAQ() {
  const faqs = [
    {
      question: "What does this tool do?",
      answer:
        "This tool extracts the title, description, and other metadata from YouTube videos.",
    },
    {
      question: "Do we store your personal data?",
      answer:
        "No, we do not store any personal data or YouTube video information.",
    },
    {
      question: "How can I report bugs?",
      answer:
        "Please contact us through our support email if you encounter any issues.",
    },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">FAQ</h2>
      <ul className="space-y-4">
        {faqs.map((faq, index) => (
          <li key={index}>
            <h3 className="font-semibold">{faq.question}</h3>
            <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
