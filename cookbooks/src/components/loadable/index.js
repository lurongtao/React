import loadable from 'react-loadable'
import loading from './Loading'

export default ({loader}) => (
  loadable({
    loader,
    loading
  })
)