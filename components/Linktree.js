import React from 'react'

const Linktree = ({data}) => {
  const {name, avatar, bio, links} = data;
  return (
    <>
     <section>
        <img src={avatar} alt=''/>
        <h2>{name ? name : 'No Username'}</h2>
        <p>{bio}</p>
     </section>
    </>
  )
}

export default Linktree