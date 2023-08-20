// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemList, fun} = props

  const {id, title} = itemList
  const onButton = () => {
    fun(id)
  }
  return (
    <li className="frame1">
      <p className="para">{title}</p>
      <button className="button" onClick={onButton} key={id}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
