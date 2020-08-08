<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          not the final problem
        </h1>

        <p>
          {{ currentQuestion + 1 }} / {{ correctSolves + 1}}
        </p>

        <p>solved: {{tasks[currentQuestion].solved ? 'yes' : 'no'}}</p>

        <p><span v-on:click="previous">prev</span> <span v-on:click="next">next</span></p>

        <p v-if="tasks[currentQuestion]" class="subheading font-weight-regular">
          {{ tasks[currentQuestion].question }}
        </p>

        <p v-if="tasks[currentQuestion]" class="subheading font-weight-regular">
          {{ tasks[currentQuestion].hint }}
        </p>

        <v-text-field
                v-model="answer"
                label="svar"
                placeholder=""
                outlined
          ></v-text-field>

        <v-btn
                :color="answer.length > 0 ? 'blue' : 'white'"
                v-on:click="submit"
        >
          send in svar
        </v-btn>

        <p>{{answer}}</p>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  import {getTasks, submitTask} from "../dataServices/dataServices";


  export default {
    name: 'HelloWorld',


    data: () => ({
      answer: "",
      tasks: [],
      correctSolves: 0,
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
      }
    },

    mounted() {
        this.refreshTasks();
    }
  }
</script>
