import { ShoppingCart, Heart } from "lucide-react";
import { clsx } from "clsx";

export interface ProductProps {
  id: string;
  name: string;
  description: string;
  rating: number;
  reviews: number;
  badge?: string;
  imageColor?: string; // Using colors as image placeholders
  image?: string;
}

export default function ProductCard({ product }: { product: ProductProps }) {
  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Image container mapping */}
      <div className={clsx("relative aspect-[4/3] overflow-hidden w-full", product.imageColor || "bg-slate-100")}>
        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
          />
        )}
        {/* Placeholder image representation overlay */}
        {!product.image && (
          <div className="absolute inset-x-4 bottom-4 top-12 bg-white/20 rounded-xl mix-blend-overlay shadow-inner transform group-hover:scale-105 transition-transform duration-500" />
        )}
      </div>

      <div className="p-6 flex flex-col flex-1 relative overflow-hidden">
        <div className="mb-2 flex items-center space-x-1 text-sm">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-slate-400">({product.reviews})</span>
        </div>
        
        <h3 className="font-bold text-xl text-primary mb-1">{product.name}</h3>
        <p className="text-slate-500 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>
        

      </div>
    </div>
  );
}
