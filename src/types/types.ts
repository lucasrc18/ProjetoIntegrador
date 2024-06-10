export type Task = {
    description: string,
    difficulty: 0 | 1 | 2 | undefined, // 0 = facil, 1 = medio, 2 = dificil
    completed: boolean
    rotina: 0 | 1 | 2 | undefined
}

export type Goal = {
    description: string,
    date: Date | string, 
    xp: number, 
    coin: number
}