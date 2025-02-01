import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex justify-center items-center text-black text-xl h-screen flex-col'>
      <Link className='hover:underline' href="/login">Go to login</Link>
      <Link className='hover:underline' href="/dashboard">Go to dashboard</Link>
    </div>
  );
}
