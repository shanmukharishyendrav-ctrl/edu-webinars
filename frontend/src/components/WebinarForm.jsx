import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const WebinarForm = ({ webinar, onSubmit, onCancel, loading }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    speaker: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (webinar) {
      setFormData({
        title: webinar.title || '',
        description: webinar.description || '',
        date: webinar.date ? webinar.date.split('T')[0] : '',
        speaker: webinar.speaker || '',
      });
    }
  }, [webinar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    if (!formData.date) {
      newErrors.date = 'Date is required';
    }
    if (!formData.speaker.trim()) {
      newErrors.speaker = 'Speaker is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>{webinar ? 'Edit Webinar' : 'Create New Webinar'}</h2>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter webinar title"
        />
        {errors.title && <p className="error">{errors.title}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter webinar description"
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        {errors.date && <p className="error">{errors.date}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="speaker">Speaker</label>
        <input
          type="text"
          id="speaker"
          name="speaker"
          value={formData.speaker}
          onChange={handleChange}
          placeholder="Enter speaker name"
        />
        {errors.speaker && <p className="error">{errors.speaker}</p>}
      </div>

      <div className="actions">
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Saving...' : webinar ? 'Update Webinar' : 'Create Webinar'}
        </button>
        <button type="button" className="btn btn-secondary" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

WebinarForm.propTypes = {
  webinar: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    speaker: PropTypes.string,
  }),
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  loading: PropTypes.bool,
};

WebinarForm.defaultProps = {
  webinar: null,
  onSubmit: () => {},
  onCancel: () => {},
  loading: false,
};

export default WebinarForm;
