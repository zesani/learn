<template>
  <div class="">
    <nav class="nav">
      <div class="nav-left">
        <span class="nav-toggle" @click="navToggle">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>

      <div class="nav-center">
        <a class="nav-item">
          <h1>FITM</h1>
        </a>
      </div>
      <div class="nav-right">
        <div :class="navMenu" v-show="navMenu === 'nav-right nav-menu'">
          <a class="nav-item" @click="navToggle">
            <router-link to="/">หน้าแรก</router-link>
          </a>
          <a class="nav-item" @click="navToggle">
            <router-link to="/">หน้าแรก</router-link>
          </a>
          <a class="nav-item" @click="navToggle">
            <router-link to="/ListsExam">Exam</router-link>
          </a>
          <span class="nav-item" @click="signInWithGoogle" v-show="user === ''">
            <a class="button" >
              <span class="icon">
                <i class="fa fa-google" aria-hidden="true"></i>
              </span>
              <span>Sign In</span>
            </a>
          </span>
          <span class="nav-item" @click="signOutWithGoogle" v-show="user !== ''">
            <a class="button" >
              <span class="icon">
                <i class="fa fa-google" aria-hidden="true"></i>
              </span>
              <span>{{user.displayName}} Sign Out</span>
            </a>
          </span>
        </div>
      </div>

      <!-- This "nav-toggle" hamburger menu is only visible on mobile -->
      <!-- You need JavaScript to toggle the "is-active" class on "nav-menu" -->

      <!-- This "nav-menu" is hidden on mobile -->
      <!-- Add the modifier "is-active" to display it on mobile -->
    </nav>
    <nav class="nav" v-show="navMenu === 'nav-right is-active'">
      <div :class="navMenu">
        <a class="nav-item" @click="navToggle">
          <router-link to="/">หน้าแรก</router-link>
        </a>
        <a class="nav-item" @click="addDataUser">
          <router-link to="/" >หน้าแรก</router-link>
        </a>
        <a class="nav-item" @click="navToggle">
          <router-link to="/ListsExam">Exam</router-link>
        </a>
        <span class="nav-item" @click="signInWithGoogle" v-show="user === ''">
          <a class="button" >
            <span class="icon">
              <i class="fa fa-google" aria-hidden="true"></i>
            </span>
            <span>Sign In</span>
          </a>
        </span>
        <span class="nav-item" @click="signOutWithGoogle" v-show="user !== ''">
          <a class="button" >
            <span class="icon">
              <i class="fa fa-google" aria-hidden="true"></i>
            </span>
            <span>{{user.displayName}} Sign Out</span>
          </a>
        </span>
      </div>
      <div class="nav-right">
      </div>
    </nav>
    {{users}}
    {{exam}}
     <router-view></router-view>
  </div>
</template>

<script>
  import firebase from 'firebase'
  var config = {
    apiKey: 'AIzaSyC7GJSii7G1Fw3QgMBe7HWC4PgYHn3yZj0',
    authDomain: 'learn-java-302c2.firebaseapp.com',
    databaseURL: 'https://learn-java-302c2.firebaseio.com',
    storageBucket: 'learn-java-302c2.appspot.com',
    messagingSenderId: '337054685156'
  }
  firebase.initializeApp(config)
  var db = firebase.database()
  var provider = new firebase.auth.GoogleAuthProvider()
  export default {
    name: 'app',
    data () {
      return {
        user: '',
        authentication: false,
        navMenu: 'nav-right nav-menu',
        users: '',
        exam: ''
      }
    },
    mounted () {
      var vm = this
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          vm.user = user
          vm.authentication = true
          vm.$bindAsArray('users', db.ref('exam/KgOww1ZSAG0j4wcWdOqeqwe/users/' + user.uid))
          vm.$bindAsArray('exam', db.ref('exam'))
          // User is signed in.
        } else {
          // No user is signed in.
        }
      })
    },
    methods: {
      navToggle () {
        if (this.navMenu === 'nav-right is-active') {
          this.navMenu = 'nav-right nav-menu'
        } else {
          this.navMenu = 'nav-right is-active'
        }
      },
      signInWithGoogle () {
        firebase.auth().signInWithRedirect(provider)
      },
      signOutWithGoogle () {
        var vm = this
        firebase.auth().signOut().then(function () {
          vm.user = ''
          vm.authentication = false
          // Sign-out successful.
        })
      },
      addDataUser () {
        var vm = this
        this.$firebaseRefs.users.push({
          name: vm.user.displayName
        })
      }
    }
  }
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
