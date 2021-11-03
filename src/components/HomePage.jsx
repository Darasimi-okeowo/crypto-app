import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import {Link} from 'react-router-dom';
import {useGetCryptosQuery} from '../services/cryptoApi'
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';


const HomePage = () => {
    const {data, isFetching} = useGetCryptosQuery(10);

    console.log(data)
    if (isFetching) return <Loader />;
    const globalStat = data?.data?.stats;
    return (
        <>
            <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
            <Row>
                <Col span={12}><Statistic title='Total cryptocurrencies' value={globalStat.total}/></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStat.totalExchanges)}/></Col>
                <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStat.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStat.total24hVolume)}/></Col>
                <Col span={12}><Statistic title='Total Markets' value={millify(globalStat.totalMarkets)}/></Col>
            </Row>
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
            </div>
            <Cryptocurrencies simplified/>
            <div className='home-heading-container'>
                <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to='/news'>Show More</Link></Typography.Title>
            </div>
            <News simplified/>
        </>
    )
}

export default HomePage
