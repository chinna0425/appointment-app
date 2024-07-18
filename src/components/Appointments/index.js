import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItems from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointments: [], cnt: [], star: true}

  appointreason = event => {
    this.setState({title: event.target.value})
  }

  appointmentat = event => {
    this.setState({date: event.target.value})
  }

  isstarred = id => {
    const {appointments} = this.state
    const latest = appointments.map(each => {
      if (each.id === id) {
        return {...each, isActive: !each.isActive}
      }
      return each
    })
    this.setState({appointments: latest})
  }

  addtheappointment = event => {
    event.preventDefault()
    const {title, date, appointments} = this.state
    const datetimes = format(new Date(date), 'dd MMMM yyyy, EEEE')
    const adding = {title, datetimes, id: uuidv4(), isActive: false}
    const latest = [...appointments, adding]
    if (title !== '' && date !== '') {
      this.setState({title: '', date: '', appointments: latest})
    }
  }

  isfavourite = () => {
    const {appointments, star, cnt} = this.state
    const vr = appointments
    if (star) {
      const latest = appointments.filter(eachitem => eachitem.isActive === true)
      this.setState({appointments: latest, cnt: vr, star: false})
    } else {
      const latest = cnt
      this.setState({appointments: latest, cnt: vr, star: true})
    }
  }

  render() {
    const {title, date, appointments} = this.state
    return (
      <div className="background-container">
        <div className="inner-container">
          <div className="form-container">
            <div className="form-style">
              <form onSubmit={this.addtheappointment}>
                <h1 className="heading">Add Appointment</h1>
                <label htmlFor="inputlabel" className="title">
                  Title
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Title"
                  className="input-style"
                  onChange={this.appointreason}
                  value={title}
                  id="inputlabel"
                />
                <br />
                <label htmlFor="datelabel" className="title">
                  Date
                </label>
                <br />
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  className="input-style"
                  onChange={this.appointmentat}
                  value={date}
                  id="datelabel"
                />
                <br />
                <button type="submit" className="button">
                  Add
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="image"
              />
            </div>
          </div>
          <div className="form-container1">
            <div className="starred-container">
              <h1 className="heading1">Appointments</h1>
              <button
                type="button"
                className="button btn1"
                onClick={this.isfavourite}
              >
                Starred
              </button>
            </div>
            <ul className="unorder-list">
              {appointments.map(eachitem => (
                <AppointmentItems
                  eachitem={eachitem}
                  key={eachitem.id}
                  isstarred={this.isstarred}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default Appointments
