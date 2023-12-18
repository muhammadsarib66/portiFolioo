import React from "react";

const PopUp = () => {

    const [isopen , setIsOpen] = React.useState(false)
    const [isopen2 , setIsOpen2] = React.useState(false)

const values = [
    {
        num : 190.40 ,
        per : ' 0.00 (0.00%)'
    },
    {
        num : 189.93 ,
        per : 'Bid'
    },
    {
        num : 180.80 ,
        per : 'Ask'
    },
    {
        num : '2x6' ,
        per : 'size'
    },
    {
        num :234632,
        per : "Volume"
    }

]
const values2 = [
    {
                cash: '$ 70.91',
                detail : 'Cash Available For Investment'
    },
    {
        cash: '$ 80.63',
        detail : 'Total Account Value'
},
]

const values3 = [
    {
        title : 'Action',
        icon : true
    },
    {
        title : 'Quantity',
        icon : false
    },
    {
        title : 'Order Type',
        icon : true,

    },
    {
        title : 'Duration',
        icon : true
    }
]
  return (
    <section  className="w-52 bg-[#202334] "   >
        <div className=' p-3 bg-[#202334]'>

        
      <div className="flex  justify-between">
        <div className=" ">
          <p className=" pl-2 text-white font-medium"> QuickTrade</p>
        </div>
        <div className="text-[#55BDF1]">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>

      <div className=" pt-2  justify-between flex  space-x-1">
        <input className=" w-36 h-6" />

        <button className=" h-6 rounded-sm px-3  bg-[#55BDF1]">
          
          <i class="fa-light fa-angle-right text-sm"></i>
        </button>
      </div>
      <div className="flex items-center gap-1 pt-2 text-[#55BDF1]">
        <span>
          <i class="fa-regular fa-circle-play"></i>
        </span>
        <p className="text-xs">View quick help video </p>
      </div>

      <div className=" pt-4  space-x-2 text-xs  text-[#55BDF1] font-bold ">
        <button onClick={()=>setIsOpen2(!isopen2)} className=" border-t-2 border-[#202334] hover:border-t-2 hover:border-[#B381F6] hover:text-[#B381F6] ">
          QUOTE
        </button>
        <button onClick={()=>setIsOpen(!isopen)} className="hover:border-t-2 border-[#B381F6] hover:text-[#B381F6] ">
          TRADE TICKET
        </button>
      </div>
      </div>

{ isopen &&
      <div className="  bg-[#161825] space-y-2 p-3 text-white ">
        <p className="pl-1 text-[12px]"> APPLE INC.</p>
        <div className="flex justify-center text-xs gap-x-2 ">
            {
                values.map((value,index)=>(
                    <div key={index} className="  flex flex-col ">
                        <p className="">{value.num}</p>
                        <p className="">{value.per}</p>
                    </div>
                ))
            }
           
        </div >
        <div className="flex items-center gap-2 justify-center">

            <p className="text-nano  text-gray-300"> Real Time Quote as of 11/29/2023 1:53 am ET </p>
            <i class="fa-solid fa-arrows-rotate-reverse text-sm text-[#55BDF1]"></i>
        </div>
      </div>
      }
      {
        isopen2 && 
        <div className="p-3 ">
      <div className="   flex  gap-1">
        <input className=" w-36 h-6 outline-none text-sm  " />

        <button className="  flex items-center  h-6 bg-white  px-3  ">
        <i class="fa-regular fa-angle-down"></i>
        </button>
      </div>
      <div className="pt-4 flex text-nano justify-around">
      {
        values2.map((value,index)=>(
            <div key={index} className="  text-white">
                <p className="">{value.cash}</p>
                <p className="text-gray-300">{value.detail}</p>
            </div>
        ))
      }
      </div>
      </div>

   

      }
       <div className="p-3">
       <div className="   space-x-2 text-xs  text-[#55BDF1] font-bold pb-1 ">
        <button  className=" border-t-2 border-[#202334] hover:border-t-2 hover:border-[#B381F6] hover:text-[#B381F6] ">
          STOCK
        </button>
        <button  className="hover:border-t-2 border-[#B381F6] hover:text-[#B381F6] ">
          OPTIONS
        </button>
      </div>

      <div className="flex flex-col gap-4 " >
        
        {
            values3.map((item , index)=>(
                <div key={index} className="flex justify-between text-sm ">
                <p className="text-white text-xs"> {item.title}</p>
                <div className="flex">
    
                <input className={` ${item.icon ? 'w-24' : 'w-[123px]'}`} />
                { item.icon &&

                    <button className="   flex items-center  h bg-white  px-2  ">
            <i class="fa-regular fa-angle-down"></i>
            </button>
                }
                </div>
                
            </div>
            ))
        }
    <p className="text-xs text-gray-200" >Learn more about <span className="  text-[#55BDF1]">order types </span> and  <span className="  text-[#55BDF1]">durations </span></p>

      </div>



        </div>
    </section>
  );
};

export default PopUp;

// w-10
