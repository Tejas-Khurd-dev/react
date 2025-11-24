
const RightCardContent = (props) => {
  return (
    <div>
       <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between ">
          <h2 className="bg-white rounded-full h-10 w-10 flex justify-center items-center text-2xl font-semibold ">{props.id + 1}</h2>
          <div>
            <p className="text-shadow-2xs text-lg text-white ">{props.intro}</p>

            <div className="mt-8 flex justify-between">
              <button style={{backgroundColor:props.color}} className="text-white font-med px-5 py-2 rounded-full">{props.tag}</button>
              <button style={{backgroundColor:props.color}} className="text-white font-med px-4 py-2 rounded-full ml-3"><i className="ri-arrow-right-line"></i></button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default RightCardContent