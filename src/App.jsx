import Form from './components/Form';

function App() {
  const personFields = [
    { name: 'firstName', label: 'First name' },
    { name: 'lastName', label: 'Last name' },
    { name: 'email', label: 'Email' },
    { name: 'phoneNumber', label:'Phone Number'}
  ];

  const educationalFields = [
    { name: 'schoolName', label: 'School Name' },
    { name: 'titleOfStudy', label: 'Title of Study' },
    { name: 'dateOfStudy', label: 'Date of Study' },
  ];

  const practicalExperience = [
    { name: 'companyName', label: 'Company Name' },
    { name: 'positionTitle', label: 'Position Title' },
    { name: 'mainResponsibilities', label: 'Main Responsibilities' },
    { name: 'dateWorkedFrom', label: 'Date Worked From' },
    { name: 'dateWorkedUntil', label: 'Date Worked Until' },
  ];

  return (
    <div>
      <h1 className="cv-title">Curriculum Vitae</h1>
      <h2 className="cv-section">Personal Information</h2>
      <Form fields={personFields} />

      <h2 className="cv-section">Education</h2>
      <Form fields={educationalFields} />

      <h2 className="cv-section">Work Experience</h2>
      <Form fields={practicalExperience} />
    </div>
  );
}

export default App;
