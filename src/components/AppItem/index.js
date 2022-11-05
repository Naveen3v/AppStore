// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, category} = appDetails

  return (
    <li className="applistitem">
      <img src={imageUrl} alt="app item" className="appimage" />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
