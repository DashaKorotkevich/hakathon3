import {createStore} from "vuex";
import { postModule } from "./postModule";
export default createStore({
  modules: {
    post: postModule // в компоненте теперь можно к нему обращаться через post
  }
})