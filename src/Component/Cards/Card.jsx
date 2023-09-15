/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import './Card.css'
const Card = ({handleSelect1, remaining1, totalcoast1}) => {
    // console.log(handleSelect1)
    return (
        <div className="main-card">
            <div className='card-contain'>
                <h4 className='Card-title'>Credit Hour Remaining: {remaining1} hr </h4>
                <hr />
                <h3 className='card-name'>Course Name</h3>
                <hr />
            
                {
                  handleSelect1.map((nameTitle,index) => (
                    <ol>
                        {index+1}. {nameTitle.title}
                    </ol>
                    ))
                }
               
                <h4 className='card-total'>Total Credit Hour : {totalcoast1}</h4>
            </div>

        </div>
    );
};

export default Card;