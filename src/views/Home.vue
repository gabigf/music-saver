<template>
  <div class="home">
   <div v-if="error" class="error">Couldn't fetch this data</div>
   <div v-if="documents">
     <ListView :playlists="documents" />
   </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import ListView from '../components/ListView.vue'


export default {
  name: 'Home',
  components: { ListView },
  setup() {
    const { documents, error } = getCollection('playlists')

    


    return { documents, error }


  }
}
</script>
