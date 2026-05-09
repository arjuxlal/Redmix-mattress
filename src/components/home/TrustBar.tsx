import { ShieldCheck, Truck, MoonStar } from "lucide-react";

export default function TrustBar() {
  const features = [
    {
      icon: <ShieldCheck size={36} className="text-secondary" strokeWidth={1.5} />,
      title: "5-Year Warranty",
      description: "Built to last. Rest easy with comprehensive coverage."
    },
    {
      icon: <Truck size={36} className="text-secondary" strokeWidth={1.5} />,
      title: "Free Delivery",
      description: "Direct tracking to your door in a compact box."
    }
  ];

  return (
    <div className="bg-slate-50 border-y border-slate-200 my-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="py-8 px-6 flex items-center space-x-6 hover:bg-slate-100/50 transition-colors cursor-default group">
              <div className="flex-shrink-0 bg-white p-3 rounded-2xl shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-primary font-bold text-lg">{feature.title}</h3>
                <p className="text-slate-500 text-sm font-medium mt-1 leading-snug">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
