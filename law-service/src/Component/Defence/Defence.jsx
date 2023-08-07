import Charge from "./Charge";


const Defence = () => {
    
    const chargesData = [
        {
            no: '01',
            name: 'AssAULT',
        },
        {
            no: '02',
            name: 'DRUGS',
        },
        {
            no: '03',
            name: 'FIREARMS & OFFENSIVE WEAPONS',
        },
        {
            no: '04',
            name: 'HUMAN TRAFFICKING OFFENCES',
        },
        {
            no: '05',
            name: 'MURDER & MANSLAUGHTER',
        },
        {
            no: '06',
            name: 'MOTORING OFFENCE',
        },
        {
            no: '07',
            name: 'ONLINE FRAUD',
        },
        {
            no: '08',
            name: 'PROFESSIONAL MEDICAL NEGLIGENCE',
        },
        {
            no: '09',
            name: 'SERIOUS FRAUD',
        },
        {
            no: '10',
            name: 'SEXUAL OFFENCES',
        },
        {
            no: '11',
            name: 'TERRORISM OFFENCES',
        },
    ]
    return (
        <div className="px-4 md:px-10 lg:px-20 py-10 md:py-16 lg:py-32 bg-[#F7F7F7]">
            <h2 className="text-xl md:text-2xl lg:text-3xl text-center md:text-start  text-[#1C2946] font-medium mb-6 md:mb-10 lg:mb-16">Defence </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16">
                {
                    chargesData.map((data, index) => <Charge 
                    data={data}
                    key={index}
                    ></Charge>)
                }
            </div>
        </div>
    );
};

export default Defence;