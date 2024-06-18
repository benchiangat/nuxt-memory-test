<template>
  <div>
    <div style="display: flex; justify-content: space-between;">
      <button type="button"
              @click="test">test</button>
      <button type="button"
              @click="myLogout">退出</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useStore } from "vuex";

const store = useStore()
const router = useRouter()
const myLogout = () => {
  router.push('/test')
}
const test = () => {
  const p = { ...store.getters.accountInfo[0] }
}

const initAccountInfo = (AccountArr) => store.dispatch('initAccountInfo', AccountArr)
const clearState = () => store.dispatch('clearState')

onMounted(() => {
  let AccountArr = []
  for (let i = 0; i < 10000; i++) {
    AccountArr.push({ value: i.toString(), label: i.toString() })
  }
  initAccountInfo(AccountArr)
})

onBeforeUnmount(() => {
  clearState()
})
</script>