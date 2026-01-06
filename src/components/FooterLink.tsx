import { Link, useLocation } from 'react-router-dom';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export function FooterLink({ to, children, className }: FooterLinkProps) {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If clicking on the current page, scroll to top
    if (location.pathname === to) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
