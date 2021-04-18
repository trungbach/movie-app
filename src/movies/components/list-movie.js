import React from 'react';
import { Row, Col, Card, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import { helper } from '../helper/common';
import PropTypes from 'prop-types';
import slugify from 'react-slugify';

const { Meta } = Card;

const ListMovies = ({ loading, movies }) => {

    if(loading || helper.isEmptyObject(movies)) {
        return (<Skeleton active />)
    }

    return (
        <Row style={{ margin: '30px 0px'}}>
            {movies.map((movie, index) => (
                 <Col span={6} key={index}>
                     <Link to={`/movie-detail/${slugify(movie.title)}~${movie.id}`}>
                        <Card
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={movie.title} src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />}
                        >
                            <Meta title={movie.title} />
                        </Card>
                    </Link>
                </Col>
            ))}
        </Row>
    );
}

ListMovies.propTypes = {
    loading: PropTypes.bool.isRequired,
    movies: PropTypes.array.isRequired
}

export default React.memo(ListMovies);
