import React, { createContext, useState, ReactNode } from "react";

export interface Habit {
  id: string;
  nome: string;
  completed: boolean;
}

interface HabitsContextType {
  habits: Habit[];
  addHabit: (nome: string) => void;
  toggleHabit: (id: string) => void;
}

export const HabitsContext = createContext<HabitsContextType>({
  habits: [],
  addHabit: () => {},
  toggleHabit: () => {},
});

export function HabitsProvider({ children }: { children: ReactNode }) {
  const [habits, setHabitos] = useState<Habit[]>([
    { id: "1", nome: "Beber água", completed: false },
    { id: "2", nome: "Dormir 8h", completed: false },
  ]);

  const addHabit = (nome: string) => {
    const newHabit: Habit = { id: String(Date.now()), nome, completed: false };
    setHabitos((prev) => [...prev, newHabit]);
  };

  const toggleHabit = (id: string) => {
    setHabitos((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <HabitsContext.Provider value={{ habits, addHabit, toggleHabit }}>
      {children}
    </HabitsContext.Provider>
  );
}
