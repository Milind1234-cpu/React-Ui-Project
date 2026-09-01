import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='relative h-full w-[82vw] max-w-80 shrink-0 overflow-hidden rounded-4xl sm:w-80'>
            <img className='h-full w-full object-cover' src={props.img} alt={props.tag}></img>
            <RightCardContent id={props.id} tag={props.tag}/> 
        </div>
    )
}

export default RightCard
