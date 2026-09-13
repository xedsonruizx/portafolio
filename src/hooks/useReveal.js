import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const show = (el) => el.classList.add('visible');

    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            show(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      // threshold 0 = cualquier píxel visible ya dispara
      // rootMargin sin negativo para no cortar viewport en mobile
      { threshold: 0, rootMargin: '0px' }
    );

    els.forEach((el) => observer.observe(el));

    // Fallback: si por algún motivo el observer no disparó,
    // mostrar todo después de 800ms (cubre SSR, tabs en background, etc.)
    const fallback = setTimeout(() => {
      document.querySelectorAll('.reveal:not(.visible)').forEach(show);
    }, 800);

    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);
}
