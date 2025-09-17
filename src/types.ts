export type theme = "light" | "dark";

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  company: string;
  industry: string;
  thumbnail?: string;
}
