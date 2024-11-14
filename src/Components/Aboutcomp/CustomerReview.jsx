const CustomerReview = ({id,review1,review2,reviewer,des,img})=>{
    return(
        <div className="w-full h-[200px] md:h-[350px] border border-gray-200 aboutExpCardContainer flex flex-col justify-between">
            <div className="flex items-start gap-1">
                <div>
                <p className="text-[15px] font-bold text-slate-950">{review1}</p>
                <p className="text-[15px] font-bold text-slate-950">{review2}</p>

                </div>
                <img className="w-10" src={img} alt="" />
            </div>
            <div>
                <p className="pb-0">{reviewer}</p>
                <p className="pb-0">{des}</p>
            </div>
        </div>
    )
}

export default CustomerReview;
