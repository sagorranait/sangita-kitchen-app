import Review from '../../components/Review/Review'

const Reviews = () => {
  return (
    <div className='reviews-area outlet-page'>
      <h2>My Reviews</h2>
      <div className='reviews'>
         <Review/>
         <Review/>
      </div>
    </div>
  )
}

export default Reviews