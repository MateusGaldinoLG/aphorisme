import { Store } from 'vuex'
import VueRouter from 'vue-router'

declare module '@vue/runtime-core'{
    interface ComponentCustomProperties<T>{
        $store: Store<T>;
    }
}

declare module 'vue/types/vue' {
  interface Vue {
    $route: VueRouter
  }
}
