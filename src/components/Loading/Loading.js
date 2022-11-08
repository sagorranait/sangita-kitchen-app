import { ThreeDots } from  'react-loader-spinner'
import './Loading.css'

function Loading() {
  return (
    <div className='loading-area'>
      <ThreeDots 
         height="80" 
         width="80" 
         radius="9"
         color="#17696A" 
         ariaLabel="three-dots-loading"
         wrapperStyle={{}}
         visible={true}
      />
    </div>
  )
}

export default Loading