import { FaUser, FaBolt, FaBan, FaMobileAlt } from "react-icons/fa";

export default function FeatureList() {
  const features = [
    { icon: <FaUser />, text: "User-friendly" },
    { icon: <FaBolt />, text: "Fast & Secure" },
    { icon: <FaBan />, text: "No Ads" },
    { icon: <FaMobileAlt />, text: "Device-Friendly" },
  ];

  return (
    <section className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Features</h2>
      <ul className="grid grid-cols-2 gap-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-textSecondary">{feature.icon}</span>
            <span className="text-text">{feature.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
