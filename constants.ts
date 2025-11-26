import { MatrixState, QuadrantId } from "./types";

const INITIAL_TASK_COUNT = 8;

const createEmptyTasks = (count: number) => 
  Array.from({ length: count }, (_, i) => ({ id: `task-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`, text: '' }));

export const createInitialMatrix = (): MatrixState => ({
  [QuadrantId.Q2]: { // Top Left
    id: QuadrantId.Q2,
    title: "紧急 不重要",
    subtitle: "★★☆",
    colorHeader: "bg-orange-500",
    colorBorder: "border-orange-500",
    tasks: createEmptyTasks(INITIAL_TASK_COUNT),
  },
  [QuadrantId.Q1]: { // Top Right
    id: QuadrantId.Q1,
    title: "紧急 且 重要",
    subtitle: "★★★",
    colorHeader: "bg-red-700",
    colorBorder: "border-red-700",
    tasks: createEmptyTasks(INITIAL_TASK_COUNT),
  },
  [QuadrantId.Q4]: { // Bottom Left
    id: QuadrantId.Q4,
    title: "不紧急 不重要",
    subtitle: "☆☆☆",
    colorHeader: "bg-sky-400",
    colorBorder: "border-sky-400",
    tasks: createEmptyTasks(INITIAL_TASK_COUNT),
  },
  [QuadrantId.Q3]: { // Bottom Right
    id: QuadrantId.Q3,
    title: "重要 不紧急",
    subtitle: "★★☆",
    colorHeader: "bg-blue-800",
    colorBorder: "border-blue-800",
    tasks: createEmptyTasks(INITIAL_TASK_COUNT),
  },
});
