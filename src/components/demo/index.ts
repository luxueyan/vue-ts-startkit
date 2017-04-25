import Vue from 'vue'
import {
  Component
} from 'vue-property-decorator'
import './index.postcss'
const template: Function = require < Function > ('./index.pug')

@Component({
  name: 'Demo',
  template: template()
})
export default class Demo extends Vue {
  get haha(): string {
    return 'hello typescript vue'
  }
}

