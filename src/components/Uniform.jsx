import React, { useState } from 'react';
import './Uniform.css';
import { useNavigate } from 'react-router-dom';

const Uniform = () => {
  const [pplCount, setPplCount] = useState(1);
  const navigate=useNavigate();
  const drsCost = {
    Shirt: 160,
    Pant: 150,
    Tie: 75,
    Belt: 75,
    Shoes: 200,
    Socks: 80
  };

  const [drsCounts, setDrsCounts] = useState({
    Shirt: 1,
    Pant: 1,
    Tie: 1,
    Belt: 1,
    Shoes: 0,
    Socks: 0
  });

  const handleDrsCntChange = (item, value) => {
    const count = parseInt(value) || 0;
    setDrsCounts(prev => ({
      ...prev,
      [item]: count
    }));
  };

  const totalPerPerson = Object.keys(drsCost).reduce((total, item) => {
    return total + drsCost[item] * drsCounts[item];
  }, 0);

  const totalCost = totalPerPerson * pplCount;
  return (
    <>
    <div className='uniform-container'>
    <div style={{ padding: '10px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>School Uniform Calculator</h2>
      <div style={{ marginBottom: '20px' }}>
        <label>Number of Students: </label>
        <input type="number" min="1" value={pplCount} onChange={(e) => setPplCount(parseInt(e.target.value)||1)}
          style={{ marginLeft: '10px', padding: '5px' }}
        />
      </div>

      <h3>Dress Items:</h3>
      {Object.keys(drsCost).map(item => (
        <div key={item} style={{ marginBottom:'10px'}}>
          <label>
            {item} (₹{drsCost[item]}):
          </label>
          <input type="number" min="0" value={drsCounts[item]}
            onChange={(e)=> handleDrsCntChange(item, e.target.value)}
            style={{ marginLeft:'10px', padding:'5px'}}
          />
        </div>
      ))}
      <hr/>
      <p><strong>Total Cost per Person:</strong> ₹{totalPerPerson}</p>
      <p><strong>Total Cost for {pplCount} People:</strong> ₹{totalCost}</p>
    </div>
    <div className="uniform-nav-buttons">
        <button onClick={() => navigate('/login')}>Back</button>
        <button onClick={() => navigate('/contact')}>Next</button>
    </div>
   </div>
   </>
  );
};

export default Uniform;
