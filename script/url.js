/**----------------------- 域名 ------------------------ */
//var URL = 'http://www.syfuyebang.com/';
var URL = 'http://reward.foxonline.net/';

// var token = '956281d2f7d3c838d65a52b33c828146';


/**----------------------- 功能接口 ------------------------ */



//登录
var login = URL + 'App/Login/login';

//注册
var register = URL + 'App/Login/register';

// 发送短信
var sendCode = URL + 'App/Login/sendCode';

// 个人信息
var personalInfo = URL + 'App/User/personalInfo';

var get_pic_1 = URL + 'App/Upload/upimg';

// 上传图片
var get_pic = URL + 'App/Advertising/get_pic';

// 分销中心 我的团队
 var my_team = URL + 'App/User/my_team';

//轮播图
var get_banner_url = URL + 'App/Index/get_banner';
//裂变列表
var popu_lists = URL + 'App/popularize/popularize_lists';
//裂变领取
var popu_receive_reward = URL + 'App/popularize/receive_reward';
// 任务大厅
var task_list = URL + '/App/Renwunotoken/task_lists'; // 新修改


// 联系客服
var get_contact_customer = URL + 'App/About/get_contact_customer';

// 意见反馈
var feedback = URL + 'App/User/feedback';

//我的团队
var my_team = URL + 'App/User/my_team';

//我的团队(展示一级二级)
var my_team_1 = URL + 'App/User/my_team_1';
// 新加
var my_team_1s = URL + 'App/User/my_team_1s';
var myteams = URL + 'App/User/myteams'; // 我的团队

//发布任务
var add_task = URL + '/App/Renwu/add_task';

var add_tasks = URL + '/App/Renwu/add_tasks'; // 新改
var gestast = URL + '/App/Renwu/gestast'; // 获取单个数据
var user_data = URL + '/App/Renwu/user_data'; // 会员等级数据

//邀请好友
var inviteFriends = URL + 'App/User/inviteFriends';

//修改密码
var changePwd = URL + 'App/User/changePwd';

//手机绑定
var phoneBinding = URL + '/App/User/phoneBinding';

//充值
var pay_cz = URL + 'App/Txian/pay_cz';


//任务大厅接口
// var task_list_url=URL+'App/Renwunotoken/task_list';
var task_list_url = URL + 'App/Renwunotoken/task_lists';
var task_lists_new = URL + 'App/Renwunotoken/task_lists_new';
//随机获取任务
var task_order_id = URL + 'App/Renwunotoken/task_order_id';

//首页分类接口
var product_type_list = URL + 'App/Product/product_type_list';
var product_type_listss = URL + 'App/Product/product_type_lists';
//我的资产
var my_zican = URL + 'App/User/my_zican';

//关于我们
var About = URL + 'App/About/About';

//使用教程
var xy_syjc = URL + 'App/User/xy_syjc';

//每日任务接口(列表)
var get_today_task_url = URL + 'App/Renwunotoken/get_today_task';

// 做每日任务的接口
var today_tasks_do_url = URL + 'App/Renwu/today_tasks_do';

//充值
var Txian = URL + 'App/Txian/index';

//根据type 返回 是每日推荐 热门 高价格数据
// var status_by_task_url = URL+'App/Renwunotoken/status_by_task';
var status_by_task_url = URL + 'App/Renwunotoken/status_by_tasks';

//修改个人信息(只允许 头像,性别,生日,昵称)
var save_info = URL + 'App/User/save_info';

//发布页面信息
var my_task_renwu_url = URL + 'App/Renwu/my_task';
var my_task_renwu_url_del = URL + 'App/Renwu/my_task_del'; // 删除任务

//会员信息(办理Vip的信息)
var vip_select = URL + 'App/Vip/vip_select';
//商户会员
var vip_shangjia = URL + 'App/Notoken/vip_shangjia';

//办理会员
var add_user_vip = URL + 'App/Vip/add_user_vip';

//忘记密码
var forgetPwd = URL + 'App/Login/forgetPwd';

//任务详情页面数据接口
var task_detail_url = URL + 'App/Renwunotoken/task_by_id';


//任务详情接单以及提交订单方法
var receive_tasks_url = URL + 'App/Renwu/receive_tasks';
// var vip_shangjia=URL+'app/Notoken/vip_shangjia';

//店铺数据
var shop_username_url = URL + '/App/Renwunotoken/shop_username';

//举报方法
var complaints_report_url = URL + 'App/User/complaints_report';

//我举报的
var my_ts_url = URL + 'App/User/my_ts';

//举报我的
var ts_my_url = URL + 'App/User/ts_my';

//我的任务列表
var my_task_orders = URL + 'App/Renwu/my_task_orders';

//头条数据
var toutiao_url = URL + 'App/Renwunotoken/toutiao';
// 通知
var notices = URL + 'App/Renwunotoken/notice';

//刷新列表数据
var shuaxin_list_url = URL + '/App/Vip/shuaxin_list';

//购买刷新
var buy_shuaxin_url = URL + 'App/Vip/buy_shuaxin';

//取消任务
var quxiao_task_url = URL + 'App/Renwu/quxiao_task';

//问题中心 分类
var archive_type_list_url = URL + '/App/About/archive_type_list';

//文章数据
var get_type_by_archive_url = URL + 'App/About/get_type_by_archive';

//余额转换
var trans_formation_url = URL + 'App/Renwu/trans_formation';

//搜索模块
var search_history_url = URL + 'App/Renwunotoken/search_history';

//添加历史搜索记录
var get_sousuo_url = URL + 'App/Renwunotoken/get_sousuo';

//删除历史记录
var get_sousuo_del_url = URL + '/App/Renwunotoken/get_sousuo_del';

//系统消息跟订单消息
var notice_list_url = URL + 'App/User/notice_list';

//官方消息
var guanfang_list_url = URL + 'App/User/guanfang_list';

//提现列表
var tixian_url = URL + 'App/Txian/tixian';

//财务日志
var finance_list_url = URL + 'App/User/finance_list';

//商家中心 数据
var get_shanghuaguanlizhongxin_url = URL + 'App/Business/get_shanghuaguanlizhongxin';
//申请头条纪录
var shenq_toutiao_list_url = URL + 'App/Business/shenq_toutiao_list';

//商户中心 我的订单列表
var my_task_orders_url = URL + 'App/Business/my_task_orders';
//商户审核方法
var check_task_url = URL + 'App/Business/check_task';
//使用刷新
var use_shuaxin_url = URL + '/App/Renwu/use_shuaxin';
//上头条功能
var shenqing_toutiao_url = URL + 'App/Renwu/shenqing_toutiao';
//删除任务
var task_del_url = URL + 'App/Renwu/task_del';
//评价接口
var addAComment_url = URL + 'App/Order/addAComment';
//任务评价接口 根据任务获取评价列表
var Commentlist_url = URL + 'App/Renwunotoken/Commentlist';
//我的评价列表
var my_Commentlist_url = URL + 'App/Order/my_Commentlist';

//首页推荐任务
var index_task_list_url = URL + 'App/Renwunotoken/index_task_list';
var index_task_list_urls = URL + 'App/Renwunotoken/index_task_lists';
var shouyejiek = URL + 'App/Renwunotoken/shouyejiek'; //首页置顶任务
var task_html = URL + 'App/Renwunotoken/task_html'; //悬赏大厅任务
var notices_show = URL + 'App/Renwunotoken/notices_show'; // 通知详情

//发布页面头条信息跟推荐信息
var fabu_canshu_url = URL + 'App/Renwunotoken/fabu_canshu';
//申请首页推荐
var set_task_indextuijian_url = URL + 'App/Renwu/set_task_indextuijian';
//申请首页置顶
var set_task_indexzhiding_url = URL + 'App/Renwu/set_task_indexzhiding';
//任务的暂停与开启
var task_c_statusbyid_url = URL + 'App/Renwu/task_c_statusbyid';
//上下架极速审核
var task_quickaudit_url = URL + 'App/Renwu/modify_quick_audit';
//追加价格
var task_append_money_url = URL + 'App/Renwu/task_append_money';
//追加数量
var task_append_num_url = URL + 'App/Renwu/task_append_num';
//任务下架
var task_lower_shelf_url = URL + 'App/Renwu/task_lower_shelf';
//查看审核
var get_task_by_order_url = URL + 'App/Business/get_task_by_order';
//订单审核 驳回
var check_reject_url = URL + 'App/Business/check_reject';

//订单被驳回->操作冲重新申请
var bohui_cxtmd_reaccept_url = URL + 'App/Renwu/bohui_cxtmd_reaccept';

//排行榜
var get_rankinglist_url = URL + 'App/Index/get_rankinglist';
//新单榜
var get_newrankinglist_url = URL + 'App/Renwunotoken/new_renwu_list';
//极速审核榜榜
var get_jisurankinglist_url = URL + 'App/Renwunotoken/quick_audit_list';
//黑名单
var black_list_url = URL + 'App/Index/black_list';
//微信支付 type 1 充值 2购买刷新 3购买会员
var wx_pay = URL + 'App/Wxapp/wx_pay';
//支付宝支付
var bangding_zfb = URL + '/App/User/bangding_zfb';
//个人中心-绑定微信
var bangding_weixin_url = URL + 'App/User/bangding_weixin';

//登录页面 授权登录
var app_login_url = URL + 'App/Login/app_login';
//支付宝支付
var pay_order = URL + 'App/Aliapp/pay_order';
//重新领取任务-10状态的
var cx_lingqu_url = URL + 'App/Renwu/cx_lingqu';
//删除已经取消的任务
var del_my_order_task_url = URL + 'App/Renwu/del_my_order_task';

var get_notice_url = URL + 'App/Login/get_notice';

//浮动窗口数量
var get_task_url = URL + 'App/Index/get_task';

//商户举报
var shop_complaints_report_url = URL + 'App/User/shop_complaints_report';

//分销规则
var get_fxgz_url = URL + '/App/Index/get_fxgz';
//分销规则
var wancheng_task_url = URL + '/App/Business/historical_audit';
//game
var game_url = URL + '/App/Game/get_game_list';
// 服务
var privacy_services = URL + '/App/Notoken/privacy_service';

// 排行榜
var ranking = URL + '/App/Follow/ranking';
//周排行榜规则
var guizhe = URL + '/App/Follow/guizhe';
// 关注
var add_follow = URL + '/App/Follow/add_follow';
var follow_dt = URL + '/App/Follow/follow_dt'; //获取关注列表

// 保证金显示页面
var bond_show = URL + '/App/Follow/bond_show';
var add_bond_money = URL + '/App/Follow/add_bond_money'; //添加保证金
var bond_money_del = URL + '/App/Follow/bond_money_del'; //取消保证金

// 清除微信号
var clearwxs = URL + 'App/User/clearwx';
var bind_phones = URL + '/App/Follow/bind_phone'; //绑定手机号
var jubao_list = URL + '/App/Follow/jubao_list'; //举报列表
var add_toushu = URL + '/App/Follow/add_toushu'; //添加证据
var gettoushu = URL + '/App/Follow/gettoushu'; //举报进行中数量
var ts_lists = URL + '/App/user/ts_lists'; //维权列表
var chat_list = URL + '/App/Chat/chat_list'; //聊天列表
var chat_show = URL + '/App/Chat/chat_show'; //聊天显示详情
var add_chat = URL + '/App/Chat/add_chat'; //发送聊天
var chat_open = URL + '/App/Chat/chat_open'; //打开聊天
var shi_chat = URL + '/App/Chat/shi_chat'; // 实时获取聊天-- 详情页
var chat_num = URL + '/App/Chat/chat_num'; // 未读数量
var week_show = URL + '/App/Jackpot/week_show'; // 奖池页面显示
var week_guizhe = URL + '/App/Jackpot/week_guizhe'; // 奖池规则
var week_ling = URL + '/App/Jackpot/week_ling'; // 奖池领取奖励
var get_user_data = URL + '/App/follow/get_user_data'; // 获取个人信息

var show_top = URL + '/App/follow/show_top'; // 显示任务页面
var top_show_task = URL + '/App/follow/top_show_task'; // 显示购买页数据
var add_top = URL + '/App/follow/add_top'; // 添加
var update_datas = URL + '/App/Update/update_data'; // 添加