
const AboutValues = ({title,description}) => {
    return (
        <div className='md:w-1/3 gap-8 flex px-5 md:px-20 flex-col items-center'>
            <p className=' text-2xl text-primary-darkGrey font-bold'>{title}</p>
            <p className='text-justify text-lg md:text-base'>{description}</p>
        </div>
    )
}

export default AboutValues