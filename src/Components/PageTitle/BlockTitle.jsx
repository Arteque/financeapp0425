import Class from './BlockTitle.module.scss'

const BlockTitle = ({children, ...props}) => {
  return (
    <h3 className={Class.title} {...props}>
      {children}
    </h3>
  )
}

export default BlockTitle
