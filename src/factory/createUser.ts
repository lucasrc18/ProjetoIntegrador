import database from '../services/database';

const { set, get, ref, child } = database;

type InventoryItem = {
    code: string,
    quantity: number
}

type Tasks = {
    id: number,
    title: string,
    description: string,
    dificulty: number,
    completed: boolean
}

type Goals = {
    id: number,
    title: string,
    description: string,
    reward: {
        xp: number,
        coins: number
    },
    deadline: Date,
    completed: boolean
}

export type User = {
    data: {
        username: string | undefined,
        name: string,
        email: string,
        password: string
    },
    stats: {
        level: number,
        xp: number,
        hp: number,
        maxHp: number,
        coins: number
    },
    inventory: InventoryItem[],
    tasks: Tasks[],
    goals: Goals[]
}

export default function createUser(name: string, email: string, passwd: string, username?: string) {
    const user: User = {
        data: {
            username: username,
            name: name,
            email: email,
            password: passwd
        },
        stats: {
            level: 1,
            xp: 0,
            hp: 50,
            maxHp: 50,
            coins: 0
        },
        inventory: [],
        tasks: [],
        goals: []
    };

    const db_userid = user.data.username?.toLowerCase();

    // verify if username is in use

    let user_exists = false;
    get(child(`user-${db_userid}`)).then(res => {
        if(res.exists()){
            user_exists = true;
        }
    });

    if(user_exists)
        return null;
    else
        set(`user-${db_userid}`, user);
    
    return user
}