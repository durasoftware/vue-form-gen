export interface IComponent {
  component: string;
  key: string;
  value?: any;
  name: string;
  label?: string;
  type?: string;
  options?: { value: string; label: string }[];
  children?: IComponent[];
  direction?: "row" | "column";
}
