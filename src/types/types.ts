type Task = {
    description: string,
    difficulty: 0 | 1 | 2, // 0 = facil, 1 = medio, 2 = dificil
    completed: boolean
    rotina: "diario" | "semanal" | "mensal"
}

type Goal = {
    description: string,
    date: Date, 
    xp: number, 
    coin: number
}