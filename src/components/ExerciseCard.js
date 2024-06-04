import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const ExerciseCard = ({ exercise }) => (
  <Card sx={{ maxWidth: 345, mb: 2 }}>
    <CardMedia
      component="img"
      height="140"
      image={exercise.image}
      alt={exercise.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {exercise.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {exercise.description}
      </Typography>
    </CardContent>
  </Card>
);

export default ExerciseCard;
