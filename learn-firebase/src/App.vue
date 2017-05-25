<template>
  <div id="app">
    <div class="" v-if="ready">
      <!-- <h1>Ready</h1> -->
      <div class="" v-if="authorized">
        <!-- <h1>authorized</h1> -->
        <img :src="profile.photoURL" alt="" />
        <h1>{{profile.displayName}}</h1>
        <button type="button" name="button" @click="logout">Logout</button>
        <hr>
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              Name: <input type="text" name="name" value="" v-model="name"><br><br>
              Phone: <input type="text" name="name" value="" v-model="phone"><br><br>
              facebook: <input type="text" name="name" value="" v-model="facebook"><br><br>
              Picture: <input type="text" name="name" value="" v-model="picture"><br><br>
              <button type="button" name="button" @click="addPhoneBook">Add</button>
            </div>
            <div class="col-sm-6 col-sm-offset-3">
              <div class="thumbnail" v-for="phoneBook in phoneBooks">
                name: {{phoneBook.name}}<br>
                Phone: {{phoneBook.phone}}<br>
                facebook: {{phoneBook.phone}}<br>
                <img :src="phoneBook.picture" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="" v-else>
        <h1>Not authorized</h1>
        <button type="button" name="button" @click="login">Login</button>
      </div>
    </div>
    <div class="" v-else>
      <h1>No Ready</h1>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
var firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCvfNNe0e6ugHtx7vcvkguZpChxHaZmH84',
  authDomain: 'it3k-87537.firebaseapp.com',
  databaseURL: 'https://it3k-87537.firebaseio.com',
  storageBucket: 'it3k-87537.appspot.com',
  messagingSenderId: '71330528993'
})
var db = firebaseApp.database()
var provider = new firebase.auth.FacebookAuthProvider()
export default {
  name: 'app',
  data () {
    return {
      name: '',
      phone: '',
      facebook: '',
      picture: '',
      profile: {},
      ready: false,
      authorized: false,
      phoneBooks: []
    }
  },
  // firebase: {
  //   phoneBooks: db.ref('phoneBooks')
  // },
  methods: {
    addPhoneBook () {
      var vm = this
      this.$firebaseRefs.phoneBooks.child(this.profile.uid).push({
        name: vm.name,
        phone: vm.phone,
        facebook: vm.facebook,
        picture: vm.picture
      })
      this.name = ''
      this.phone = ''
      this.facebook = ''
      this.picture = ''
    },
    login () {
      firebase.auth().signInWithRedirect(provider)
    },
    logout () {
      let vm = this
      firebase.auth().signOut().then(function () {
        vm.authorized = false
      }, function (error) {
        console.error(error)
      })
    }
  },
  mounted () {
    let vm = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        vm.authorized = true
        vm.profile = user
        vm.$bindAsObject('phoneBooks', db.ref('phoneBooks'))
      }
      vm.ready = true
    })
    firebase.auth().getRedirectResult().then(function (result) {
      if (result.credential) {}
    }).catch((error) => {
      console.error(error)
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
