import './index.css'

const TabItem = props => {
  const {eachList, clickTabItem, isActive} = props
  const {tabId, displayText} = eachList

  const actBtn = isActive ? 'act-button' : ''

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`button ${actBtn}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
