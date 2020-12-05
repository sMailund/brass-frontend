<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Pappa har bursdag! :)
        </h1>

        <div class="mt-8 mb-8">
          <span>{{ currentQuestion + 1 }} / {{ correctSolves + 1 }}</span>

<!--
          <div class="pb-2">
            <v-icon size="75" color="red" v-if="!tasks[currentQuestion].solved">mdi-close-thick</v-icon>
            <v-icon size="75" color="green" v-if="tasks[currentQuestion].solved">mdi-check-bold</v-icon>
          </div>
-->

          <div class="pb-4">
            <v-btn
                :color="currentQuestion !== 0 ? 'blue' : 'white'"
                v-on:click="previous"
                class="mr-1"
            >
              previous
            </v-btn>

            <v-btn
                :color="currentQuestion !== correctSolves ? 'blue' : 'white'"
                class="ml-1"
                v-on:click="next"
            >
              next
            </v-btn>
          </div>
        </div>
        <p v-if="tasks[currentQuestion]" class="subheading font-weight-regular">
          {{ tasks[currentQuestion].question }}
        </p>

        <p v-if="tasks[currentQuestion]" class="subheading font-weight-regular">
          {{ tasks[currentQuestion].hint }}
        </p>

        <iframe width="560" height="315" :src="urls[currentQuestion]" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import {submitTask} from "../dataServices/dataServices";


  export default {
    name: 'HelloWorld',

    data: () => ({
      answer: "",
      tasks: [],
      urls: ['https://www.youtube.com/embed/dQw4w9WgXcQ', 'https://www.youtube.com/embed/-e6xOBCAVvA'],
      correctSolves: 10,
      currentQuestion: 0
    }),

    methods: {
      previous: function() {
        this.answer = "";
        if (this.currentQuestion > 0) {
          this.currentQuestion--;
        }
      },
      next: function() {
        this.answer = "";
        if (this.currentQuestion < this.correctSolves) {
          this.currentQuestion++;
        }
      },
      submit: function() {
        if (this.answer.length > 0) {
          const taskNumber = this.tasks[this.currentQuestion].task_number;
          submitTask(taskNumber, this.answer)
            .then(() => {
              console.log("success");
              this.refreshTasks();
            })
            .catch(() => {
              console.log("wrong answer");
            })
            .finally(() => this.answer = '');
        }
      },
      refreshTasks: function() {
        this.tasks = 'test';
/*
        getTasks()
                .then(response => {
                  this.tasks = response.data
                  console.log(response.data);
                  let solved = 0;
                  for (let i = 0; i < this.tasks.length; i++) {
                    if (this.tasks[i].solved) {
                      console.log("solved");
                      solved++;
                    }
                  }
                  this.correctSolves = solved;
                  console.log(this.correctSolves);
                });
*/
      }
    },

    mounted() {
        this.refreshTasks();
    }
  }
</script>
