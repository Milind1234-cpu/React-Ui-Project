import RightCard from "./RightCard"

const RightContent = (props) => {
  return (
    <div id="right" className='flex h-[clamp(18rem,55vh,28rem)] min-w-0 w-full shrink-0 flex-nowrap gap-4 overflow-x-auto rounded-4xl p-0 sm:gap-6 sm:p-3 lg:h-full lg:w-2/3 lg:gap-10 lg:p-6'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
