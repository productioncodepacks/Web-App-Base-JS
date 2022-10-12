const Button = ({ isCompact, number, onClick }) => {
  const className = isCompact ? "button button-compact" : "button"

  return (
    <>
      <button className={className} onClick={onClick}>Button {number}</button>

      <style jsx>{`
        .button {
          width: 100%;
          padding: 24px 0;
          background: #49FF29;
          border: 1px solid #D4FFCC;
          border-radius: 128px;
          box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.33);
          font-weight: 700;
          color: #062900;
          transition-duration: 0.25s;
          cursor: pointer;
        }

        .button-compact {
          border-radius: 8px;
        }

        .button:hover {
          background: #26FF00;
        }
      `}</style> 
    </>
  )
}

export default Button
