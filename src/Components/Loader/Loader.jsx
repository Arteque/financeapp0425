import Class from './Loader.module.scss'

const Loader = () => {
  return (
    <div className={Class.loader_container}>
      <div className={Class.loader}>
        loading <span>.</span><span>.</span><span>.</span>
      </div>
    </div>
  )
}

export default Loader
