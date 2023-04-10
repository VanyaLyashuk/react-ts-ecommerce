type BtnProps = {
  btnTxt: string,
  className?: string,
}

const Btn = ({ btnTxt, className}: BtnProps) => {
  return (
    <button
      className={`btn ${className ? className : null}`}>
        {btnTxt}
    </button>
  )
}

export default Btn;
