import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const links = [
  { pageName: 'Home', pathname: '' },
  { pageName: 'Projects', pathname: 'projects' },
  { pageName: 'About', pathname: 'about' },
];
type TiltProps = {
  className?: string;
  children?: React.ReactNode;
};
const tiltEffectSettings = {
  max: 25, // max tilt rotation (degrees (deg))
  perspective: 1000, // transform perspective, the lower the more extreme the tilt gets (pixels (px))
  scale: 1.1, // transform scale - 2 = 200%, 1.5 = 150%, etc..
  speed: 500, // speed (transition-duration) of the enter/exit transition (milliseconds (ms))
  easing: 'cubic-bezier(.03,.98,.52,.99)', // easing (transition-timing-function) of the enter/exit transition
};
const Tilt: React.FC<TiltProps> = ({ className, children }) => {
  const tiltRef = React.useRef<HTMLDivElement>(null);
  const cardMouseEnter = (event: any) => {
    setTransition(event);
  };

  const cardMouseMove = (event: any) => {
    const card = event.currentTarget;
    const cardBound = card.getBoundingClientRect();

    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = cardBound.left + cardWidth / 2;
    const centerY = cardBound.top + cardHeight / 2;
    const mouseX = event.clientX - centerX;
    const mouseY = event.clientY - centerY;
    const rotateXUncapped =
      (+1 * tiltEffectSettings.max * mouseY) / (cardHeight / 2);
    const rotateYUncapped =
      (-1 * tiltEffectSettings.max * mouseX) / (cardWidth / 2);
    const rotateX =
      rotateXUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateXUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateXUncapped;
    const rotateY =
      rotateYUncapped < -tiltEffectSettings.max
        ? -tiltEffectSettings.max
        : rotateYUncapped > tiltEffectSettings.max
        ? tiltEffectSettings.max
        : rotateYUncapped;

    card.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) 
							scale3d(${tiltEffectSettings.scale}, ${tiltEffectSettings.scale}, ${tiltEffectSettings.scale})`;
  };

  const cardMouseLeave = (event: any) => {
    event.currentTarget.style.transform = `perspective(${tiltEffectSettings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    setTransition(event);
  };

  const setTransition = (event: any) => {
    const card = event.currentTarget;
    clearTimeout(card.transitionTimeoutId);
    card.style.transition = `transform ${tiltEffectSettings.speed}ms ${tiltEffectSettings.easing}`;
    card.transitionTimeoutId = setTimeout(() => {
      card.style.transition = '';
    }, tiltEffectSettings.speed);
  };
  React.useEffect(() => {
    if (tiltRef && tiltRef.current) {
      tiltRef.current.addEventListener('mouseenter', cardMouseEnter);
      tiltRef.current.addEventListener('mousemove', cardMouseMove);
      tiltRef.current.addEventListener('mouseleave', cardMouseLeave);
      return () => {};
    }
  }, []);

  return (
    <div ref={tiltRef} className={className}>
      {children}
    </div>
  );
};

export default Tilt;
