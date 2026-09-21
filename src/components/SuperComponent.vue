<script setup lang="ts">
import type { IComponent } from "../types";

const props = defineProps<IComponent>();

defineSlots<Record<string, (p: any) => any>>();

const model = defineModel<any>({});

const isCheck = props.type === "checkbox";

const onInput = (e: Event) => {
  const el = e.target as HTMLInputElement;
  model.value = isCheck ? el.checked : el.value;
};
</script>

<template>
  <div
    v-if="props.children"
    :style="{
      display: 'flex',
      flexDirection: props.direction ?? 'column',
      gap: '8px',
    }"
  >
    <SuperComponent
      v-for="child in props.children"
      v-bind="child"
      :model-value="model?.[child.name]"
      @update:model-value="model = { ...model, [child.name]: $event }"
    >
      <template v-for="(_, name) in $slots" #[name]="slotProps">
        <slot :name="name" v-bind="slotProps" />
      </template>
    </SuperComponent>
  </div>

  <slot
    v-else
    :name="props.component"
    :field="props"
    :model="model"
    :update="(v: any) => (model = v)"
  >
    <component
      :is="props.component"
      :id="props.name"
      v-bind="props"
      :label="props.label"
      :value="isCheck ? undefined : model"
      :checked="isCheck ? model : undefined"
      @input="onInput"
    >
      <template v-if="props.component === 'select'">
        <option
          v-for="option in props.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </template>
    </component>
  </slot>
</template>

<style scoped></style>
