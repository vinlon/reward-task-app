// 监听返回键
function ketBack() {
    api.addEventListener({
        name: 'keyback'
    }, function(ret, err) {
        // alert('按了返回键');
    });
}

function exitApp() {
    api.addEventListener({
        name: 'keyback'
    }, function(ret, err) {
        api.toast({
            msg: '再按一次返回键退出' + api.appName,
            duration: 2000,
            location: 'bottom'
        });

        api.addEventListener({
            name: 'keyback'
        }, function(ret, err) {
            api.closeWidget({
                // id: 'A6960480793365',     //这里改成自己的应用ID
                // retData: {name:'closeWidget'},
                silent: true
            });
        });
        //
        // setTimeout(function(){
        //         exitApp();
        // },3000)
    });
}

function height() {
    var header = $api.byId('header');
    $api.fixStatusBar(header);

    api.setStatusBarStyle({
        style: 'dark',
        color: '#fff'
    });

}

/*判断操作系统类型*/
function estimateSystemType() {
    var systemType = api.systemType;
    return systemType;
}


/**********************公用常量start***********************/
/*手机顶部状态栏高度，默认iOS20，安卓25，本项目每个高度加20*,仅限特殊情况使用*/
var andriodStatusBar = 45;
var iosStatusBar = 40;

/*手机顶部状态栏高度，默认iOS20，安卓25*/
var andriodStatusBarNormal = 25;
var iosStatusBarNormal = 20;
/**********************公用常量end***********************/
var audioStreamer;


/**********************时间戳转换***********************/
function getLocalTime(time) {
    return new Date(parseInt(time) * 1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
}

function add0(x) { return x < 10 ? '0' + x : x }
Date.prototype.toLocaleString = function() {
    // var h = this.getHours();
    // var mm = this.getMinutes();
    // var s = this.getSeconds();
    // alert(this.getMonth() + 1)
    if (this.getMonth() + 1 < 10) { //月
        var thisMonth = '0' + (this.getMonth() + 1);
    } else {
        var thisMonth = this.getMonth() + 1;
    }
    if (this.getDate() < 10) { //日
        var thisDate = '0' + this.getDate();
    } else {
        var thisDate = this.getDate();
    }
    if (this.getHours() < 10) { //时
        var thisHours = '0' + this.getHours();
    } else {
        var thisHours = this.getHours();
    }
    if (this.getMinutes() < 10) { //分
        var thisMinutes = '0' + this.getMinutes();
    } else {
        var thisMinutes = this.getMinutes();
    }
    if (this.getSeconds() < 10) { //秒
        var thisSeconds = '0' + this.getSeconds();
    } else {
        var thisSeconds = this.getSeconds();
    }

    return this.getFullYear() + "-" + thisMonth + "-" + thisDate + " " + thisHours + ":" + thisMinutes + ":" + thisSeconds + " ";
};

function fnKeyFrame() {
    UILoading.keyFrame({
        rect: {
            w: 80,
            h: 100
        },
        content: [ //组成加载状态动画的关键帧图片路径数组，不传则显示默认图标
            {
                frame: '../image/loading01.png'
            },
            {
                frame: '../image/loading02.png'
            },
            {
                frame: '../image/loading03.png'
            },
        ],
        styles: {
            bg: 'rgba(243,243,243,0)',
            corner: 5,
            interval: 100,
            frame: {
                w: 80,
                h: 80
            },
        }
    }, function(ret) {
        // alert(JSON.stringify(ret));
    });
}

/**
 *	判断APP是否持有该权限
 * @param array   one_per  	- 权限数组['camera','location']
 */
function hasPermission(one_per) {
    var rets = api.hasPermission({
        list: one_per
    });

    //获取需要判断的权限
    var temp = new Array();
    var status = true;
    for (var obj in rets) {
        var granted = rets[obj].granted;
        var names = rets[obj].name;
        if (granted == false) {
            temp.push(names);
            status = false;
        }
    }
    //返回结果，和需要申请的权限
    return { "status": status, "perms": temp };
}

/**
 *	获取权限
 * @param array		one_per  	- 权限数组['camera','location']
 * @param function  callback  	- 回调函数
 */
function reqPermission(one_per, callback) {
    api.requestPermission({
        list: one_per,
        code: 100001
    }, function(ret, err) {
        //获取处理结果
        var list = ret.list;
        for (var i in list) {
            //只有有一项权限不足，就返回
            if (list[i].granted == false) {
                api.toast({
                    msg: '权限不足，无法进行下一步操作',
                    duration: 2000,
                    location: 'bottom'
                });
                return false;
            }
        }

        if (callback) {
            callback();
            return;
        }
    });
}

/**
 * 判断是否持有数组中的权限，无权限获取对应的权限
 * @param array		perm	  	- 权限数组['camera','location']
 * @param function  callback  	- 回调函数
 */
function confirmPer(perm, callback) {
    //权限类型有
    //calendar日历，camera相机，contacts通讯录，location位置信息，microphone麦克风
    //phone电话，sensor身体传感器，sms短信，storage存储空间，photos相册
    console.log(perm);

    //ios系统直接跳过
    // if(api.systemType == 'ios'){
    //     // callback();
    //     // return false;
    // }
    //判断多个权限是，使用 ,（英文逗号隔开）
    if (perm.indexOf(",") != -1) {
        var perms = perm.split(',');
    } else {
        var perms = new Array(perm);
    }

    //判断是否持有该数组中的权限
    var has = hasPermission(perms);
    // console.log(JSON.stringify(has));
    if (!has.status) {
        //获取权限
        reqPermission(has.perms, callback);
        return false;
    }

    callback();
    return true;
}

function fnKeyFrame() {
    UILoading.keyFrame({
        rect: {
            w: 80,
            h: 100
        },
        // content: [//组成加载状态动画的关键帧图片路径数组，不传则显示默认图标
        //         // {
        //         //     frame:'../image/loading01.png'
        //         // },
        //         // {
        //         //     frame:'../image/loading02.png'
        //         // },
        //         // {
        //         //     frame:'../image/loading03.png'
        //         // },
        //  ],
        styles: {
            bg: 'rgba(243,243,243,0)',
            corner: 5,
            interval: 100,
            frame: {
                w: 80,
                h: 80
            },
        }
    }, function(ret) {
        // alert(JSON.stringify(ret));
    });
}

var publicFunction = {
        //检测APP所需权限是否开启，并提示用户开启对应权限
        //callBack回调事件可自行在调用的时候写入
        checkPermission: function(callBack) {

            // alert(123);
            //验证照相、相册、存储、通知权限（有需要可以继续增加，详看对应文档）https://docs.apicloud.com/Client-API/api#hasPermission
            var resultList = api.hasPermission({
                // list:['camera','photos','storage']
                list: ['camera', 'photos']
            });

            var _permission = new Array();
            for (var i = 0; i < resultList.length; i++) {
                if (resultList[i].granted == false) {
                    _permission.push(resultList[i].name);
                }
            }

            if (!!_permission && JSON.stringify(_permission) != '[]') {
                api.requestPermission({
                    list: _permission,
                    code: 1
                }, function(ret, err) {
                    for (var i = 0; i < ret.list.length; i++) {
                        if (ret.list[i].granted == false) {
                            api.confirm({
                                title: '缺少权限，将导致部分功能无法使用',
                                msg: '请确认开启对应权限。',
                                buttons: ['确定开启', '取消']
                            }, function(ret, err) {
                                if (ret.buttonIndex == 1) {
                                    publicFunction.checkPermission(callBack);
                                } else {
                                    callBack();
                                    return;
                                }

                            });
                        } else {
                            callBack();
                            return;
                        }
                    }
                });
            } else {
                // if(!callBack){
                //     api.toast({
                //         msg: '请打开手机GPS,并重新进入页面',
                //         duration: 2000,
                //         location: 'bottom'
                //     });
                //     setTimeout(() => {
                //         api.closeToWin({
                //             name: 'nav-tab'
                //         });
                // 		api.closeWin({
                // 			name:'pulicTop'
                //         });
                //     }, 1000);
                // }
                // callBack();
                // return;
            }
        }
    }
    //加载更多
function showLoadMore(status = 0) {
    var html = '<div id="load_more"><span>努力加载中，请稍后...</span></div>';
    if (status == 1) {
        var body = $api.dom('body');
        $api.append(body, html);
        return;
    } else {
        var load_more = $api.dom('#load_more');
        $api.remove(load_more);
        return;
    }

}