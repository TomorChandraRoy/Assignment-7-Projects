import { useState } from "react";
import Card from "../Cards/Card";
import { useEffect } from "react";
import "./HomeCards.css"
import { BiDollar } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';
import Swal from 'sweetalert2'



const HomeCards = () => {
   const [allData, setAllData] = useState([]);
   const [singleTitle, setSingleTitle] = useState([])
   const [remaining, setRemaining] = useState([20])
   const [totalcoast, setTotalCoast] = useState([0])


   useEffect(()=>{
    fetch('./data.json')
    .then(res => res.json())
    .then(data => setAllData(data) )
   }, [])

  const handleSelect =(singleData)=>{
        const isExist = singleTitle.find(item1 => item1.id ==singleData.id)

        let  count = singleData.credit

        if(isExist){
            return Swal.fire(
                'It selected',
                ' You cannot select more than once',
                'warning'
              )
        }
        else{
            singleTitle.forEach(item => {
              count += item.credit
            });
            const totalRemaing = 20 - count
            if(count > 20){
                Swal.fire(
                    'Oops😊',
                    ' Your credit is over',
                    'warning'
                  )
            } 
            else{
                setTotalCoast(count);
                setRemaining(totalRemaing);
    
                const newAllData = [...singleTitle, singleData];
                setSingleTitle(newAllData)
            }

        }
    }


    return (
        <>
        <h2 className="Course-title">Course Registration</h2>
        <div className="header-container">
          <div className="container">
      
            {
                allData.map(singleData =>(
                    <div key={singleData.id} className="main-container">
                        <div className="img-section">
                            <img src={singleData.image} alt="" />
                            <h3 className="title">{singleData.title}</h3>
                            <p className="description">{singleData.des}</p>

                           <div className="dollor-section">
                             <h3> <BiDollar /></h3>
                             <p className="price-style">Price: {singleData.price}</p>
                             <h3><BsBook/></h3>
                             <p className="price-style">Credit : {singleData.credit}hr</p>
                           </div>
                           <div>
                           <button onClick={()=>handleSelect(singleData )}  className="btn">Select</button>
                           
                           </div>
                        </div>
                       
                    </div>
                     
                ))
              
            }
          </div>
          <div className="card-container">
              <Card handleSelect1={singleTitle} remaining1={remaining} totalcoast1={totalcoast}></Card>
           </div>
        </div>
        </>
    );
};

export default HomeCards;