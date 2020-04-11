<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          oppgaveside beta
        </h1>

        <p>
          {{ currentQuestion + 1 }} / {{ correctSolves + 1}}
        </p>

        <p><span v-on:click="previous">prev</span> <span v-on:click="next">next</span></p>

        <p v-if="tasks[currentQuestion]" class="subheading font-weight-regular">
          {{ tasks[currentQuestion].question }}
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
      tasks: [],
      correctSolves: 0,
      currentQuestion: 0
    }),

    methods: {
      previous: function() {
        if (this.currentQuestion > 0) {
          this.currentQuestion--;
        }
      },
      next: function() {
        if (this.currentQuestion < this.correctSolves) {
          this.currentQuestion++;
        }
      },
    },

    mounted() {
      axios.get('https://backend-dot-brass-273814.ew.r.appspot.com/task')
              .then(response => {
                this.tasks = response.data
                this.correctSolves = response.data.reduce((solves, current) => solves + current.solved ? 1 : 0, 0);
              });
    }
  }
</script>
