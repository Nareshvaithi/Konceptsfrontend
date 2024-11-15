const ClientsCard = ({id,logo})=>{
    const logoadj=(id)=>{
        if(id === 6){
            return 'w-64';
        }
    }

    const logoad2=(id)=>{
        if(id === 7){
            return 'jathi';
        }
    }
    
 
    return(
        <div className="w-full border border-gray-200 flex justify-center px-2">
            <div className={`${logoadj(id)} ${logoad2(id)} w-44 h-40 pt-10`}>
                <img loading="lazy" src={logo} className="w-full" alt="" />
            </div>
        </div>
            
    )
}
export default ClientsCard;