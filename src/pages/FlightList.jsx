import React from 'react'
import { Link } from 'react-router-dom';

export default function FlightList() {
  const reister = [
    {id:1,from:'Almaty',to:'Astana',price: 25000,time:'10:00',airline:'Air-Astana',seats: 50},
    {id:2,from:'Almaty',to:'Shymkent',price: 30000,time:'14:30',airline:'SCAT',seats: 45},
    {id:3,from:'Astana',to:'Almaty',price: 20000,time:'16:00',airline:'Qazaq Air',seats: 60},
  ];
  return (
    <div>
      <h1>Ушак рейстеры</h1>
      <div className='inputsearch'>
      <input className='input' placeholder='Кайдан немесе кайда ыздеу...' type="text" />
      <button>пойск</button>
      </div>
      {reister.map((reis)=>{
        return(
          <div>
            <div className='left-side'>
              <h4>{reis.from}{reis.to}</h4>
              <p>{reis.time}</p>
              <p>{reis.airline}</p>
              <p>{reis.seats}</p>
            </div>
            <div className='right-side'>
              <h3>Baga</h3>
              <Link>Броньдау</Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
