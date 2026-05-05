export function UKFlag({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className={className}>
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z"/>
      </clipPath>
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v-15 h-30 z h-30 v-15 z v15 h30 z"/>
      </clipPath>
      <g clipPath="url(#s)">
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </g>
    </svg>
  )
}

export function SAFlag({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 600" className={className}>
      <path fill="#001489" d="M0 0h900v600H0z"/>
      <path fill="#E21018" d="M0 0h900v300H0z"/>
      <path fill="#fff" d="M0 160h900v280H0z"/>
      <path fill="#007749" d="M0 200h900v200H0zM0 0l450 300L0 600z"/>
      <path fill="#fff" d="M0 60l360 240L0 540z"/>
      <path fill="#FFB81C" d="M0 100l300 200L0 500z"/>
      <path fill="#000" d="M0 140l240 160L0 460z"/>
    </svg>
  )
}
