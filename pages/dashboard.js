import React, {useEffect, useState, useContext} from 'react'
import UserHeader from '@/components/UserHeader';
import {toast} from 'react-toastify'
import LinkBox from '@/components/Linbox';

const dashboard = () => {
   const [data, setData] = useState({});
//    const {setUserData} = useContext(UserContext);
   useEffect(()=>{
    if(!localStorage.getItem('linktreeToken')) return window.location.href = '/login';
    fetch('http://localhost:4000/data/dashboard', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        tokenMail: localStorage.getItem('linktreeToken')
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.status==='error') return toast.error('Error happened');
      setData(data.userData);
      localStorage.setItem('userHandle', data.userData.handle);
      // toast.success(data.message)
    }).catch(err=>{
      console.log(err);
    })

  }, [])
  return (
    <>
    <div className=''>
        <UserHeader data={data}/>
        <main>
            <section className='grid md:grid-cols-2 xl:grid-cols-4 gap-5'>
            <LinkBox lbTitle="Links" lbNumber={data.links} lbSvg="link" lbTheme="red"/>
            <LinkBox lbTitle="Growth" lbNumber="30%" lbSvg="chart" lbTheme="blue"/>
            <LinkBox lbTitle="Links" lbNumber="12" lbSvg="email" lbTheme="red"/>
            <LinkBox lbTitle="Growth" lbNumber="30%" lbSvg="ig" lbTheme="blue"/>
            </section>
            <section>

            </section>
        </main>

    </div>

    </>
  )
}

export default dashboard