import './index.css'

const AppointmentItems = props => {
  const {eachitem, isstarred} = props
  const {title, datetimes, isActive, id} = eachitem
  const changestar = () => {
    isstarred(id)
  }
  const star = isActive
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  return (
    <li className="list-items">
      <div>
        <p className="card-heading">{title}</p>
        <p className="card-para">Date : {datetimes}</p>
      </div>
      <button
        className="listbutton"
        type="button"
        onClick={changestar}
        data-testid="star"
      >
        <img src={star} alt="star" className="star-setting" />
      </button>
    </li>
  )
}

export default AppointmentItems
