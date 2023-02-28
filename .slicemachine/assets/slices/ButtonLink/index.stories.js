import MyComponent from '../../../../slices/ButtonLink';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ButtonLink'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"text":"exist","url":{"link_type":"Web","url":"http://google.com"}},"id":"_Default","slice_type":"button_link"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
