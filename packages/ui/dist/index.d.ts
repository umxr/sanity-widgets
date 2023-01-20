import { ReactNode } from 'react';

declare const Button: () => JSX.Element;

declare const bannerQuery: string;
type BannerProps = {
    _id: string;
    _type: string;
    title: string;
    subtitle?: string;
    description?: string;
    image?: string;
};
declare const Banner: ({ title, subtitle, description, image, }: BannerProps) => JSX.Element;

type ContainerProps = {
    className?: string;
    children: ReactNode;
};
declare const Container: ({ className, children }: ContainerProps) => JSX.Element;

declare const SanityImage: () => JSX.Element;

export { Banner, BannerProps, Button, Container, SanityImage, bannerQuery };
