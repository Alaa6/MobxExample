import { makeObservable, observable, action } from 'mobx';

class CounterStore {
    count = 0; // state

    constructor() {
        makeObservable(this, { // دي fuction بتقدمها ال mobxعلشان يتم فيها تعريف ال observales و ال actions
            count: observable, // دا كدا بقوله خلي بالك دا عايز ارقبه
            increment: action,  // دا بقوله خلب بالك دا action يعني functionهتغير في الstate (count)
            decrement: action,
        });
    }

    increment() {
        this.count++;
    }

    decrement() {
        this.count--;
    }
}

const counterStore = new CounterStore();

export default counterStore;
