import Link from 'next/link';

const Footer = () => {
  return (
    <footer aria-label='Site Footer' className='fixed bottom-5 left-1/2 -translate-x-1/2'>
      <Link className="flex flex-row items-center" target="_blank" href="/">
        <img className='hover:-rotate-45 transition-all duration-400' src='/images/favicon.ico' alt="company Logo"/>
        <h5 className='text-indigo-400 pl-3 font-bold hover:text-indo-300'>Try Linktree</h5>
      </Link>
    </footer>
  )
}

export default Footer