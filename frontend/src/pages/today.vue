<template>
  <f7-page name="today">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false">
      <!--<f7-nav-left>-->
      <!--  <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>-->
      <!--</f7-nav-left>-->
      <!--<f7-nav-title sliding>to-do calendar</f7-nav-title>-->
      <!--<f7-nav-right>-->
      <!--  <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>-->
      <!--</f7-nav-right>-->
      <f7-nav-title>Today</f7-nav-title>
    </f7-navbar>

    <f7-card
        v-for="item in card_items"
        :key="item.id"
        :title="item.title"
        :content="item.content"
        :footer="item.date"
        @click="onItemClick(item.id)"
    ></f7-card>

    <!--<f7-button fill raised popup-open="#my-popup">Popup</f7-button>-->
  </f7-page>
</template>

<script lang="ts" setup>
import {Prop, Ref, ref} from "vue";
import {ToDoItem} from "../types/base_types"

const props = defineProps({
  f7router: {
    type: Object
  }
})


const card_items: Ref<ToDoItem[]> = ref([
  {
    id: 1,
    title: 'current title',
    content: 'This is a simple card',
    date: '01.04.2023'
  },
  {
    id: 2,
    title: 'current title2',
    content: 'This is a simple card2',
    date: '02.04.2023'
  }
])

const onItemClick: Function = (id, MouseEvent): void => {
  console.log(props.f7router.navigate(
          {
            name: 'test',
            params: {id: id}
          }
      )
  )
</script>