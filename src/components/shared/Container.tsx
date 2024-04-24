
export default function Container ({children}: {children: React.ReactNode} ) {
  return (
    <div className='max-w-[1250px] mx-auto'>
        {children}
    </div>
  )
}
