import { Container } from "./Container";

export type BannerProps = {
  _id: string;
  _type: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
};

export const Banner = ({
  title,
  subtitle,
  description,
  image,
}: BannerProps) => {
  return (
    <div className="relative shadow-xl sm:overflow-hidden">
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src={image}
          alt="Banner Image"
        />
        <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
      </div>
      <div className="relative py-16 px-6 sm:py-24 lg:py-32 lg:px-8">
        <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-white">{title}</span>
          <span className="block text-indigo-200">{subtitle}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
          {description}
        </p>
      </div>
    </div>
  );
};
