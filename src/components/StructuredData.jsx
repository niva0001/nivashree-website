import { Helmet } from "react-helmet-async";

function StructuredData() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nivashree Masala",
      "url": "https://nivashreemasala.com",
      "logo": "https://nivashreemasala.com/logo.png",
      "email": "mailto:nivashreemasala@gmail.com",
      "telephone": "+91-8227885546",
      "sameAs": []
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Nivashree Masala",
      "url": "https://nivashreemasala.com"
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Nivashree Masala",
      "image": "https://nivashreemasala.com/logo.png",
      "url": "https://nivashreemasala.com",
      "telephone": "+91-8227885546",
      "email": "nivashreemasala@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bhatgama",
        "addressLocality": "Dalsingsarai",
        "addressRegion": "Bihar",
        "postalCode": "848114",
        "addressCountry": "IN"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "ContactPoint",
      "telephone": "+91-8227885546",
      "contactType": "customer service",
      "email": "nivashreemasala@gmail.com",
      "availableLanguage": [
        "English",
        "Hindi"
      ]
    }
  ];

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}

export default StructuredData;