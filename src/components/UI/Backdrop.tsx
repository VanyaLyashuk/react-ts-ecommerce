interface BackdropProps {
  hideBackdrop: () => void,
}

const Backdrop: React.FC<BackdropProps> = ({hideBackdrop}) => {
  return (
    <div 
      onClick={hideBackdrop}
      className="fixed inset-0 z-[999] bg-[#212a2fd9] transition-all duration-[350] delay-[350]"></div>
  )
}

export default Backdrop
