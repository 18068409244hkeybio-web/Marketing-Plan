export enum QuadrantId {
  Q1 = 'q1', // Urgent & Important (Top Right)
  Q2 = 'q2', // Urgent & Not Important (Top Left)
  Q3 = 'q3', // Not Urgent & Important (Bottom Right)
  Q4 = 'q4', // Not Urgent & Not Important (Bottom Left)
}

export interface Task {
  id: string;
  text: string;
}

export interface QuadrantData {
  id: QuadrantId;
  title: string;
  subtitle?: string; // Stars or description
  colorHeader: string; // Tailwind class for header bg
  colorBorder: string; // Tailwind class for border
  tasks: Task[];
}

export type MatrixState = Record<QuadrantId, QuadrantData>;

export interface AppData {
  online: MatrixState;
  offline: MatrixState;
}
