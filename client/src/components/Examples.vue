<template>
  <div class="examples">
    <h1>Examples</h1>
    <div v-if="examples.length > 0" class="table-wrap">
      <div>
        <router-link v-bind:to="{ name: 'NewExample' }" class="">Add Example</router-link>
      </div>
      <table>
        <tr>
          <td>Name</td>
          <td width="550">Description</td>
          <td width="100" align="center">Action</td>
        </tr>
        <tr v-for="example in examples" :key="example._id">
          <td>{{ example.name }}</td>
          <td>{{ example.description }}</td>
          <td align="center">
            <router-link v-bind:to="{ name: 'EditExample', params: { id: example._id } }">Edit</router-link> |
            <a href="#" @click="deleteExample(example._id)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
    <div v-else>
      There are no examples.. Lets add one now <br /><br />
      <router-link v-bind:to="{ name: 'NewExample' }" class="add_example_link">Add example</router-link>
    </div>
  </div>
</template>

<script>
import ExamplesService from '@/services/ExamplesService'
export default {
  name: 'examples',
  data () {
    return {
      examples: []
    }
  },
  mounted () {
    this.getExamples()
  },
  methods: {
    async getExamples () {
      const response = await ExamplesService.fetchExamples()
      this.examples = response.data.examples
    },
    async deleteExample (id) {
      await ExamplesService.deleteExample(id)
      this.getExamples()
    }
  }
}
</script>
<style type="text/css">
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_example_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>