<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="m_ logo"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"
        />

      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

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
