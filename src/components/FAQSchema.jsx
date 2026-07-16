function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is Nivashree Sabudana suitable for fasting (Vrat)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our premium Sabudana is carefully selected and ideal for preparing fasting dishes like Khichdi, Kheer and Vada."
        }
      },
      {
        "@type": "Question",
        "name": "Which products does Nivashree offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We currently offer Premium Sabudana, Jeera, Tej Patta, Nakuldana and Cutting Mishri."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide dealership opportunities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We welcome distributors and dealers across India. Fill out the Dealer Inquiry form and our team will contact you."
        }
      },
      {
        "@type": "Question",
        "name": "How can I contact Nivashree?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can contact us through Phone, WhatsApp, Email or by filling out the Contact Form on our website."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Nivashree Masala located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our business is based in Bihar, India."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose Nivashree products?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on premium quality, hygienic packaging, authentic taste and customer satisfaction."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default FAQSchema;