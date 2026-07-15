import { Helmet } from "react-helmet-async";

function SEO({
  title,
  description,
  image = "https://nivashreemasala.com/logo.png",
  url = "https://nivashreemasala.com",
}) {
  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta
        name="keywords"
        content="Nivashree Masala, Premium Sabudana, Sabudana, Jeera, Tej Patta, Nakul Dana, Cutting Mishri, Indian Food Products"
      />

      <meta name="author" content="Nivashree Masala" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Nivashree Masala" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;