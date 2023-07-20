/* eslint-disable no-unused-vars */
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Fragment, useEffect, useReducer } from "react"
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const initialState = {
  issLocation: {},
  astronauts: {},
  isLoading: false,
  error: ''
}

function reducer(state, action) {
  switch (action.type) {
    case 'iss/loading':
      return { ...state, isLoading: true }
    case 'iss/loaded':
      return { ...state, issLocation: action.payload.iss_position, isLoading: false }
    case 'iss/failed':
      return { ...state, error: action.payload, isLoading: false }
    case 'astronauts/loading':
      return { ...state, isLoading: true }
    case 'astronauts/loaded':
      return { ...state, astronauts: action.payload, isLoading: false }
    case 'astronauts/failed':
      return { ...state, error: action.payload, isLoading: false }
    default:
      return state
  }
}


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    // dispatch({ type: 'iss/loading' })
    const intervalId = setInterval(() => {
      axios.get('http://api.open-notify.org/iss-now.json').then((res) => {
        return res.data
      }).then((data) => {
        dispatch({ type: 'iss/loaded', payload: data })
      }).catch((error) => {
        dispatch({ type: 'iss/failed', payload: error.message })
      })
      axios.get('http://api.open-notify.org/astros.json').then((res) => {
        return res.data
      }).then((data) => {
        dispatch({ type: 'astronauts/loaded', payload: data })
      }).catch((error) => {
        dispatch({ type: 'astronauts/failed', payload: error.message })
      })
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [])

  return (
    <Fragment>
      {/* Header */}
      <Header />
      {/* Main */}
      <Main state={state} />
      {/* Footer */}
      < Footer />
    </Fragment>
  )
}
export default App