import React, { useState } from 'react';
import { useAddNewTeacherMutation } from '../services/teacher';

const AddTeacher = () => {
  const [name, setName] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [details, setDetails] = useState('');
  const [professionalPhoto, setProfessionalPhoto] = useState('');
  const [savedStatus, setSavedStatus] = useState(['off']);

  const onNameChange = (e) => setName(e.target.value);
  const onSubjectIdChange = (e) => setSubjectId(e.target.value);
  const onDetailsChange = (e) => setDetails(e.target.value);
  const onImageChange = (e) => setProfessionalPhoto(e.target.files[0]);
  const [addNewTeacher, { isLoading }] = useAddNewTeacherMutation();

  const canSave = [
    name,
    subjectId,
    details,
    professionalPhoto,
  ].every(Boolean) && !isLoading;

  const onFormSubmit = async (e) => {
    if (canSave) {
      try {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('subject_id', subjectId);
        formData.append('details', details);
        formData.append('professional_photo', professionalPhoto);
        await addNewTeacher(formData).unwrap();
        setName('');
        setSubjectId('');
        setDetails('');
        setProfessionalPhoto('');
        setSavedStatus(['saved']);
      } catch (err) {
        setSavedStatus(['error', err]);
      }
    }
  };

  const Message = () => {
    switch (savedStatus[0]) {
      case 'saved':
        return <p>Created sucessfully!</p>;
      case 'error':
        return (
          <p>
            This error occurred:
            {savedStatus[1]}
          </p>
        );
      default:
        return <p />;
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      Teacher name:
      <input type="text" value={name} onChange={onNameChange} />
      <br />
      <br />
      Subject ID:
      <input type="text" value={subjectId} onChange={onSubjectIdChange} />
      <br />
      <br />
      Teacher Details:
      <input type="text" value={details} onChange={onDetailsChange} />
      <br />
      <br />
      <input type="file" accept="image/*" multiple={false} onChange={onImageChange} />
      <br />
      <br />
      <input type="submit" value="Send" />
      <Message />
    </form>
  );
};

export default AddTeacher;
