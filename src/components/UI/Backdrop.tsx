interface BackdropProps {
  hideBackdrop: () => void,
  zIndex?: number
}

const Backdrop: React.FC<BackdropProps> = ({hideBackdrop, zIndex}) => {
  return (
    <div 
      onClick={hideBackdrop}
      className="fixed inset-0 z-[997] bg-[#212a2fd9] transition-all duration-[350] delay-[350]"
      style={{zIndex: zIndex}}></div>
  )
}

export default Backdrop
