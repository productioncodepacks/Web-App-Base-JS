const Stat = ({ isCompact, data }) => {
  const {
    redux,
    database1,
    database2
  } = data

  const className = isCompact ? "wrapper wrapper-compact" : "wrapper"

  return (
    <>
      <div className={className}>
        {redux && (
          <>
            <div className="heading">Redux Stats</div>
            <div className="stat">
              <div className="stat-stat">{redux.numClicks}</div>
            </div>
          </>
        )}

        {database1 && database2 && (
          <>
            <div className="heading">MongoDB Stats</div>
            <div className="stat">
              <div className="stat-heading">Axios DB1</div>
              <div className="stat-stat">{database1.numClicks === undefined ? "---" : database1.numClicks}</div>
            </div>
            <div className="stat">
              <div className="stat-heading">Axios DB2</div>
              <div className="stat-stat">{database2.numClicks === undefined ? "---" : database2.numClicks}</div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`
        .wrapper {
          width: 100%;
          background: #141414;
          border-radius: 32px;
          border: 1px solid #1A1A1A;
          box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.33);
          text-align: center;
        }

        .wrapper-compact {
          border-radius: 8px;
        }

        .heading {
          margin: 32px 0;
          font-weight: 700;
          color: #808080;
        }

        .stat {
          box-sizing: border-box;
          width: calc(100% - 32px);
          margin-left: 16px;
          padding: 16px 0;
          background: #5286FF;
          border-radius: 16px;
          margin-bottom: 16px;
        }

        .stat-heading {
          padding-bottom: 16px;
          font-weight: 700;
          color: #004cff;
        }

        .stat-stat {
          font-weight: 700;
          color: #000C29;
        }
      `}</style> 
    </>
  )
}

export default Stat
