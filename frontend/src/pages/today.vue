<template>
  <f7-page name="today">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-title>Today</f7-nav-title>
      <!--<f7-nav-left>-->
      <!--  <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>-->
      <!--</f7-nav-left>-->
      <!--<f7-nav-title sliding>to-do calendar</f7-nav-title>-->
      <!--<f7-nav-right>-->
      <!--  <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="right"></f7-link>-->
      <!--</f7-nav-right>-->
    </f7-navbar>
    <f7-card
        v-for="item in card_items"
        :key="item.id"
        :content="item.content"
        @click="onItemClick(item.id)"
    ></f7-card>
    <!--<f7-button fill raised popup-open="#my-popup">Popup</f7-button>-->

    <f7-fab position="right-bottom" color="red" @click="onClickCreateNewToDoItem">
      <f7-icon ios="f7:plus" aurora="f7:plus" md="material:add"></f7-icon>
    </f7-fab>
  </f7-page>
</template>

<script lang="ts" setup>
import {useTodoItemsStore} from '../store/todoItems'

const props = defineProps({
  f7router: {
    type: Object
  }
})

const todoItemsStore = useTodoItemsStore()
const card_items = todoItemsStore.getItems;

const onClickCreateNewToDoItem: Function = (): void => {
  // create new item

}

const onItemClick: Function = (id: number,): void => {
  props.f7router.navigate(
      {
        name: 'to-do-item',
        params: {id: id}
      }
  )
}
</script>