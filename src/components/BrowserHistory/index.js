import './index.css'

const BrowserHistory = props => {
  const {HistoryItems, deleteListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = HistoryItems

  const Delete = () => {
    deleteListItem(id)
  }
  console.log(id)
  return (
    <li className="listContainer">
      <p className="time">{timeAccessed}</p>

      <div className="contentContainer">
        <img className="imgUrl" src={logoUrl} alt="domain logo" />
        <div className="titleContainer">
          <p className="title">{title}</p>
          <p className="domainName">{domainUrl}</p>
        </div>
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={Delete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}
export default BrowserHistory
