
const ContentContainer = ({children, ...props}) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

export default ContentContainer
