import { ReactNode } from "react";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export const Container = ({ className = "", children }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-7xl sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
