import React, { useState } from 'react';
import { Button, Card, CardMedia, Dialog, DialogContent, DialogTitle, DialogActions, DialogContentText, Typography, IconButton, Tooltip } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import { uni_font_color, uni_font_color_sub_1, uni_font_family } from './constants';

export function FileJson(target, type, name, description, location, timeTag) {
	this.target = target;
	this.type = type;
	this.name = name;
	this.description = description;
	this.location = location;
	this.timeTag = timeTag;
};

const Presenter = ({ files, buttonName }) => {
	const [open, setOpen] = useState(false);
	const [currentFileIndex, setCurrentFileIndex] = useState(0);

	const openModal = (index) => {
		setCurrentFileIndex(index);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const showNextFile = () => {
		const nextIndex = (currentFileIndex + 1) % files.length;
		setCurrentFileIndex(nextIndex);
	};

	const showPreviousFile = () => {
		const previousIndex =
			(currentFileIndex - 1 + files.length) % files.length;
		setCurrentFileIndex(previousIndex);
	};

	return (
		<div>
			<Button variant="outlined" color="primary" onClick={() => openModal(0)}
				sx={{
					marginY:2,
					fontFamily: uni_font_family,
					color: uni_font_color_sub_1,
					borderColor: uni_font_color_sub_1,
					'&:hover': {
						color: uni_font_color,
						borderColor: uni_font_color,
					}
				}}>
				{buttonName}
			</Button>
			<Dialog fullWidth open={open} onClose={handleClose} sx={{ margin: "0 auto" }}>
				<DialogTitle color={uni_font_color} fontFamily={uni_font_family}>{files[currentFileIndex].name}</DialogTitle>
				<DialogContent>
					<Card>
						{files[currentFileIndex].type === 'img' && <CardMedia component="img" image={files[currentFileIndex].target} />}
						{files[currentFileIndex].type === 'pdf' && <CardMedia component="iframe" src={files[currentFileIndex].target} height={500} />}
					</Card>
					<DialogContentText sx={{ marginTop: 2 }}>
						<Typography variant="body2" color={uni_font_color_sub_1} fontFamily={uni_font_family}>Built by / Source: {files[currentFileIndex].location}</Typography>
						<Typography paragraph variant="body2" color={uni_font_color} fontFamily={uni_font_family}>{"> " + files[currentFileIndex].description}</Typography>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Typography fontSize={12} color={uni_font_color_sub_1} fontFamily={uni_font_family}>Last Modified: {files[currentFileIndex].timeTag}</Typography>
					<Tooltip
						componentsProps={{
							tooltip: {
								sx: {
									color: uni_font_color,
									backgroundColor: "black",
									fontFamily: uni_font_family
								}
							}
						}} title="Previous" arrow>
						<IconButton onClick={showPreviousFile} color="primary">
							<ArrowLeftIcon sx={{ margin: "0 auto", color: uni_font_color }} />
						</IconButton>
					</Tooltip>
					<Tooltip
						componentsProps={{
							tooltip: {
								sx: {
									color: uni_font_color,
									backgroundColor: "black",
									fontFamily: uni_font_family
								}
							}
						}} title="Next" arrow>
						<IconButton onClick={showNextFile} color="primary">
							<ArrowRightIcon sx={{ margin: "0 auto", color: uni_font_color }} />
						</IconButton>
					</Tooltip>
					<Tooltip
						componentsProps={{
							tooltip: {
								sx: {
									color: uni_font_color,
									backgroundColor: "black",
									fontFamily: uni_font_family
								}
							}
						}} title="Close" arrow>
						<IconButton onClick={handleClose} color="primary">
							<CloseIcon sx={{ margin: "0 auto", color: uni_font_color }} />
						</IconButton>
					</Tooltip>
				</DialogActions>
			</Dialog>
		</div>
	);
}

export default Presenter;
