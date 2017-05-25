import Vue from 'vue'
import Counter from '@/components/Counter'
describe('Counter.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Counter)
    const vm = new Constructor().$mount()
    expect(vm.counter).to.equal(0)
  })
  it('increase function', () => {
    const Constructor = Vue.extend(Counter)
    const vm = new Constructor().$mount()
    vm.increase()
    expect(vm.counter).to.equal(1)
  })
  it('decrease function', () => {
    const Constructor = Vue.extend(Counter)
    const vm = new Constructor().$mount()
    vm.decrease()
    expect(vm.counter).to.equal(-1)
  })
})
