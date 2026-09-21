<script setup lang="ts">
import type { IComponent } from "../types";
import FormField from "./FormField.vue";

defineProps<{ schema: IComponent[] }>();
defineSlots<Record<string, (p: any) => any>>();

const model = defineModel<Record<string, any>>({ default: () => ({}) });
</script>

<template>
  <FormField
    v-for="field in schema"
    v-bind="field"
    :model-value="model[field.name]"
    @update:model-value="model = { ...model, [field.name]: $event }"
  >
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps" />
    </template>
  </FormField>
</template>
