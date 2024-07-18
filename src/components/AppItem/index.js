import './index.css'

const AppItem = props => {
  const {appsDetails} = props
  const {appName, imageUrl} = appsDetails
  return (
    <>
      <li className="app-item-container">
        <img className="project-item-image" src={imageUrl} alt={appName} />
        <p className="app-name">{appName}</p>
      </li>
    </>
  )
}

export default AppItem
