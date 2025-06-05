import { useNavigate } from "react-router-dom";

function Home() {
  const navigate=useNavigate();
  return (
    <div className='home-cntr' style={{padding:'20 px',textAlign:'center'}}>
    <h1 style={{padding:'20px', color: '#000'}}>Welcome to Our School Website!!</h1>
    <img src='/src/assets/school1.jpeg' alt='School-pic'
    style={{width:'100%',maxWidth:'600px',marginTop:'1px',}}
    />
    <div >
        <button onClick={() => navigate(-1)} style={{ marginRight: '10px' }}>Back</button>
        <button onClick={() => navigate('/about')}>Next</button>
      </div>
    </div>
  );
}

export default Home;

         