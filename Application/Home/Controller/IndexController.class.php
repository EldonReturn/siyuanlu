<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
    	$highlights = '[{img:"resources/home/images/sample_large.jpg"},
			{img:"resources/home/images/sample_large_2.jpg"},
			{img:"resources/home/images/sample_large.jpg"},
			{img:"resources/home/images/sample_large_2.jpg"},
			{img:"resources/home/images/sample_large.jpg"},
			{img:"resources/home/images/sample_large_2.jpg"},
			{img:"resources/home/images/sample_large.jpg"}]';
    	$news = '{hasMore:true, data:[{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"},
			{img:"resources/home/images/sample.jpg", title:"2015 春季时装秀掠影", text:"备受期待的路易威登 2015 春季女士时装秀在位于巴黎的路易威登基金会大楼举办。", date: "10月18日", cat: "时尚"}]}';
    	$this->assign('highlights', $highlights);
    	$this->assign('news', $news);
    	$this->display('Html:shop_home');
    }
}