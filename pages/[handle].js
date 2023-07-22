import React, { useEffect, useState } from 'react';
import Linktree from '@/components/Linktree';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export const handle = () => {
  const router = useRouter();
  const [data, setData] = useState({});
  const [userFound, setUserFound] = useState(false);
  useEffect(()=>{
    if(router.query?.handle){
      fetch(`http://localhost:8080/get/${router.query.handle}`).then(res=>res.json()).then(data=>{
        if(data.status === 'error') return toast.error(data.error);
        if(data.status === 'success'){
          setData(data.userData);
          setUserFound(true);

        }

      }).catch(err=>{
        console.log(err);
      })

    }

  }, [router.query])
  return (
    <>
    {userFound ? 
    <div>
      <Linktree data={data}/>
    </div> : 
    <div>
      User not found!
    </div>}
    </>
    
  )
}
