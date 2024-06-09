import { DataSnapshot, Database, child, get, onValue, ref, set, update, push, ThenableReference, DatabaseReference } from 'firebase/database';

import { DatabaseInstance } from './firebase';

export default {
    ref: function(path?: string){
        if(path && path != "")
            return ref(DatabaseInstance, path)
        else
            return ref(DatabaseInstance)
    },

    set: async function(path: string | ThenableReference | DatabaseReference , value: unknown){
        if (typeof path === 'string')
            return set(ref(DatabaseInstance, path), value)
        else
            return set(path, value)
    },

    get: get,

    update: async function(path: string, values: object){
        return update(ref(DatabaseInstance, path), values)
    },
    
    child: function(path: string){
        return child(ref(DatabaseInstance), path)
    },

    once: function(path: string | DatabaseReference, callback: (snapshot: DataSnapshot) => unknown, callbackErr?: (error: Error) => unknown){
        if(callbackErr)
            if(typeof path === 'string')
                return onValue(ref(DatabaseInstance, path), callback, callbackErr, {onlyOnce: true})
            else
                return onValue(path, callback, callbackErr, {onlyOnce: true})
        else
            if (typeof path === 'string')
                return onValue(ref(DatabaseInstance, path), callback, {onlyOnce: true})
            else
                return onValue(path, callback, {onlyOnce: true})
    },

    push: function(path: string, value?: unknown){
        if(value)
            return push(ref(DatabaseInstance, path), value);
        else
            return push(ref(DatabaseInstance, path));
    }
}