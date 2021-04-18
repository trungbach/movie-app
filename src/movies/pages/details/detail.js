import React,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Skeleton, Image, Button } from 'antd';
import MasterLayoutMovie from '../../components/master-layout';
import { api } from '../../services/api';
import ModalVideo from 'react-modal-video'
import {helper} from '../../helper/common';
const DetailMovie = () => {
    
    const [loading, setLoading] = useState(false);
    const [detailMovie, setDetailMovie] = useState({});
    const [isOpen, setOpen] = useState(false)
    const { id } = useParams();

    useEffect(() =>  {
        const getData = async () => {
            setLoading(true);
            const data  = await api.getDetailMovieById(id);
            console.log(data);
            if(!helper.isEmptyObject(data))
                setDetailMovie(data);
            setLoading(false);
        };

        getData();
    }, [id]);
    
    if(loading || helper.isEmptyObject(detailMovie)) {
        return (
            <MasterLayoutMovie>
                <Skeleton active />
            </MasterLayoutMovie>
        )
    }

    return (
        <MasterLayoutMovie>
            <Row style={{margin: '30px 0'}}>
                <Col span={8}>
                    <Image
                        src={`https://image.tmdb.org/t/p/w300${detailMovie.poster_path}`}
                    />
                    <h1>{detailMovie.original_title}</h1>
                    <p>Release date: {detailMovie.release_date}</p>
                </Col>
                <Col span={8}>
                    <p>{detailMovie.overview}</p>
                    <p>Vote average: {detailMovie.vote_average}</p>
                    <p>Vote count: {detailMovie.vote_count}</p>
                    <Button type="button" onClick={()=> setOpen(true)} >View Trailer</Button>
                    {detailMovie.videos.hasOwnProperty('results') && 
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={detailMovie.videos.results[0].key} onClose={() => setOpen(false)} />
                    }
                </Col>
                <Col span={8}>
                    {detailMovie.images.backdrops.map((item, index) => (
                        <Image key={index} src={`https://image.tmdb.org/t/p/w300${item.file_path}`}/>
                    ))}
                </Col>
            </Row>
        </MasterLayoutMovie>
    );
}

export default React.memo(DetailMovie);
