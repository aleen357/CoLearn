//from backend we need to get number of weeks, week Info
import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloDetails from './CLODetails';
import TopicsBoard from '../Topics/TopicsMainPage/TopicsBoard'
import ViewTopic from '../Topics/TopicsView/ViewTopic';

class Clo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userId: props.userId,
      classId: props.classId,
      weekNumber: 1,//this is for dummy change it to 0 after backend is implemented
      //week info is a week array 
      //if implementing backend we can get the week id that already exist and if we click the week then on topic board we can get all
      //data related to that week
      //for now weekinfo has almost all the data for ease to show how data is being processes
      weekInfo: [{id:1, topics:[{id:1, title: "datatypes", description: "something", materials:[{
        id: 1,
        title: "Material 1",
        description: "This is the description of Material 1.",
        files: ["file1.pdf", "file2.docx"],
        creationDate: "2022-03-01",
      },
      {
        id: 2,
        title: "Material 2",
        description: "This is the description of Material 2.",
        files: ["file1.pdf"],
        creationDate: "2022-03-02",
      },], assignments:[{
        id: 1,
        title: "Assignment 1",
        description: "This is the description of Assignment 1.",
        files: ["file1.pdf", "file2.docx"],
        deadline: "2022-03-15",
        tags: ["tag1", "tag2"],
      },
      {
        id: 2,
        title: "Assignment 2",
        description: "This is the description of Assignment 2.",
        files: ["file1.pdf"],
        deadline: "2022-03-20",
        tags: ["tag1"],
      }]}, 
      {id:2, title: "arrays", description: "something", 
      materials:[{
        id: 1,
        title: "Material 1",
        description: "This is the description of Material 1.",
        files: ["file1.pdf", "file2.docx"],
        creationDate: "2022-03-01",
      },
      {
        id: 2,
        title: "Material 2",
        description: "This is the description of Material 2.",
        files: ["file1.pdf"],
        creationDate: "2022-03-02",
      }], 
      assignments:[{
        id: 1,
        title: "Assignment 1",
        description: "This is the description of Assignment 1.",
        files: ["file1.pdf", "file2.docx"],
        deadline: "2022-03-15",
        tags: ["tag1", "tag2"],
      },
      {
        id: 2,
        title: "Assignment 2",
        description: "This is the description of Assignment 2.",
        files: ["file1.pdf"],
        deadline: "2022-03-20",
        tags: ["tag1"],
      }, {
        id: 3,
        title: "Assignment 3",
        description: "This is the description of Assignment 3.",
        files: ["file1.pdf", "file2.docx"],
        deadline: "2022-03-15",
        tags: ["tag1", "tag2"],
      },
      {
        id: 4,
        title: "Assignment 4",
        description: "This is the description of Assignment 4.",
        files: ["file1.pdf"],
        deadline: "2022-03-20",
        tags: ["tag1"],
      }]}]
    }],
      isWeekSelected: false,
      selectedWeek: null,
      selectedTopic:null,//after opening a week and selecting a topic
      showViewTopic:false
    };
  }

  componentDidMount() {
    fetch('https://example.com/api/data')
      .then(response => response.json())
      .then(data => {
        // Update state with API data
        this.setState({ apiData: data });
      })
      .catch(error => console.error(error));
  }
  onWeekSelect = (weekIndex) => {
    console.log("weekIndex is:")
    console.log(weekIndex);
    console.log("selected");
    
    this.setState({ selectedWeek: weekIndex, isWeekSelected: true }, () => {
      console.log("selected week number is: ", this.state.selectedWeek);
    });
  };

  handleWeekNumberInput = (event) => {
    this.setState({ weekNumber: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const weekNumber = parseInt(formData.get('weekNumber'));
    this.setState({ weekNumber });
    const { onNumberOfWeeksChange } = this.props;

    // Call the callback function with the selected number of weeks
    onNumberOfWeeksChange(weekNumber);
  };

  onAddWeekClick = () => {
    if (this.state.weekNumber < 16) {
      this.setState((prevState) => {
        const newWeekInfo = [...prevState.weekInfo, { topics: [] }];
        return {
          weekNumber: prevState.weekNumber + 1,
          weekInfo: newWeekInfo,
        };
      });
    }
  };

  handleTopicSelect=(topic)=>{
    
    console.log("topic selected");
    this.setState({selectedTopic:topic})
    this.setState({showViewTopic:true})
    
  }

  render() {
    const { classId, weekNumber } = this.state;
    console.log("in clo starter");
   

    return (
      <div>
        <div style={{ gap: '16px', justifyContent: 'center', alignItems: 'center', paddingLeft: "20%" }}>
          {!this.state.isWeekSelected && (
            <div>
              <Button onClick={this.onAddWeekClick} variant="outlined" startIcon={<AddCircleIcon />}>
                Add Week
              </Button>
              <CloDetails userId={this.state.userId} classId={this.state.classId} numberWeeks={this.state.weekNumber} weeksInfo={this.state.weekInfo} onWeekSelect={this.onWeekSelect}></CloDetails>
            </div>
          )
          }
          {this.state.isWeekSelected && !this.state.showViewTopic && (
            <div>
            console.log("in this piece")
            <div>
              <TopicsBoard userID={this.state.userId} classID={this.state.classId} weekID={this.state.weekInfo[this.state.selectedWeek].id} weekNumber={this.state.weekInfo[this.state.selectedWeek].number} topics={this.state.weekInfo[this.state.selectedWeek].topics} onTopicSelect={this.handleTopicSelect}/>
              </div>
              </div>
          )
          }
          {
            this.state.isWeekSelected  && this.state.showViewTopic &&(
              <ViewTopic 
              title={this.state.selectedTopic.title}
              description={this.state.selectedTopic.description}
              materials={this.state.selectedTopic.materials}
              assignments={this.state.selectedTopic.assignments}
              ></ViewTopic>

            )
          }
        </div>
      </div>
    );
        }
      }
export default Clo;
// {/*   
//           <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//       }}
//     >
//       <Box
//           component="form"
//           action="#"
//           onSubmit={this.handleSubmit}
//           sx={{
//             backgroundImage: `linear-gradient(to right, #1e3c72, #2a5298)`,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             backgroundColor: 'white',
//             padding: '20px',
//             borderRadius: '10px',
//             width: '80%',
//             maxWidth: '400px',
//           }}
//         >
//           <Typography variant="h6" component="h4" mb={3}>
//             Enter Number of Weeks:
//           </Typography>
//           <TextField
//             id="weekNumber"
//             name="weekNumber"
//             select
//             value={weekNumber || ''}
//             onChange={this.handleWeekNumberInput}
//             required={weekNumber === null}
//             fullWidth
//             sx={{ backgroundColor: 'white', fontSize: '0.8rem' }}
//           >
//             {Array.from(Array(16).keys()).map((num) => (
//               <MenuItem key={num + 1} value={num + 1}>
//                 {num + 1}
//               </MenuItem>
//             ))}
//           </TextField>
//           <br />
//           <br />
//           <Button
//             type="submit"
//             variant="contained"
//             sx={{
//               backgroundColor: '#1e3c72',
//               color: 'white',
//               borderRadius: '20px',
//               padding: '10px 30px',
//               fontSize: '1.2rem',
//               '&:hover': {
//                 backgroundColor: '#0c2461',
//               },
//             }}
//           >
//             Submit
//           </Button>
//         </Box>
//     </Box> */}
   

//     );
//   }
// }

// export default Clo;
