import grop from "../../assets/grp.png"
import grop1 from "../../assets/DELIGHTING.png"

const Innocent = () => {
    return (
        <div className="lg:flex md:flex lg:p-28 "> 
            <div className="lg:flex lg:w-1/2 md:w-1/2 bg-[#1B2946] justify-between lg:p-20 p-10" >
                <img className="w-[186px] h-[71px]" src={grop} alt="" />
                <div>
                    <h1 className="text-white lg:text-2xl mt-2">YOUR ARE INNOCENT <br /> UNTIL PROVEN GUILTY</h1>
                </div>
            </div>
            <div className="lg:flex lg:w-1/2  bg-[#799adc] justify-between">
                <img className="" src={grop1} alt="" />
            </div>
        </div>
    );
};

export default Innocent;