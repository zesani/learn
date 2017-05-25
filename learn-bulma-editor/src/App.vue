<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <div class="columns is-multiline is-gapless is-mobile">
      <div class="column is-one-quarter-tablet is-one-quarter-desktop left">
        <div class="list">
          <nav class="panel">
            <a class="panel-block is-active" v-for="list in lists" @click="selectList(list)">
              <span class="panel-icon">
                <i class="fa fa-book"></i>
              </span>
              {{list.name}}
              <a @click="deleteList(list.id)">x</a>
            </a>
          </nav>
        </div>
        <div class="add-list block">
          <a class="button is-primary" @click="addList">Add List</a>
        </div>
      </div>
      <div class="column is-three-quarter-tablet is-three-quarter-desktop">
        <input type="text" v-model="name"><br>
        {{text}}
        <textarea rows="4" cols="50" v-model="text"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
var config = {
  apiKey: 'AIzaSyDvVmkF44fO3u8xtonzw65rQgm_OZ01EcA',
  authDomain: 'learn-bulma-editor.firebaseapp.com',
  databaseURL: 'https://learn-bulma-editor.firebaseio.com',
  storageBucket: 'learn-bulma-editor.appspot.com',
  messagingSenderId: '1067380229521'
}
firebase.initializeApp(config)
var Lists = firebase.database().ref('lists')
export default {
  name: 'app',
  data () {
    return {
      lists: [],
      info: {},
      name: '',
      text: ''
    }
  },
  mounted () {
    var vm = this
    Lists.on('child_added', function (data) {
      var item = data.val()
      item.id = data.key
      vm.lists.push(item)
    })
    Lists.on('child_removed', function (data) {
      var id = data.key
      var index = vm.lists.findIndex(list => list.id === id)
      vm.lists.splice(index, 1)
    })
    Lists.on('child_changed', function (snapshot) {
      var id = snapshot.key
      var list = vm.lists.find(list => list.id === id)
      list.name = snapshot.val().name
      list.text = snapshot.val().text
    })
  },
  methods: {
    addList () {
      var vm = this
      Lists.push({
        name: 'LIST#' + parseInt(vm.lists.length + 1),
        text: ''
      })
    },
    deleteList (id) {
      firebase.database().ref('lists/' + id).remove()
    },
    updateList (id, name, text) {
      firebase.database().ref('lists/' + id).update({
        name,
        text
      })
    },
    selectList (list) {
      this.info = list
      this.name = list.name
      this.text = list.text
    }
  },
  watch: {
    name (newName) {
      this.updateList(this.info.id, newName, this.text)
    },
    text (newText) {
      this.updateList(this.info.id, this.name, newText)
    }
  }
}
</script>

<style>
.left {
  height: 100vh;
  color: red;
  border: 1px gray solid;
  border-radius: 10px;
  /*background-color: red;*/
}
.list {
  height: 90%;
  /*background-color: green;*/
}
.add-list {
  padding-left: 32%;
  padding-top: 10%;
}
</style>
