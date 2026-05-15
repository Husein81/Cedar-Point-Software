export type IconName = "Award" | "BadgeCheck" | "MessageSquare" | "Globe";

export interface AboutValue {
  id: string;
  icon: IconName;
  title: string;
  description: string;
}

export const values: AboutValue[] = [
  {
    id: "quality",
    icon: "Award",
    title: "Quality Over Quantity",
    description:
      "We'd rather do fewer things exceptionally well than spread ourselves thin.",
  },
  {
    id: "practical",
    icon: "BadgeCheck",
    title: "Practical First",
    description:
      "Everything we teach and build should work in the real world, not just in theory.",
  },
  {
    id: "communication",
    icon: "MessageSquare",
    title: "Clear Communication",
    description:
      "No jargon, no mysteries. We explain what we're doing and why.",
  },
  {
    id: "global-standards",
    icon: "Globe",
    title: "Local Expertise, Global Standards",
    description:
      "We understand the local market while maintaining international quality.",
  },
];
