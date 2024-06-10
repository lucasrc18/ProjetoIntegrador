export type Task = {
    description: string,
    difficulty: 0 | 1 | 2 | undefined, // 0 = facil, 1 = medio, 2 = dificil
    lastTimeCompleted: Date | string,
    routine: 0 | 1 | 2 | undefined,
    completed?: boolean
}

export type Goal = {
    description: string,
    deadline: Date | string, 
    xp: number, 
    coin: number,
    completed?: boolean
}