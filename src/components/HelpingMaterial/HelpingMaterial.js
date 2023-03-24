//in this page we allow the user to upload one doc at a time, ask for the difficulty level, requires tags and when u click add it goes back from 
//state passing in function in assignment page and add a helping material to the database
//renders all helping material objects as well
import React, { useState } from 'react';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import FileUploader from './FileUploader'
import Box from "@mui/material/Box";
import Chip from '@mui/material/Chip';
import Stack from "@mui/material/Stack";



const HelpingMaterial = () => {
  const [HelpingMaterialFile, setHelpingMaterialFile] = useState(null);
  const [tags, setTags] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [HelpingMaterialTags, setHelpingMaterialTags] = useState([])
  const [CurrentTag, setCurrentTag] = useState("")


  const removeFile = (filename) => {
    setHelpingMaterialFile(HelpingMaterialFile.filter(file => file.name !== filename))
  }

  const handleFileChange = (event) => {
    setHelpingMaterialFile(event.target.files[0]);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    //send back an object
  };
  const handleCurrentTagChange = (event) => {
    const value = event.target.value;
    if (value != "") {
      setCurrentTag(value)
    }
  };
  const handleHelpingMaterialTags = () => {
    if (CurrentTag != "") {
      setHelpingMaterialTags([...HelpingMaterialTags, CurrentTag]);
      setCurrentTag("")
    }


  }
  const handleDeleteTag = (tagToDelete) => {
    setHelpingMaterialTags(HelpingMaterialTags => HelpingMaterialTags.filter((HelpingMaterialTag) => HelpingMaterialTag != tagToDelete))
  }

  return (
    <div className='Helping material left'>
      <div>
        <div className="split left" style={{ width: "50%", left: 0 }}>
          <div className="HelpingMaterial header" style={{ color: "#4b6cb7", padding: "5%", paddingLeft: "25%" }}>
            <h1>Helping Material</h1>
          </div>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              "& .MuiTextField-root": { m: 1, width: "50ch" },
              paddingLeft: "50px",
              justifyContent: "center",
              alignItems: "center"
            }}
            noValidate
            autoComplete="off"

          >
            <Stack spacing={2}>
              <FormControl fullWidth>
                <InputLabel>Difficulty</InputLabel>
                <Select
                  value={difficulty}
                  onChange={handleDifficultyChange}
                >
                  <MenuItem value="easy">Easy</MenuItem>
                  <MenuItem value="medium">Medium</MenuItem>
                  <MenuItem value="hard">Hard</MenuItem>
                </Select>
              </FormControl>

              <div className="Tags-HelpingMaterial">
                <TextField
                  required
                  id="HelpingMaterialTags"
                  label="Input Tags for Helping Material"
                  value={CurrentTag}
                  onChange={handleCurrentTagChange}
                  sx={{ width: "100%", mt: 2 }}
                />
                <Button className='HandleTags' onClick={handleHelpingMaterialTags} sx={{
                  backgroundColor: '#1e3c72',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '5px 15px',
                  fontSize: '0.75rem',
                  '&:hover': {
                    backgroundColor: '#0c2461',
                  },
                }}>Add Tag</Button>
                {
                  HelpingMaterialTags.map((tag) => (
                    <Chip key={tag} label={tag} onDelete={() => handleDeleteTag(tag)} />
                  ))
                }

              </div>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#1e3c72',
                  color: 'white',
                  borderRadius: '10px',
                  padding: '10px 30px',
                  fontSize: '1rem',
                  '&:hover': {
                    backgroundColor: '#0c2461',
                  },
                }}
              >
                Upload Helping Material
              </Button>

            </Stack>

          </Box>


        </div>
        <div className="split right" >
          <div className="file-uploader-container">
            <FileUploader files={HelpingMaterialFile} setFiles={setHelpingMaterialFile} remFile={removeFile}></FileUploader>
          </div>

        </div>
      </div>

    </div>

  );
};

export default HelpingMaterial;