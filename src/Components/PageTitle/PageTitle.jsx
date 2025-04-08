import Class from './PageTitle.module.scss'

const PageTitle = ({children, ...props}) => {
  return (
    <h2 className={Class.title} {...props}>
     {children} 
    </h2 >
  )
}

export default PageTitle
