import Footer from '@/components/shared/footer/Footer'
import Navbar from '@/components/shared/navbar/Navbar'

export default function layout ({children}: {children: React.ReactNode}) {
  return (
    <div>
        <Navbar />
        <div className="min-h-screen">
            {children}
        </div>
        <Footer />
    </div>
  )
}
