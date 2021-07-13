import { Store } from 'vuex'

declare module '@vue/runtime-core'{
    interface ComponentCustomProperties<T>{
        $store: Store<T>;
    }
}
