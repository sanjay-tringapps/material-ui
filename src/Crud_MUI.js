import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
//import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

function Crud_MUI() {
	const [counter, setCounter] = React.useState(1);

	const [name, setName] = React.useState("");
	const [type, setType] = React.useState("");
	const [details, setDetails] = React.useState("");

	const [card, setCard] = React.useState([]);
	const [status, setStatus] = React.useState("add");
	const [id, setId] = React.useState("");

	const handleChange = (event) => {

		setType(event.target.value);
	};


	const createCard = () => {
		if (status == "add") {
			let newCard = {
				id: counter,
				name, type, details
			}
			setCounter(counter + 1);
			setCard([...card, newCard]);
		}
		else {
			let editedCardUpdate = card.filter(item => item.id != id)
			let editedCard = { id, name, type, details }
			setCard([...editedCardUpdate, editedCard]);
		}
		setName("");
		setType("");
		setDetails("");
		setStatus("edit");

	}
	const deleteCard = (id) => {
		let removeCard = card.filter(item => item.id != id);
		setCard(removeCard);
	}
	const editCard = (id) => {
		let editCard = card.filter(item => item.id == id)
		setName(editCard[0].name);
		setType(editCard[0].type);
		setDetails(editCard[0].details);
		setId(editCard[0].id);
	}
	return (
		<div className="Layout">
			<Grid container Spacing={3} >

				<Grid item xs={12}>

					<FormControl sx={{ width: "100%", height: "100%", }}>
						<Item>
							<div>
								<TextField sx={{ ml: 1, mt: 2, width: "70%", }}
									required
									value={name}
									label="Name" variant="filled" onChange={(e) => setName(e.target.value)} />
							</div>

							<div>
								<FormControl variant="filled" sx={{ ml: 1, mt: 2, width: "70%", height: "10%", }}>
									<InputLabel
										required id="VType">Designation</InputLabel>
									<Select

										id="Type"
										labelId="VType"
										label="VehicleType"
										value={type}
										onChange={handleChange}
									>
										<MenuItem value="Hr">Hr</MenuItem>
										<MenuItem value="Manager">Manager</MenuItem>
									</Select>
								</FormControl>
							</div>


							<div>
								<TextField sx={{ ml: 1, mt: 2, width: "70%", }}
									required
									value={details}
									label="Description"
									multiline
									rows={4}
									defaultValue="Write About Product..."
									variant="filled"
									onChange={(e) => setDetails(e.target.value)}
								/>
							</div>
							<div>
								<Button sx={{ p: 2, mt: 2, ml: 1, width: "70%", }}
									variant="contained"
									onClick={() => createCard()}>
									SAVE
								</Button>
							</div>
						</Item>
					</FormControl>

				</Grid>


				{
					card && card.map(eachDetails => {
						return (
							<div>
                                <br></br>
								<Card sx={{ maxWidth: 345 }}>
									<CardHeader 
									action={
										<CardActions>
									  <Button size="small" onClick={()=>editCard(eachDetails.id)}>Edit</Button>
									  <Button size="small" onClick={()=>deleteCard(eachDetails.id)} >Delete</Button>
										</CardActions>
									  }

									/>
									<CardMedia
										component="img"
										height="194"
										image="https://www.apple.com/v/mac-mini/o/images/overview/hero__x8ruukomx2au_large_2x.jpg"
										alt="Paella dish"
									/>
									<CardContent>
										<Typography sx={{ color: "#8608fc", }}
											variant="button" display="block" gutterBottom>
										    Name : {eachDetails.name} </Typography>

										<Typography sx={{ color: "#08fc2c", }}
											variant="button" display="block" gutterBottom>
											Designation : {eachDetails.type}  </Typography>

										<Typography sx={{ color: "#f27d07", }}
											variant="button" display="block" gutterBottom>
											Description : {eachDetails.details}
										</Typography>
									</CardContent>

								</Card>
								
							</div>
						)
					})
				}


			</Grid>
		</div>
	);
}

export default Crud_MUI;
