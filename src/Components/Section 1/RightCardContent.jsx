const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-1xl font-bold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg text-white mb-10 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat fugit natus, officia error minima.</p>
                <div className='flex justify-between'>
                    <button className='bg-blue-500 text-white font-medium px-8 py-2 rounded-full'>{props.tag}</button>
                    <button className='bg-blue-500 text-white font-medium px-3 py-2 rounded-full'><i class="ri-arrow-right-long-line"></i></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
