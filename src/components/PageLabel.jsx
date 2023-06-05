
const PageLabel = ({label}) => {
  return (
    <div className='flex items-center flex-col my-10 md:my-10'>
        <p className='text-2xl font-medium text-primary-darkGrey mb-2'>{label}</p>
        <div className='h-0.5 w-52 bg-secondary-darkBrown'></div>
      </div>
  )
}

export default PageLabel