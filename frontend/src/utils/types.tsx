export type TaskType = {
  id: string;
  name: string;
  category: string;
  status: string;
  startedAt: number;
  completedAt?: number;
  priority: number;
  rewards: Array<string>;
  proficiencies: Array<string>;
};

export type ProfileType = {
  name: string;
  avatar: string;
  level: number;
  levelPure: number;
  xp: number;
  budget: number;
  stats: Record<string, number>;
  proficiencies: Record<string, number>;
};

export type DeleteTaskType = (id: string) => void;

export type CompleteTaskType = (id: string) => void;

export type ChangeStatusTaskType = (id: string, status: string) => void;
