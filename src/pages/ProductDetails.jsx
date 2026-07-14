import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaWhatsapp,
  FaPhoneAlt,
  FaStar,
} from "react-icons/fa";

import products from "../data/products";

function ProductDetails() {
  const { slug } = useParams();

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-green-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-800">
            Product Not Found
          </h1>

          <Link
            to="/products"
            className="inline-block mt-8 bg-green-700 text-white px-8 py-3 rounded-full"
          >
            Back to Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-green-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-900"
        >
          <FaArrowLeft />
          Back to Products
        </Link>

        {/* Product */}
        <div className="mt-10 bg-white rounded-3xl shadow-xl p-8 lg:p-12 grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="w-80 hover:scale-105 transition duration-300"
            />
          </div>

          {/* Details */}
          <div>
            <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {product.badge}
            </span>

            <h1 className="text-5xl font-bold text-green-800 mt-5">
              {product.name}
            </h1>

            <div className="flex gap-1 text-yellow-500 mt-4">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="text-gray-600 mt-6 leading-8 text-lg">
              {product.description}
            </p>

            {/* Pack Sizes */}
            <div className="mt-8">
              <h3 className="font-bold text-xl text-green-800">
                Available Pack Sizes
              </h3>

              <div className="flex flex-wrap gap-4 mt-4">
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mt-8">
              <h3 className="font-bold text-xl text-green-800">
                Why Choose Nivashree?
              </h3>

              <ul className="mt-4 space-y-3 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>✔ {feature}</li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/918227885546"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
              >
                <FaWhatsapp />
                WhatsApp
              </a>

              <a
                href="tel:+918227885546"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
              >
                <FaPhoneAlt />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;