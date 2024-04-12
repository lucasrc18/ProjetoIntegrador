import { get, ref, set, update } from 'firebase/database';

import { DatabaseInstance } from './firebase';

export default {
    ref: function(path: string){
        return ref(DatabaseInstance, path)
    },

    set: function(path: string, value: unknown){
        return set(this.ref(path), value)
    },

    get: get,

    update: function(path: string, values: object){
        return update(this.ref(path), values)
    }
}