// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClassName = isActive ? 'activetabbtn' : ''

  const changetabId = () => {
    updateActiveTabId(tabId)
  }

  return (
    <li className="tablistitem">
      <button
        type="button"
        onClick={changetabId}
        className={`btn ${activeTabClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
