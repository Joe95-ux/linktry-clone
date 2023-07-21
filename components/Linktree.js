import React from 'react'
import LinkTreeCard from './LinkTreeCard';

const Linktree = ({data}) => {
  const {name, avatar, bio, links} = data;
  return (
    <>
     <section>
        <img src={avatar} alt='user avatar'/>
        <h2>{name ? name : 'No Username'}</h2>
        <p>{bio}</p>
        <div>
          <AnimatePresence>
            {links.map((link, index)=>{
              <motion.div key={index} initial={{opacity: 0}} animate={{opacity:1, y:0, transition: {delay: index * 0.1 + 0.5}}}>
                <LinkTreeCard/>

              </motion.div>
            })}
          </AnimatePresence>


        </div>
     </section>
    </>
  )
}

export default Linktree