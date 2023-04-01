import {defineStore} from 'pinia';
import {ToDoItem} from "../types/base_types";

type cbGetItem = (id: number | string) => ToDoItem;
export const useTodoItemsStore = defineStore('todoItems', {
    state: () => ({
        items: [
            {
                id: 1,
                content: 'This is a simple card',
            },
            {
                id: 2,
                content: 'This is a simple card2',
            }
        ] as ToDoItem[]
    }),
    getters: {
        getItems(state): ToDoItem[] {
            return state.items
        },
        getItem(state): cbGetItem {
            return (id: number | string): ToDoItem => {
                return state.items.find(item => item.id === +id)
            }
        }
    }
})

