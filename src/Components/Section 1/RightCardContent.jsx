const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 flex h-full w-full flex-col justify-between p-5 sm:p-8'>
            <h2 className='flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold sm:h-12 sm:w-12'>{props.id+1}</h2>
            <div>
                <p className='mb-6 text-base leading-relaxed text-white sm:mb-10 sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat fugit natus, officia error minima.</p>
                <div className='flex justify-between'>
                    <button className='rounded-full bg-blue-500 px-5 py-2 text-sm font-medium text-white sm:px-8'>{props.tag}</button>
                    <button className='rounded-full bg-blue-500 px-3 py-2 font-medium text-white'><i className="ri-arrow-right-long-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
