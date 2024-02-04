import React from 'react';
import { Card, CardContent, CardActions, Divider, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import cars from '../cars.json';

const Home = () => {
    return (
        <div className="card-container">
            {cars.map((car) => (
                <Card key={car.id} className="card">
                    <CardContent className="text-gray">
                    <img src={car.ImageUrl} alt={car.Name} style={{ width: '200px', height: '150px', objectFit: 'cover' }} />

                        <h2>{car.Name.toUpperCase()}</h2>
                        <ul>
                            <li>Miles_per_Gallon: {car.Miles_per_Gallon}</li>
                            <li>Cylinders: {car.Cylinders}</li>
                            <li>Displacement: {car.Displacement}</li>
                            <li>Horsepower: {car.Horsepower}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    <CardActions style={{ color: 'mediumblue' }}>
                        <Link component={RouterLink} to={`/car/${car.id}`}>See More Details</Link>
                    </CardActions>
                </Card>
            ))}
        </div>
    );
};

export default Home;
