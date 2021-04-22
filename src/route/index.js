import React, {Suspense} from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";    
import {Skeleton} from "antd";
import {helper} from '../helper/common';
const SearchMoviePage = React.lazy(() => import('../pages/search/index'));
const PopularMoviePage = React.lazy(() => import('../pages/popular/index'));
const LoginPage = React.lazy(() => import('../pages/login/index'));
const UpcomingMoviePage = React.lazy(() => import('../pages/upcoming/index'));
const DetailMovie = React.lazy(() => import('../pages/details/detail'));

const PrivateRouter = ({children, ...rest}) => {
    const auth = helper.isAuthenticated();
    return (
        <Route  
            {...rest}
            render={ ({ location}) => auth ? ( children ) 
                : (<Redirect to={{ pathname: '/login',  state: { from: location } }}/>)
            }
        />
    )
}

const LoginedRouter = ({children, ...rest}) => {
    const auth = helper.isAuthenticated();
    return (
        <Route  
            {...rest}
            render={ ({ location}) => auth ?  (<Redirect to={{ pathname: '/',  state: { from: location } }}/>)
                : ( children ) 
            }
        />
    )
}

const RouteMovie = () => {
    return (
        <Router>
            <Suspense fallback={<Skeleton active />}>
                <Switch>
                    <PrivateRouter path="/" exact>
                        <SearchMoviePage />
                    </PrivateRouter>
                    <PrivateRouter path="/search">
                        <SearchMoviePage />
                    </PrivateRouter>
                    <PrivateRouter path="/popular-movie">
                        <PopularMoviePage />
                    </PrivateRouter>
                    <PrivateRouter path="/up-coming">
                        <UpcomingMoviePage />
                    </PrivateRouter>
                    <PrivateRouter path="/movie-detail/:slug~:id">
                        <DetailMovie />
                    </PrivateRouter>
                    <LoginedRouter path="/login">
                        <LoginPage />
                    </LoginedRouter>
                </Switch>
            </Suspense>
        </Router>

    )
}

export default React.memo(RouteMovie);