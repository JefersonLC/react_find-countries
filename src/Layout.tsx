import { ReactNode } from 'react'
import Footer from './components/Footer'
import { LayoutStyle } from './css/Layout'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={LayoutStyle}>
      {children}
      <Footer />
    </div>
  )
}
