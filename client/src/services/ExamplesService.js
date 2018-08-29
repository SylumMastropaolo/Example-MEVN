import Api from '@/services/Api'

export default {
  fetchExamples () {
    return Api().get('examples')
  },

  addExample (params) {
    return Api().post('examples', params)
  },

  updateExample (params) {
    return Api().put('examples/' + params.id, params)
  },

  getExample (params) {
    return Api().get('example/' + params.id)
  },

  deleteExample (id) {
    return Api().delete('examples/' + id)
  }
}