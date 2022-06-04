import { useSelector, useDispatch, connect } from 'react-redux'
import { toggleVisibleProfile } from '../store/profile'
import styles from './profile.module.css'

export const ProfilePage = ({ toggleVisibleProfileWithConnect }) => {
  const profile = useSelector((state) => state.profile)
  const dispatch = useDispatch()
  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col - 12}>
              <h2>Контакты для связи</h2>
            </div>
          </div>
        </div>
        <div className={styles.container}>
          <button onClick={() => dispatch(toggleVisibleProfile())}>
            Раскрыть профиль
          </button>
          {/* <button onClick={toggleVisibleProfileWithConnect}>
            toggleVisibleProfileWithConnect
          </button> */}
          <hr />
          {profile.isVisibleProfile && (
            <div className={styles.row}>
              <div className={styles.col - 12}>
                <h1>{profile.firstName}</h1>
                <h1>{profile.lastName}</h1>
                <p>Телефон: +7 (123) 456-78-90</p>
                <p>
                  Почта: <a href="mailto: #">test@test.com</a>
                </p>
                <p>Скайп: skype</p>
                <p>Телеграм: @telegram</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// @TODO witout hooks
const mapStateToProps = (state) => {
  return {
    profile: state.profile,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleVisibleProfileWithConnect: () => dispatch(toggleVisibleProfile()),
  }
}

export const ProfilePageWithConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePage)
