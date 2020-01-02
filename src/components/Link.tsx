import React from 'react';

interface LinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ className, href, children }: LinkProps) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
