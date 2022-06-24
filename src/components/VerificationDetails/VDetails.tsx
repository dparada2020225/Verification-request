import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Grid from '@mui/material/Grid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardMedia } from '@mui/material';
import Cart from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { UserProps } from '../Interfaces/UserProps';




const VDetalles = ({userData}:UserProps) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        let comentarioOp = {
            coment: data.get('coment'),
        }
        console.log(comentarioOp);



    };

    const verificationData = async () => {
        const res: any = await fetch('https://jsonplaceholder.typicode.com/users?username=' + userData.userName, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const resUser: any = await res.json();
        console.log(resUser);
    }
    useEffect(() => {
        verificationData();
    }, []);



    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <React.StrictMode>
            <Container component="main">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: '10vh',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ width: 56, height: 56 }} />
                    <br />
                    <Typography component="h1" variant="h5" sx={{ color: '#464E47' }}>
                    {userData.userName}
                    </Typography>
                    <Typography component="h1" variant="h6" sx={{ color: '#879488' }}>
                        Documento de identificación
                    </Typography>

                    <Box sx={{
                        width: '63%',
                        margin: 2
                    }}>
                        <Grid container columnSpacing={{ xs: 1, sm:0, md:0 }} justifyContent="center">
                            <Grid item xs={8} md={8} sx={{paddingRight: "8px"}}>
                                <Slider {...settings}>
                                    {itemData.map((item) => (
                                        <Cart sx={{
                                            maxWidth: 153,
                                            marginBottom: '1rem'
                                        }}>
                                            <CardMedia
                                                component="img"
                                                image={item.img}
                                            >
                                            </CardMedia>
                                            <CardContent>
                                                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                                    {item.title}
                                                </Typography>
                                            </CardContent>
                                        </Cart>
                                    ))}
                                </Slider>
                            </Grid>
                        </Grid>
                    </Box>
                    <hr />


                    <Box component="form" sx={{ width: '100%' }} onSubmit={handleSubmit}>

                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12} md={8}>

                                <TextField id="outlined-basic" label="Deja un mensaje al conductor (Opcional)" variant="outlined" fullWidth margin="normal" name="coment" />
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <ButtonGroup size="large" variant="outlined" aria-label="large button group" fullWidth >
                                    <Button endIcon={<HighlightOffIcon />} >Denegar</Button>
                                    <Button endIcon={<CheckCircleOutlineIcon />} variant="contained" type='submit'>Aprobar</Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>

                    </Box>
                </Box>
            </Container>
        </React.StrictMode>
    );


}




const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },

];




export default VDetalles;