<template>
  <f7-page name="to-do-item">
    <f7-navbar :sliding="false" back-link="Back">
      <f7-nav-title>Today</f7-nav-title>
    </f7-navbar>

    <f7-text-editor
        class="m-0 full-height"
        placeholder="Enter text..."
        :value="item.content"
        @texteditor:change="(v) => item.content = v"
        :buttons="textEditorConfig"
    ></f7-text-editor>
  </f7-page>
</template>

<script lang="ts" setup>
import {ToDoItem} from "../types/base_types"
import {useTodoItemsStore} from "../store/todoItems";
import {Ref, ref} from "vue";
import {textEditorConfig} from '../utils/textEditor.js'

const props = defineProps({
  f7router: {
    type: Object
  },
  id: {
    type: [Number, String]
  }
});

const todoItemsStore = useTodoItemsStore();
const item: Ref<ToDoItem> = ref(null);
if (props.id) {
  item.value = todoItemsStore.getItem(props.id);
} else {
  item.value = {id: null, content: ''}
}

</script>