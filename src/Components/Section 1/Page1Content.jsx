import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='flex min-h-[calc(100vh-96px)] min-w-0 flex-col gap-8 overflow-hidden px-5 py-6 sm:px-10 sm:py-10 lg:h-[90vh] lg:min-h-0 lg:flex-row lg:gap-10 lg:px-18'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
