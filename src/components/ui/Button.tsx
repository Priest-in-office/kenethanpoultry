import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  id?: string;
  type?: 'button' | 'submit';
}

const baseClasses = 'inline-flex items-center justify-center gap-2 font-sans font-semibold uppercase tracking-[0.08em] rounded-full cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] whitespace-nowrap no-underline';

const variantClasses = {
  primary:   'bg-[#C8E64E] text-[#1A3C2A] border-2 border-transparent hover:bg-[#B8D63E] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,230,78,0.3)]',
  secondary: 'bg-[#1A3C2A] text-white border-2 border-transparent hover:bg-[#2A5C3E] hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(26,60,42,0.3)]',
  outline:   'bg-transparent text-[#1A3C2A] border-2 border-[#1A3C2A] hover:bg-[#1A3C2A] hover:text-white hover:-translate-y-0.5',
  ghost:     'bg-transparent text-[#2C2C2C] border-2 border-transparent pl-0 hover:text-[#1A3C2A] hover:gap-3',
};

const sizeClasses = {
  sm: 'px-6 py-2.5 text-[12px]',
  md: 'px-9 py-3.5 text-[13px]',
  lg: 'px-12 py-[18px] text-[14px]',
};

export default function Button({
  children, variant = 'primary', size = 'md', to, href, onClick, className = '', id, type = 'button',
}: ButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (to) return <Link to={to} className={classes} id={id}>{children}</Link>;
  if (href) return <a href={href} className={classes} id={id} target="_blank" rel="noopener noreferrer">{children}</a>;
  return <button className={classes} onClick={onClick} id={id} type={type}>{children}</button>;
}
