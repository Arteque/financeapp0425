import Class from './SmallTitle.module.scss'

const SmallTitle = ({children, className, props}) => {
  return (
    <h4 {...props} className={`${Class.small__title} ${ className?className:null}`}>{children}</h4>
  )
}


export default SmallTitle