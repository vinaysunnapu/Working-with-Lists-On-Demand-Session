import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabDetails} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateTabDetails(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
