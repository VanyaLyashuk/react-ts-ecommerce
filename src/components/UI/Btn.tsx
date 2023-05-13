type BtnProps = {
  children: string,
  className?: string,
  disabled?: boolean,
  component?: JSX.Element,
}

const Btn = ({ children, className, disabled}: BtnProps) => {
  return (
    <button
      className={`btn ${className ? className : null}`} disabled={disabled}>
        {children}
    </button>
  )
}

export default Btn;
