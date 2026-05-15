export interface AboutStat {
  id: string;
  value: string;
  label: string;
}

export const aboutStats: AboutStat[] = [
  {
    id: "hours",
    value: "1,000+",
    label: "Hours Delivered",
  },
  {
    id: "retention",
    value: "95%",
    label: "Client Retention",
  },
  {
    id: "projects",
    value: "20+",
    label: "Projects Completed",
  },
];
