import { useState, useEffect } from 'react'
import axios from 'axios'
import WebinarList from './components/WebinarList'
import WebinarForm from './components/WebinarForm'
import './App.css'

function App() {
  const [webinars, setWebinars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingWebinar, setEditingWebinar] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    fetchWebinars()
  }, [])

  const fetchWebinars = async () => {
    try {
      const response = await axios.get('/api/webinars')
      setWebinars(response.data)
      setLoading(false)
    } catch (err) {
      setError('Failed to fetch webinars. Make sure the backend is running on port 8080.')
      setLoading(false)
    }
  }

  const handleAddWebinar = async (webinarData) => {
    try {
      await axios.post('/api/webinars', webinarData)
      fetchWebinars()
      setShowForm(false)
    } catch (err) {
      setError('Failed to add webinar')
    }
  }

  const handleUpdateWebinar = async (webinarData) => {
    try {
      await axios.put(`/api/webinars/${webinarData.id}`, webinarData)
      fetchWebinars()
      setEditingWebinar(null)
      setShowForm(false)
    } catch (err) {
      setError('Failed to update webinar')
    }
  }

  const handleDeleteWebinar = async (id) => {
    try {
      await axios.delete(`/api/webinars/${id}`)
      fetchWebinars()
    } catch (err) {
      setError('Failed to delete webinar')
    }
  }

  const handleEdit = (webinar) => {
    setEditingWebinar(webinar)
    setShowForm(true)
  }

  if (loading) return <div className="loading">Loading webinars...</div>
  if (error) return <div className="error">{error}</div>

  return (
    <div className="app">
      <header className="header">
        <h1>Edu Webinars</h1>
        <p>Manage and schedule educational webinars</p>
      </header>
      <main className="main">
        <button className="add-btn" onClick={() => setShowForm(true)}>
          + Add New Webinar
        </button>
        {showForm && (
          <WebinarForm
            webinar={editingWebinar}
            onSubmit={editingWebinar ? handleUpdateWebinar : handleAddWebinar}
            onCancel={() => { setShowForm(false); setEditingWebinar(null) }}
          />
        )}
        <WebinarList
          webinars={webinars}
          onEdit={handleEdit}
          onDelete={handleDeleteWebinar}
        />
      </main>
    </div>
  )
}

export default App
