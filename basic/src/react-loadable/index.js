import Loadable from 'react-loadable'
import Loading from './Loading'

const LoadableComponent = Loadable({
  loader: () => import('./Loader'),
  loading: Loading
})

export default LoadableComponent