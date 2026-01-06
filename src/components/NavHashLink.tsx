import { useNavigate, useLocation } from 'react-router-dom';

interface NavHashLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavHashLink({ to, children, className, onClick }: NavHashLinkProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Extract path and hash from the 'to' prop
    const [path, hash] = to.split('#');

    // If we're already on the target path, just scroll
    if (location.pathname === path || (!path && location.pathname === '/')) {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // Navigate to the new path with hash
      navigate(to);
    }

    // Call optional onClick handler (for closing mobile menu, etc.)
    if (onClick) {
      onClick();
    }
  };

  return (
    <a href={to} onClick={handleClick} className={`cursor-pointer ${className || ''}`}>
      {children}
    </a>
  );
}
