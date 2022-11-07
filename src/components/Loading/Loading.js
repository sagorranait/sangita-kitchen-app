import { ThreeDots } from  'react-loader-spinner'

function Loading() {
  return (
      <ThreeDots 
         height="80" 
         width="80" 
         radius="9"
         color="#00bfff" 
         ariaLabel="three-dots-loading"
         wrapperStyle={{}}
         wrapperClassName="loading-area"
         visible={true}
      />
  )
}

export default Loading