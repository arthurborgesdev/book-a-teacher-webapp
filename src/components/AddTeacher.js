import React, { useState } from 'react';
import { useGetSubjectsQuery } from '../services/dropdown';
import { useAddNewTeacherMutation } from '../services/teacher';

const AddTeacher = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [professionalPhoto, setProfessionalPhoto] = useState('');
  const [savedStatus, setSavedStatus] = useState(['off']);
  const [errorMessages, setErrorMessages] = useState([]);

  const onNameChange = (e) => setName(e.target.value);
  const onSubjectChange = (e) => setSubject(e.target.value);
  const onDetailsChange = (e) => setDetails(e.target.value);
  const onImageChange = (e) => setProfessionalPhoto(e.target.files[0]);

  const { data: subjects, error, isLoading: subjectLoading } = useGetSubjectsQuery();
  const [addNewTeacher, { isLoading }] = useAddNewTeacherMutation();

  const saveErrorMessages = (errors) => {
    const errorsToSave = Object.entries(errors).map((err) => `${err[0]}: ${err[1]}`);
    setErrorMessages(errorsToSave);
  };

  const canSave = [
    name,
    subject,
    details,
    professionalPhoto,
  ].every(Boolean) && !isLoading;

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (canSave) {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('subject_id', subject);
        formData.append('details', details);
        formData.append('professional_photo', professionalPhoto);
        await addNewTeacher(formData).unwrap();
        setName('');
        setSubject('');
        setDetails('');
        setProfessionalPhoto(null);
        setSavedStatus(['saved']);
        e.target.reset();
      } catch (err) {
        const errors = err.data.error;
        saveErrorMessages(errors);
        setSavedStatus(['error']);
      }
    }
  };

  const Message = () => {
    switch (savedStatus[0]) {
      case 'saved':
        return <p>Created sucessfully!</p>;
      case 'error':
        return (
          <div>
            This error occurred:
            { errorMessages.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        );
      default:
        return <p />;
    }
  };

  if (subjectLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return (
      <div>
        Oops, this error occured:
        {error}
      </div>
    );
  }

  return (
    <form onSubmit={onFormSubmit}>
      Teacher name:
      <input type="text" value={name} onChange={onNameChange} required />
      <br />
      <br />
      Subject:
      <select value={subject} onChange={onSubjectChange} required>
        <option value="">Select a Subject</option>
        { subjects.map((subject) => (
          <option key={subject.id} value={subject.id}>{subject.name}</option>
        ))}
      </select>
      <br />
      <br />
      Teacher Details:
      <input type="text" value={details} onChange={onDetailsChange} required />
      <br />
      <br />
      <input type="file" accept="image/*" multiple={false} onChange={onImageChange} required />
      <br />
      <br />
      <input type="submit" value="Send" />
      <Message />
    </form>
  );
};

export default AddTeacher;
