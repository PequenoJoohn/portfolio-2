import { ReactNode } from "react";

export interface CarouselProps {
  children: ReactNode;
}

export interface ProjectProps {
  projects: Array<IProject>;
}

export interface IProject {
  name: string;
  image: string;
}

export interface IPerson {
  name: string;
}
