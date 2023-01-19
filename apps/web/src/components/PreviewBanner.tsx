import React from "react";

type PreviewBannerProps = {
  enabled: boolean;
};

export const PreviewBanner = ({ enabled }: PreviewBannerProps) => {
  if (enabled) {
    return (
      <div className="w-full bg-red-500 text-white text-center py-2">
        <p className="text-sm text-white">
          You are in preview mode.{" "}
          <a href="/api/exit-preview" className="underline hover:text-gray-300">
            Click here
          </a>{" "}
          to exit preview mode.
        </p>
      </div>
    );
  }

  return null;
};
