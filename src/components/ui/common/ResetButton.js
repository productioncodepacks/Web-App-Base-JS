const ResetButton = ({ isCompact, label, onClick }) => {
  const className = isCompact ? "button button-compact" : "button"

  return (
    <>
      <button className={className} onClick={onClick}>{label}</button>

      <style jsx>{`
        .button {
          width: 100%;
          padding: 16px 0;
          background: #2969FF;
          border-radius: 16px;
					box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.33);
          font-weight: 700;
          color: #000C29;
          transition-duration: 0.25s;
          cursor: pointer;
        }

        .button-compact {
          border-radius: 8px;
        }

        .button:hover {
          background: #004DFF;
        }
      `}</style> 
    </>
  )
}

export default ResetButton
