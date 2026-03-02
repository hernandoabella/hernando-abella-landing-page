"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { FiX, FiLoader, FiMaximize2 } from "react-icons/fi";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  previewUrl: string;
  bookTitle: string;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, onClose, previewUrl, bookTitle }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Asegurar que el portal solo se cree en el cliente
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      document.body.style.overflow = "hidden";
      
      const tl = gsap.timeline();
      tl.to(overlayRef.current, { opacity: 1, duration: 0.3 })
        .fromTo(modalRef.current, 
          { scale: 0.9, opacity: 0, y: 50 }, 
          { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power4.out" }, 
          "-=0.1"
        );
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, previewUrl]); // Se dispara cuando cambia la URL

  if (!mounted || !isOpen) return null;

  const modalContent = (
    <div className="fixed inset-0 w-full h-full z-[10000] flex items-center justify-center p-0 md:p-10 overflow-hidden">
      {/* Overlay con cierre */}
      <div 
        ref={overlayRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl opacity-0 cursor-zoom-out" 
      />

      {/* Contenedor Principal */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-7xl h-full max-h-screen md:max-h-[92vh] bg-[#0a0a0a] border border-white/10 md:rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col"
      >
        {/* Header Superior */}
        <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-zinc-900/40 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="hidden md:flex w-10 h-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <FiMaximize2 size={20} />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm md:text-lg tracking-tight leading-none mb-1">{bookTitle}</h3>
              <p className="text-emerald-500 text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live PDF Preview
              </p>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="group flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 hover:bg-rose-500/20 text-zinc-400 hover:text-rose-500 transition-all border border-white/5"
          >
            <span className="text-[10px] font-black uppercase tracking-widest hidden md:block">Cerrar</span>
            <FiX size={20} />
          </button>
        </div>

        {/* Área del Visor */}
        <div className="flex-1 bg-[#1a1a1a] relative">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-[#0a0a0a]">
              <FiLoader className="animate-spin text-emerald-500 mb-4" size={40} />
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em]">Optimizando Documento...</p>
            </div>
          )}
          
          <iframe 
            src={`${previewUrl}#view=FitH&toolbar=0&navpanes=0`} 
            className={`w-full h-full border-none transition-all duration-1000 ${isLoading ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            onLoad={() => setIsLoading(false)}
            title="Book Preview"
          />
        </div>

        {/* Footer Slim */}
        <div className="px-8 py-3 bg-black/80 border-t border-white/5 flex justify-between items-center">
          
          <p className="text-emerald-500/50 text-[9px] font-bold uppercase tracking-[0.2em]">
            Trial Version
          </p>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default PreviewModal;