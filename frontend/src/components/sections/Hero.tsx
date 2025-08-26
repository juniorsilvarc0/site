'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/Header';

function SearchForm() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-[600px]">
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-semibold mb-2">Tipo de imóvel</label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white">
            <option>Casa</option>
            <option>Apartamento</option>
            <option>Terreno</option>
            <option>Comercial</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white text-gray-600">
              <option>Localização</option>
              <option>Parnaíba</option>
              <option>Magalhães de Almeida</option>
              <option>São Bernardo</option>
            </select>
          </div>
          <div>
            <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white text-gray-600">
              <option>Faixa de preço</option>
              <option>Até R$ 300.000</option>
              <option>R$ 300.000 - R$ 500.000</option>
              <option>R$ 500.000+</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Buscar"
            className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
          />
          <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors duration-300 whitespace-nowrap">
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  // Imagens originais
  const heroImages = [
    '/hero-image-1.jpeg',
    '/hero-image-2.jpeg',
    '/hero-image-3.jpeg',
    '/hero-image-4.jpeg',
    '/hero-image-5.jpeg',
  ];

  // Monta faixa com clones: [last, ...original, first]
  const slides = [heroImages[heroImages.length - 1], ...heroImages, heroImages[0]];

  // Começa no índice 1 (primeiro slide real)
  const [index, setIndex] = useState(1);
  const [withTransition, setWithTransition] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = useCallback(() => {
    setWithTransition(true);
    setIndex((i) => i + 1);
  }, []);

  const prev = () => {
    setWithTransition(true);
    setIndex((i) => i - 1);
  };

  // Auto-play
  useEffect(() => {
    if (heroImages.length <= 1) return;
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next, heroImages.length]);

  // Ao terminar a transição, faz o "snap" invisível quando está em um clone
  const handleTransitionEnd = () => {
    if (index === slides.length - 1) {
      // Estava no clone do último -> snap para o primeiro real
      setWithTransition(false);
      setIndex(1);
    } else if (index === 0) {
      // Estava no clone do primeiro -> snap para o último real
      setWithTransition(false);
      setIndex(slides.length - 2);
    }
  };

  // Reativa a transição após um snap (no próximo frame)
  useEffect(() => {
    if (!withTransition) {
      const id = requestAnimationFrame(() => setWithTransition(true));
      return () => cancelAnimationFrame(id);
    }
  }, [withTransition]);

  return (
    <>
      <header className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-6">
          <Header />
        </div>
      </header>

      <section className="bg-slate-900 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          {/* Esquerda */}
          <div className="bg-slate-900 text-white flex justify-center items-center p-8 lg:p-16">
            <div className="w-full">
              <div className="max-w-md mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Temos a chave<br />
                  para o seu<br />
                  sonho
                </h1>
                <p className="text-lg text-gray-300 mb-8">
                  Descubra o lugar perfeito para viver
                  com nossa seleção de imóveis.
                </p>
              </div>
              <div className="mt-4 flex justify-center">
                <SearchForm />
              </div>
            </div>
          </div>

          {/* Direita (carrossel) */}
          <div className="relative min-h-[600px]">
            {/* Máscara com raio no canto e sem transform */}
            <div className="absolute inset-0 overflow-hidden rounded-tl-[3rem] bg-slate-900">
              {/* Faixa deslizante */}
              <div
                className={[
                  'flex h-full will-change-transform',
                  withTransition ? 'transition-transform duration-700 ease-in-out' : '',
                ].join(' ')}
                style={{ transform: `translate3d(-${index * 100}%,0,0)` }}
                onTransitionEnd={handleTransitionEnd}
              >
                {slides.map((src, i) => (
                  <div key={`${src}-${i}`} className="w-full flex-shrink-0 relative">
                    <Image
                      src={src}
                      alt={`Imagem do carrossel ${i + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority={i === 1} // primeiro real
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Controles */}
            <div className="absolute bottom-6 right-6 flex gap-2 z-10">
              <button
                onClick={() => {
                  if (intervalRef.current) clearInterval(intervalRef.current);
                  prev();
                }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Anterior"
              >
                &#8249;
              </button>
              <button
                onClick={() => {
                  if (intervalRef.current) clearInterval(intervalRef.current);
                  next();
                }}
                className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                aria-label="Próxima"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
