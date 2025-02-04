import { ReactNode } from 'react';

interface ResponsiveContainerProps {
  children: ReactNode;
  className?: string;
  fluid?: boolean;
}

const ResponsiveContainer = ({ children, className = '', fluid = false }: ResponsiveContainerProps) => {
  return (
    <div className={`
      ${fluid ? 'w-full' : 'container mx-auto'}
      px-4 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
      ${className}
    `}>
      {children}
    </div>
  );
};

export default ResponsiveContainer; 