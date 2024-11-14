export interface Section {
  title: string;
  items: {
    label: string;
    type:
      | "button"
      | "select"
      | "input"
      | "toggle"
      | "numberRange"
      | "multiSelect";
    options?: { label: string; value: string }[];
  }[];
}
