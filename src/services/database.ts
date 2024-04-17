import { child, get, ref, set, update } from 'firebase/database';

import { DatabaseInstance } from './firebase';

export default {
    ref: function(path: string){
        return ref(DatabaseInstance, path)
    },

    set: async function(path: string, value: unknown){
        return set(ref(DatabaseInstance, path), value)
    },

    get: get,

    update: async function(path: string, values: object){
        return update(ref(DatabaseInstance, path), values)
    },
    
    child: function(path: string){
        return child(ref(DatabaseInstance), path)
    }
}