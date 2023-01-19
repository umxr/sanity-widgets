import { ReactNode, useCallback, useState } from "react";
import { motion } from "framer-motion";

type SanityContentPortalProps = {
  documentType: string;
  documentId: string;
  children: ReactNode;
  enabled: boolean;
  constraintsRef?: React.RefObject<HTMLElement>;
};

export const SanityContentPortal = ({
  documentType,
  documentId,
  enabled,
  children,
  constraintsRef,
}: SanityContentPortalProps) => {
  const [openPortal, setOpenPortal] = useState<boolean>(false);
  let origin = "";

  if (typeof window !== "undefined") {
    origin = window.location.origin.includes("localhost")
      ? "http://localhost:3333"
      : "https://sanity-widgets-studio.vercel.app";
  }

  const url = `${origin}/desk/${documentType};${documentId}`;

  const openInSanityEditor = () => {
    window.open(url, "_blank");
  };

  const togglePortal = useCallback(() => {
    setOpenPortal((prev) => !prev);
  }, []);

  if (enabled) {
    return (
      <>
        <div className="relative group">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent bg-gray-900 bg-opacity-0 group-hover:bg-opacity-75 group-hover:border-red-500 z-10" />
          <div className="absolute bottom-0 right-0 hidden group-hover:flex space-x-4 z-20 p-6">
            <button
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={openInSanityEditor}
            >
              Open in Editor
            </button>
            <button
              className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={togglePortal}
            >
              {openPortal ? "Close" : "Open"} Portal
            </button>
          </div>
          {children}
        </div>
        {openPortal && (
          <motion.div
            className="h-[500px] w-[450px] bg-red-500 relative z-30 p-6"
            drag
            dragConstraints={constraintsRef}
          >
            <iframe className="h-full w-full" src={url} />
          </motion.div>
        )}
      </>
    );
  }

  return <>{children}</>;
};
