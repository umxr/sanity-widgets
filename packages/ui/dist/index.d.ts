import { ReactNode } from 'react';

declare const Button: () => JSX.Element;

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

export { Banner, BannerProps, Button, Container };
