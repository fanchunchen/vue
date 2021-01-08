export default
  {
    created() { console.log('组件的生命周期'); this.a1() },
    data() {
      return {
        a: 1000
      }
    },
    methods: {
      a1() { console.log('a1') }
    },

  }
