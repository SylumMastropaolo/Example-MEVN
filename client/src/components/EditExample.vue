<template>
  <div class="examples">
    <h1>Edit Example</h1>
      <div class="form">
        <div>
          <input type="text" name="name" placeholder="NAME" v-model="name">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_example_btn" @click="updateExample">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
import ExamplesService from '@/services/ExamplesService'
export default {
  name: 'EditExample',
  data () {
    return {
      name: '',
      description: ''
    }
  },
  mounted () {
    this.getExample()
  },
  methods: {
    async getExample () {
      const response = await ExamplesService.getExample({
        id: this.$route.params.id
      })
      this.name = response.data.name
      this.description = response.data.description
    },
    async updateExample () {
      await ExamplesService.updateExample({
        id: this.$route.params.id,
        name: this.name,
        description: this.description
      })
      this.$router.push({ name: 'Examples' })
    }
  }
}
</script>
<style type="text/css">
.form input, .form textarea {
  width: 500px;
  padding: 10px;
  border: 1px solid #e0dede;
  outline: none;
  font-size: 12px;
}
.form div {
  margin: 20px;
}
.app_example_btn {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  width: 520px;
  border: none;
  cursor: pointer;
}
</style>