import { ReactNode } from "react";
import { Container } from "ui";

type SanityContentPortalProps = {
  documentType: string;
  documentId: string;
  children: ReactNode;
  enabled: boolean;
};

export const SanityContentPortal = ({
  documentType,
  documentId,
  enabled,
  children,
}: SanityContentPortalProps) => {
  const openInSanityEditor = () => {
    const origin = window.location.origin.includes("localhost")
      ? "http://localhost:3333"
      : "https://sanity-widgets-studio.vercel.app";
    const url = `${origin}/desk/${documentType};${documentId}`;
    window.open(url, "_blank");
  };
  if (enabled) {
    return (
      <div
        className="relative group cursor-pointer"
        onClick={openInSanityEditor}
      >
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent bg-gray-900 bg-opacity-0 group-hover:bg-opacity-75 group-hover:border-red-500 z-10" />
        {children}
      </div>
    );
  }

  return <>{children}</>;
};
