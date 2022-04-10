import React, { useContext, useEffect } from 'react'
import { GlobalStateContext } from '../../GlobalState'
import { Link } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'

function OrderHistory() {
  const state = useContext(GlobalStateContext)
  const [history, setHistory] = state.userAPI.history
  const [isAdmin] = state.userAPI.isAdmin
  const [token] = state.token

  useEffect(() => {
    if (token) {
      const getHistory = async () => {
        if (isAdmin) {
          const res = await axios.get('/api/payment ', {
            headers: { Authorization: token }
          })
          setHistory(res.data)
        } else {
          const res = await axios.get('/user/history', {
            headers: { Authorization: token }
          })
          setHistory(res.data)
        }
      }
      getHistory()
    }
  }, [token, isAdmin, setHistory])

  return (
    <div className='order-history'>
      <h2>History</h2>


      <h4>You have {history.length} ordered</h4>


      <table>
        <thead>
          <tr>
            <th>PaymentID</th>
            <th>Date of Purchased</th>
            <th>Payment ID</th>
          </tr>
        </thead>
        <tbody>
          {
            history.map(item => (
              <tr key={item._id}>
                <td>{item.paymentID}</td>
                <td>{moment(item.createdAt).format('YYYY-MM-DD')}</td>
                <td><Link to={`/history/${item._id}`}>View</Link></td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default OrderHistory