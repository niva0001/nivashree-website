import { Helmet } from "react-helmet-async";

function SEO({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      <meta
        name="keywords"
        content="Nivashree Masala, Premium Sabudana, Sabudana, Jeera, Indian Food Products"
      />
    </Helmet>
  );
}

export default SEO;