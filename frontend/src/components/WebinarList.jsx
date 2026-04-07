import React from 'react';
import PropTypes from 'prop-types';

const WebinarList = ({ webinars, onEdit, onDelete, loading }) => {
  if (loading) {
    return <div className="loading">Loading webinars...</div>;
  }

  if (!webinars || webinars.length === 0) {
    return <div className="no-webinars">No webinars found. Create one to get started!</div>;
  }

  return (
    <div className="webinar-list">
      {webinars.map((webinar) => (
        <div key={webinar.id} className="webinar-card">
          <h3>{webinar.title}</h3>
          <p><strong>Description:</strong> {webinar.description}</p>
          <p><strong>Date:</strong> {new Date(webinar.date).toLocaleDateString()}</p>
          <p><strong>Speaker:</strong> {webinar.speaker}</p>
          <div className="actions">
            <button className="btn btn-secondary btn-sm" onClick={() => onEdit(webinar)}>
              Edit
            </button>
            <button className="btn btn-danger btn-sm" onClick={() => onDelete(webinar.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

WebinarList.propTypes = {
  webinars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
      speaker: PropTypes.string,
    })
  ),
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  loading: PropTypes.bool,
};

WebinarList.defaultProps = {
  webinars: [],
  onEdit: () => {},
  onDelete: () => {},
  loading: false,
};

export default WebinarList;
