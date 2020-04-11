<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          oppgaveside beta
        </h1>

        <p class="subheading font-weight-regular">
          {{ tasks[0].question }}
        </p>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'HelloWorld',

    data: () => ({
      tasks: []
    }),

    mounted() {
      axios.get('https://backend-dot-brass-273814.ew.r.appspot.com/task')
              .then(response => this.tasks = response.data);
    }
  }
</script>
