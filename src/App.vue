<script setup lang="ts">
import { ref } from "vue";
import FormGen from "./components/FormGen.vue";

import type { IComponent } from "./types";

const schema: IComponent[] = [
  {
    component: "input",
    key: "input1",
    name: "input1",
    label: "Input 1",
  },
  {
    component: "div",
    key: "group1",
    name: "group1",
    direction: "row",
    children: [
      { component: "input", key: "a", name: "a", label: "A" },
      { component: "input", key: "b", name: "b", label: "B" },
    ],
  },
  {
    component: "input",
    key: "input2",
    name: "input2",
    type: "checkbox",
    label: "Input 2",
  },
  {
    component: "textarea",
    key: "input3",
    name: "input3",
    label: "Input 3",
  },
  {
    component: "textarea",
    key: "input67",
    name: "input67",
    label: "Input 67",
  },
  {
    component: "select",
    key: "input4",
    name: "input4",
    label: "Input 4",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
    ],
  },
];

const data = ref<Record<string, any>>({});
</script>

<template>
  <FormGen v-model="data" :schema="schema" />
</template>
