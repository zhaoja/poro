import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/containers/HelloWorld'
import Home from '@/containers/home'
import Product from '@/containers/product'
import News from '@/containers/news'
import Newsdetails from '@/containers/newsdetails'

import Relation from '@/containers/relation'
import Download from '@/containers/download'
import Translation from '@/containers/translation'
import InsuranceNotice from '@/containers/insuranceNotice'
import InsuranceClause from '@/containers/insuranceClause'
import Layout from '@/containers/layout'

import Tim from '@/components/Timeline'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '*',
			name: '首页',
			component: Home
		},
		{
			path: '/download',
			name: 'APP下载',
			component: Download
		}, 
		
		{
			path: '/layout',
			name: 'layout',
			component: Layout,
			children: [
			{
				path: '/product',
				name: '产品与服务',
				component: Product
			}, 
			{
				path: '/news',
				name: '新闻动态',
				component: News
			}, 
			{
				path: '/newsdetails/:id',
				name: '新闻详情',
				component: Newsdetails
			},
			{
				path: '/relation',
				name: '联系我们',
				component: Relation
			}, 
			{
				path: '/translation',
				name: '中文/English',
				component: Translation
			}, 
			{
				path: '/insuranceNotice',
				name: '投保须知',
				component: InsuranceNotice
			}, 
			{
				path: '/insuranceClause',
				name: '保险条款',
				component: InsuranceClause
			}]
		}
	]
})