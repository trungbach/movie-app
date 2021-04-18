import React, {useState} from 'react';
import { DatePicker, Space, Row, Col } from 'antd';
import MasterLayoutMovie from '../../components/master-layout';
import { api } from '../../services/api'
import ListMovies from '../../components/list-movie';
import { helper } from '../../helper/common';
import PaginationMovie from '../../components/pagination';
import moment from "moment";


const { RangePicker } = DatePicker;
const UpcomingMoviePage = () => {

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [tdate, setToDate] = useState("");
    const [fdate, setFromDate] = useState("");
    const [comingMovies, setComingMovies] = useState({});
    const [totalItem, setTotalItem] = useState(0);
    const dateFormat = "YYYY-MM-DD";

    const getChooseDate = async (t1, t2, p = 1) => {
        setLoading(true);
        setPage(p);
        let fromdate = t2[0];
        let todate = t2[1];
        setFromDate(fromdate);
        setToDate(todate);
        let movies = await api.getDataUpcomingMovies(fromdate, todate, page);
        if(movies.hasOwnProperty('results')) {
            setComingMovies(movies.results);
            setTotalItem(movies.total_results);
            setFromDate(fromdate);
            setToDate(todate);
        }
        setLoading(false);
    }
    return (
        <MasterLayoutMovie>
            <Row>
                <Col span={24}>
                    <Space direction="vertical" size={12}>
                        <RangePicker 
                            onChange={(d1,d2) => getChooseDate(d1,d2)}
                            // defaultValue={[
                            //     moment("2021-01-01", dateFormat),
                            //     moment("2021-04-01", dateFormat)
                            // ]}
                            
                        />
                    </Space>
                </Col>
            </Row>
            {
                !helper.isEmptyObject(comingMovies) &&
                <ListMovies loading={loading} movies={comingMovies} />
            }
            {
                !helper.isEmptyObject(comingMovies) && !loading &&
                <PaginationMovie current={page} total={totalItem} fdate={fdate} tdate={tdate} change={getChooseDate}/>
            }
        </MasterLayoutMovie>
    );
}

export default React.memo(UpcomingMoviePage);