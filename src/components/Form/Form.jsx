import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box, Button, MenuItem, Modal, Select, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 6,
  pb: 3,
};

const Form = () => {
  const [studying, setStudying] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [grade, setGrade] = useState('');
  const [open, setOpen] = useState(false);

  const handleStudyingChange = (event) => {
    setStudying(event.target.value);
    setEducationLevel('');
    setGrade('');
  };

  const handleEducationLevelChange = (event) => {
    setEducationLevel(event.target.value);
    setGrade('');
  };

  const handleGradeChange = (event) => {
    setGrade(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    handleOpen();
  };

  return (
    <FormControl sx={{ marginLeft: '550px', marginTop: '50px' }}>
      <h2 className="text-3xl font-bold text-center">Hi Poushali, Welcome to Greeks of Gurukol</h2>
      <FormLabel sx={{ fontWeight: 'bold' }} id="demo-row-radio-buttons-group-label">
        Are you currently studying?
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={studying}
        onChange={handleStudyingChange}
      >
        <FormControlLabel value="yes" control={<Radio />} label="Yes, I am studying" />
        <FormControlLabel sx={{ marginLeft: '100px' }} value="no" control={<Radio />} label="No, I am not studying" />
      </RadioGroup>

      {studying === 'yes' && (
        <Box sx={{ marginTop: '10px' }}>
          <FormLabel sx={{ fontWeight: 'bold' }}>Are you currently?</FormLabel>
          <RadioGroup row value={educationLevel} onChange={handleEducationLevelChange}>
            <FormControlLabel value="school" control={<Radio />} label="In School" />
            <FormControlLabel sx={{ marginLeft: '100px' }} value="college" control={<Radio />} label="In College" />
          </RadioGroup>
        </Box>
      )}

      {studying === 'no' && (
        <Box sx={{ marginTop: '10px' }}>
          <FormLabel sx={{ fontWeight: 'bold' }}>Are you currently?</FormLabel>
          <RadioGroup row value={educationLevel} onChange={handleEducationLevelChange}>
            <FormControlLabel value="lookingForJob" control={<Radio />} label="Looking for a job" />
            <FormControlLabel sx={{ marginLeft: '100px' }} value="currentlyWorking" control={<Radio />} label="Currently working" />
          </RadioGroup>
        </Box>
      )}

      {educationLevel === 'school' && (
        <Box sx={{ marginTop: '10px' }}>
          <RadioGroup>
            <FormLabel sx={{ fontWeight: 'bold' }}>School Name</FormLabel>
            <TextField id="filled-basic" sx={{ marginTop: '30px', width: '500px' }} />
          </RadioGroup>
          <FormControl sx={{ m: 1, minWidth: 120, marginTop: '10px', display: 'flex' }}>
            <FormLabel sx={{ fontWeight: 'bold' }}>Select your Grade</FormLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={grade}
              label="Grade"
              displayEmpty
              onChange={handleGradeChange}
            >
              <MenuItem value="">
                <em>Grade?</em>
              </MenuItem>
              <MenuItem value={6}>Six</MenuItem>
              <MenuItem value={7}>Seven</MenuItem>
              <MenuItem value={8}>Eight</MenuItem>
              <MenuItem value={9}>Nine</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={11}>Eleven</MenuItem>
              <MenuItem value={12}>Twelve</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}

      {educationLevel === 'college' && (
        <Box sx={{ marginTop: '10px' }}>
          <RadioGroup>
            <FormLabel sx={{ fontWeight: 'bold' }}>College Name</FormLabel>
            <TextField id="filled-basic" sx={{ marginTop: '30px', width: '500px' }} />
          </RadioGroup>
          <FormControl sx={{ m: 1, minWidth: 120, marginTop: '10px', display: 'flex' }}>
            <FormLabel sx={{ fontWeight: 'bold' }}>Select your lastest degree</FormLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={grade}
              label="degree"
              displayEmpty
              onChange={handleGradeChange}
            >
              <MenuItem value="">
                <em>lastest degree?</em>
              </MenuItem>
              <MenuItem value="btech">BTech</MenuItem>
              <MenuItem value="bsc">B.Sc</MenuItem>
              <MenuItem value="bba">BBA</MenuItem>
              <MenuItem value="mba">MBA</MenuItem>
            </Select>
            <FormLabel sx={{ fontWeight: 'bold' }}>Select your graduation year</FormLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={grade}
              label="graduation"
              displayEmpty
              onChange={handleGradeChange}
            >
              <MenuItem value="">
                <em>graduation year?</em>
              </MenuItem>
              <MenuItem value={2024}>2024</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}

      {educationLevel === 'lookingForJob' && (
        <Box sx={{ marginTop: '10px' }}>
          <RadioGroup>
            <FormLabel sx={{ fontWeight: 'bold' }}>College Name</FormLabel>
            <TextField id="filled-basic" sx={{ marginTop: '30px', width: '500px' }} />
          </RadioGroup>
          <FormControl sx={{ m: 1, minWidth: 120, marginTop: '10px', display: 'flex' }}>
            <FormLabel sx={{ fontWeight: 'bold' }}>Select your lastest degree</FormLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={grade}
              label="degree"
              displayEmpty
              onChange={handleGradeChange}
            >
              <MenuItem value="">
                <em>lastest degree?</em>
              </MenuItem>
              <MenuItem value="btech">BTech</MenuItem>
              <MenuItem value="bsc">B.Sc</MenuItem>
              <MenuItem value="bba">BBA</MenuItem>
              <MenuItem value="mba">MBA</MenuItem>
            </Select>
            <FormLabel sx={{ fontWeight: 'bold' }}>Select your graduation year</FormLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={grade}
              label="graduation"
              displayEmpty
              onChange={handleGradeChange}
            >
              <MenuItem value="">
                <em>graduation year?</em>
              </MenuItem>
              <MenuItem value={2024}>2024</MenuItem>
              <MenuItem value={2023}>2023</MenuItem>
              <MenuItem value={2022}>2022</MenuItem>
              <MenuItem value={2021}>2021</MenuItem>
              <MenuItem value={2020}>2020</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}

      {educationLevel === 'currentlyWorking' && (
        <Box sx={{ marginTop: '10px' }}>
          <RadioGroup>
            <FormLabel sx={{ fontWeight: 'bold' }}>Company Name</FormLabel>
            <TextField id="filled-basic" sx={{ marginTop: '30px', width: '500px' }} />
          </RadioGroup>
          <FormControl sx={{ m: 1, minWidth: 120, marginTop: '10px', display: 'flex' }}>
            <FormLabel sx={{ fontWeight: 'bold' }}>Select your experience</FormLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={grade}
              label="degree"
              displayEmpty
              onChange={handleGradeChange}
            >
              <MenuItem value="">
                <em>years of experience?</em>
              </MenuItem>
              <MenuItem value={1}>One</MenuItem>
              <MenuItem value={2}>Two</MenuItem>
              <MenuItem value={3}>Three</MenuItem>
              <MenuItem value={4}>Four</MenuItem>
              <MenuItem value={5}>Five</MenuItem>
            </Select>
            <FormLabel sx={{ fontWeight: 'bold' }}>Select your job title</FormLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={grade}
              label="graduation"
              displayEmpty
              onChange={handleGradeChange}
            >
              <MenuItem value="">
                <em>occupation?</em>
              </MenuItem>
              <MenuItem value="fullstack">Full stack developer</MenuItem>
              <MenuItem value="sr.fullstack">Sr. Full stack developer</MenuItem>
              <MenuItem value="aiEngineer">AI Engineer</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}

      <Button onClick={handleSubmit} variant="contained" color="success">
        Submit
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="child-modal-title">Submitted Information</h2>
          <p id="child-modal-description">
            Studying: {studying === 'yes' ? 'Yes' : 'No'}
            <br />
            {studying === 'yes' && (
              <>
                Education Level: {educationLevel === 'school' ? 'School' : 'College'}
                <br />
                {educationLevel === 'school' ? `Grade: ${grade}` : ''}
                {educationLevel === 'college' ? `Latest Degree: ${grade}` : ''}
              </>
            )}
            {studying === 'no' && (
              <>
                Current Status: {educationLevel === 'lookingForJob' ? 'Looking for a job' : 'Currently working'}
                <br />
                {educationLevel === 'currentlyWorking' ? `Experience: ${grade}` : ''}
              </>
            )}
          </p>
          <Button onClick={handleClose}>Close Modal</Button>
        </Box>
      </Modal>
    </FormControl>
  );
};

export default Form;
