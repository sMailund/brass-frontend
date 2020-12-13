<template>
  <v-app>
<!--
    <v-app-bar
      app
      color="blue"
      dark
    >

      <v-spacer></v-spacer>

    </v-app-bar>
-->

    <v-content>
      <TaskCard/>
    </v-content>
  </v-app>
</template>

<script>
import TaskCard from './components/TaskCard';

export default {
  name: 'App',

  components: {
    TaskCard: TaskCard,
  },

};
</script>
