<template>
  <div class="navbar">
    <nav>
      <img src="@/assets/Logo.png" alt="Music Saver Logo">
      <h1><router-link :to="{ name: 'Home' }">Music Saver</router-link></h1>
      <div class="links">
        <div v-if="user">
          <span>Hi there, {{ user.displayName }}</span>
          <router-link :to="{ name: 'CreatePlaylist'}">Create a Playlist</router-link>
          <router-link :to="{ name: 'UserPlaylists'}">My Playlists</router-link>
          <button @click="handleSubmit">Log out</button>
        </div>
        <div v-else>
          <router-link class="btn" :to="{ name: 'Signup'}">Sign up</router-link>
          <router-link class="btn" :to="{ name: 'Login'}">Log in</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '@/composables/getUser'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter()
    const { error, logout } = useLogout()
    const { user } = getUser()


    const handleSubmit = async () => {
      await logout()
      if(!error.value) {
        console.log('User has been logged out')
        router.push({ name: 'Login' })
      }
    }


    return { handleSubmit, user }
  }
}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
    margin-left: -10px;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
   span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
</style>