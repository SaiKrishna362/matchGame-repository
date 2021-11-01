import './index.css'

const ListItems = props => {
  const {eachList, onChangeImage} = props
  const {id, thumbnailUrl} = eachList

  const onClickImage = () => {
    onChangeImage(id)
  }

  return (
    <li className="list-container">
      <button type="button" className="th-btn" onClick={onClickImage}>
        <img src={thumbnailUrl} alt={thumbnailUrl} className="thumbnail" />
      </button>
    </li>
  )
}
export default ListItems
