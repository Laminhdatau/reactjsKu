import { useEffect, useState } from "react"
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import Env from "./Env";


const url = Env.url;
const apiKey = Env.apiKey;
const imageUrl = Env.imageUrl;

const options = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  },
};


const Trending = () => {
  const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(url,options)
        .then((res) => res.json())
        .then((json) => {
          setMovies(json.results);
          console.log(json.results);
        })
        .catch((err) => {
          console.error('Error:', err);
        });
    }, []);


  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
        {movies.map((result, index) => {
        
            console.log(result);
            return (
              <Col md={4} className="movieWrapper" id="trending" key={index}>
                <Card className="movieImage">
                  <Image src={`${imageUrl}/${result.poster_path}`} alt="test" className="images" />
                  <div className="bg-dark">
                    <div className="p-2 m-1 text-white">
                      <Card.Title className="text-center">{result.title}</Card.Title>
                      <Card.Text className="text-left">
                        {result.overview}
                      </Card.Text>
                      <Card.Text className="text-left">
                        {result.release_date}
                      </Card.Text>
                    </div>
                  </div>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Trending
