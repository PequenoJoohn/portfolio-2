import { ReactNode } from "react";

export interface CarouselProps {
  children: ReactNode;
}

export interface ProjectProps {
  projects: Array<IProject>;
}

export interface IProject {
  nome: string;
  image: string;
}
