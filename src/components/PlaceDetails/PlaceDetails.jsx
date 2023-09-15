import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import { Rating } from "@material-ui/lab";

import useStyles from './style'

const PlaceDetails = ({ place }) => {
    const classes = useStyles();
    return (
        <>
            {place.name && <Card elevation={6}>
                <CardMedia
                    style={{ height: 350 }}
                    image={place.photo ? place.photo.images.medium.url : 'https://www.opentable.com/img/restimages/274.jpg'}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6">{place.name}</Typography>
                    <Box style={{ textAlign: "left", display: "flex", justifyContent: "space-between" }}>
                        <Rating value={Number(place.rating)} readOnly />
                        <Typography gutterBottom variant="subtitle1">out of {place.num_reviews} reviews</Typography>
                    </Box>

                    <Box style={{ textAlign: "center", display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="subtitle1">Price</Typography>
                        <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
                    </Box>

                    <Box style={{ textAlign: "left", display: "flex", justifyContent: "space-between" }}>
                        <Typography variant="subtitle1">Rank</Typography>
                        <Typography gutterBottom variant="subtitle2">{place.ranking}</Typography>
                    </Box>

                    <Box style={{ display: "flex", flexWrap: "wrap" }}>
                        {place && place.cuisine && place.cuisine.map((cuis, i) => (
                            <Chip key={i} size="small" label={cuis.name} className={classes.chip}></Chip>
                        ))}
                    </Box>

                    {
                        place && place.address && (
                            <Box style={{ textAlign: "center", display: "flex", justifyContent: "space-between", textAlign: "end" }}>
                                <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                                    <LocationOnIcon />
                                </Typography>
                                <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                                    {place.address}
                                </Typography>

                            </Box>
                        )
                    }

                    {/* {
                        place
                    } */}

                    {
                        place && place.phone && (
                            <Box style={{ textAlign: "center", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
                                    <PhoneIcon />
                                </Typography>
                                <Typography gutterBottom variant="body1" color="textSecondary">
                                    {place.phone}
                                </Typography>

                            </Box>
                        )
                    }

                    <CardActions>
                        <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                            Trip Advisor
                        </Button>
                        <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                            Website
                        </Button>
                    </CardActions>

                </CardContent>
            </Card>}
        </>

    )
}

export default PlaceDetails;