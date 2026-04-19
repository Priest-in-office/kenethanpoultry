import { useEffect, useRef, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  animation?: 'fadeUp' | 'fadeIn' | 'slideLeft' | 'slideRight' | 'scaleUp';
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {}
): RefObject<T | null> {
  const {
    animation = 'fadeUp',
    delay = 0,
    duration = 1,
    stagger = 0,
    once = true,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const children = stagger > 0 ? element.children : [element];

    const fromVars: gsap.TweenVars = { duration, delay, ease: 'power3.out' };
    const toVars: gsap.TweenVars = { duration, delay, ease: 'power3.out' };

    switch (animation) {
      case 'fadeUp':
        Object.assign(fromVars, { opacity: 0, y: 60 });
        Object.assign(toVars, { opacity: 1, y: 0 });
        break;
      case 'fadeIn':
        Object.assign(fromVars, { opacity: 0 });
        Object.assign(toVars, { opacity: 1 });
        break;
      case 'slideLeft':
        Object.assign(fromVars, { opacity: 0, x: 80 });
        Object.assign(toVars, { opacity: 1, x: 0 });
        break;
      case 'slideRight':
        Object.assign(fromVars, { opacity: 0, x: -80 });
        Object.assign(toVars, { opacity: 1, x: 0 });
        break;
      case 'scaleUp':
        Object.assign(fromVars, { opacity: 0, scale: 0.9 });
        Object.assign(toVars, { opacity: 1, scale: 1 });
        break;
    }

    if (stagger > 0) {
      toVars.stagger = stagger;
    }

    gsap.set(children, fromVars);

    ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      once,
      onEnter: () => {
        gsap.to(children, toVars);
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === element) t.kill();
      });
    };
  }, [animation, delay, duration, stagger, once]);

  return ref;
}
