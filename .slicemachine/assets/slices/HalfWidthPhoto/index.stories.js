import MyComponent from '../../../../slices/HalfWidthPhoto';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/HalfWidthPhoto'
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
      mock: {"variation":"default","version":"sktwi1xtmkfgx8626","items":[{}],"primary":{"left_photo":{"dimensions":{"width":4000,"height":6000},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1541807084-5c52b6b3adef"},"right_photo":{"dimensions":{"width":3560,"height":5340},"alt":null,"copyright":null,"url":"https://images.unsplash.com/photo-1471897488648-5eae4ac6686b"}},"id":"_Default","slice_type":"half_width_photo"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = ''
