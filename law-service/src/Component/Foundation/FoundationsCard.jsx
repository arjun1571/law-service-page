

const FoundationsCard = ({data}) => {
    return (
        <div className='p-8 border space-y-4'>
            <div className='bg-[#E8F1FE] p-3 inline-block'>
            <img src={data.image} alt="" />
            </div>
            <h3 className='text-lg md:text-xl font-medium text-[#1C2946]'>{data.title}</h3>
            <p className='text-[#646F85]'>{data.description}</p>
        </div>
    );
};

export default FoundationsCard;