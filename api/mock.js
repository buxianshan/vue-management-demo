import Mock from 'mockjs'
import homeApi from './mockServerData/home'

Mock.mock('/home/getData', homeApi.getStatisticalData)
