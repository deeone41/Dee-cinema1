import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MovieCard from './MovieCard';

const NowShowing = () => {


        const movies = [ 
            {
             id: 1, 
             title: "Avenger",
             rating: "16+",
             duration: '3h 00min',
             poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaT6IHyHfx89hyFLymUyZRrgbvUOur2LlhsPLN7IxjA&s=10'
            },
            {
             id: 2, 
             title: "Ballerina",
             rating: "16+",
             duration: '3h 00min',
             poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyO1ybakTXQTvWjpzQ_wQ4FaSqYFFNggqBMwBB672VEQ&s=10'
            },
            {
             id: 3, 
             title: "Amateur",
             rating: "16+",
             duration: '3h 00min',
             poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOyrc3KA_8UajTQ9aAMPf83GMd0lTz-iEh-I9I5aXYg&s=10'
            },
            {
             id: 4, 
             title: "Dune",
             rating: "16+",
             duration: '3h 00min',
             poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyI0ZTbtb8S_oOtZ1L8UXEKuPGTZNgkiZdRu6Mc9d0bA&s'
            },
            {
             id: 5, 
             title: "Spider-man: Brand new day",
             rating: "16+",
             duration: '3h 00min',
             poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuZbTn7XHKLAMAX7iasqtWQkPq1ccPZw9IO5XJx0nCYA&s'
            },
            {
             id: 6, 
             title: "Avenger",
             rating: "16+",
             duration: '3h 00min',
             poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaT6IHyHfx89hyFLymUyZRrgbvUOur2LlhsPLN7IxjA&s=10'
            },
            {
             id: 7, 
             title: "Avenger",
             rating: "16+",
             duration: '3h 00min',
             poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaT6IHyHfx89hyFLymUyZRrgbvUOur2LlhsPLN7IxjA&s=10'
            },
            {
             id: 8, 
             title: "Avenger",
             rating: "16+",
             duration: '3h 00min',
             poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaT6IHyHfx89hyFLymUyZRrgbvUOur2LlhsPLN7IxjA&s=10'
            },
        
            
            
            ]




  return (
    <section className='now-showing bg-black text-white p-5 py-5 px-0'>
        <Container>
            <div>
                <p>Experience the Magic</p>
                <h2>Now Showing</h2>
            </div>



            <Row className='g-4'>
                {movies.map((movie) => (
                    <Col key={movie.id} xs={12} sm={6} md={4} lg={3}>
                        <MovieCard movie={movie}/>
                    
                    </Col>
                ))}
                {/* {movies.map((movie) => (
                    <Col lg={3} key={movie.id}>

                        <MovieCard movie={movie}/>
                    </Col>
                ))} */}

            </Row>
        </Container>



    </section>
  )
}

export default NowShowing