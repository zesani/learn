import Vue from 'vue'
import Vuex from 'vuex'
import Hello from '@/components/Hello'
import store from '../../../src/store'
Vue.use(Vuex)

const mockedStore = new Vuex.Store({
  state: {
    todos: [
      {
        id: 0,
        text: 'hello vuex!'
      },
      {
        id: 1,
        text: 'hello two vuex!'
      }
    ]
  },
  getters: {
    todos: (state) => state.todos
  }
})

describe('Hello.vue', () => {
  it('should render todos from vuex correctly', () => {
    const Ctor = Vue.extend(Hello)
    const vm = new Ctor({ store: mockedStore }).$mount()
    expect(vm.$el.getElementsByTagName('li').length).to.equal(2)
    expect(vm.$el.getElementsByTagName('li')[0].querySelector('.text').textContent.trim()).to.equal('hello vuex!')
    expect(vm.$el.getElementsByTagName('li')[1].querySelector('.text').textContent.trim()).to.equal('hello two vuex!')
  })
  it('should add todo dai', () => {
    const Ctor = Vue.extend(Hello)
    const vm = new Ctor({ store: store }).$mount()

    expect(vm.$el.getElementsByTagName('li').length).to.equal(0)

    vm.todoInput = 'xxx'
    vm.add()

    Vue.nextTick((done) => {
      console.log(vm.$el.getElementsByTagName('li')[2].querySelector('.text').textContent)
      expect(vm.$el.getElementsByTagName('li').length).to.equal(1)
      expect(vm.$el.getElementsByTagName('li')[2].querySelector('.text').textContent.trim()).to.equal('xxx')
      done()
    })
  })
  it('should add and remove todo', (done) => {
    const Ctor = Vue.extend(Hello)
    const vm = new Ctor({ store: store }).$mount()

    expect(vm.$el.getElementsByTagName('li').length).to.equal(1)
    expect(vm.$el.getElementsByTagName('li')[0].querySelector('.text').textContent.trim()).to.equal('xxx')

    vm.removeTodo(vm.todos[0])

    Vue.nextTick(() => {
      expect(vm.$el.getElementsByTagName('li').length).to.equal(0)
      done()
    })
  })
})
