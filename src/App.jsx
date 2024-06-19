import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:8081/hang')
  //     .then(res => {
  //       if (!res.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return res.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       setData(data); // Update the state with fetched data
  //     })
  //     .catch(err => {
  //       console.error('Fetch error:', err);
  //       setError(err);
  //     });
  // }, []);
  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <>
      <div>
        <h1>Địt Mẹ Huế</h1>
      <table>
        <thead>
          <tr>
            <th>MaHang</th>
            <th>TenHang</th>
            <th>SoLuong</th>
            <th>NgayNhap</th>
          </tr>
        </thead>
        {/* <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.MaHang}</td>
              <td>{d.TenHang}</td> 
              <td>{d.SoLuong}</td>
              <td>{d.NgayNhap}</td> 
            </tr>
          ))}
        </tbody> */}
      </table>
        
      </div>

    </>
  )
}

export default App
