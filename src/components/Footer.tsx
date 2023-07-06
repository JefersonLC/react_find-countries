import { FooterStyle } from '../css/Footer'

export default function Footer() {
  return (
    <footer className={FooterStyle}>
      Powered By JefersonLC - {new Date().getFullYear()}
    </footer>
  )
}
