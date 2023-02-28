import MyComponent from '../../../../slices/FullWidthPhoto';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/FullWidthPhoto'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"photo":{"dimensions":{"width":3424,"height":3424},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1493119508027-2b584f234d6c"}},"id":"_Default","slice_type":"full_width_photo"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
