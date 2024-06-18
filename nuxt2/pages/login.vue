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

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Test',
  data () {
    return {
    }
  },
  methods: {
    myLogout () {
      this.$router.push('/test')
    },

    test () {
      const p = { ...this.accountInfo[0] }
    },

    ...mapActions([
      'initAccountInfo',
      'clearState'
    ])
  },

  mounted () {
    let AccountArr = []
    for (let i = 0; i < 10000; i++) {
      AccountArr.push({ value: i.toString(), label: i.toString() })
    }
    this.initAccountInfo(AccountArr)
  },

  computed: {
    ...mapGetters([
      'accountInfo'
    ]),
  },

  beforeDestroy () {
    this.clearState()
  }
}
</script>