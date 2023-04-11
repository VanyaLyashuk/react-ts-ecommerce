type BtnProps = {
  children: string,
  className?: string,
}

const Btn = ({ children, className}: BtnProps) => {
  return (
    <button
      className={`btn ${className ? className : null}`}>
        {children}
    </button>
  )
}

export default Btn;
