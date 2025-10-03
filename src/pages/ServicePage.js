// src/pages/ServicePage.jsx
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import { services } from "../data/services";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  // Scroll to top when component mounts or slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Service not found</h2>
          <p className="text-gray-600">Check the URL or go back to the homepage.</p>
        </div>
      </div>
    );
  }

  return <ServiceTemplate service={service} />;
}