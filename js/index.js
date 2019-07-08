
window.onload = function () {
    new Vue({
        el:'#nav',
        data:{
            nav:[
                {
                    id:0,
                    name:'在线商城',
                    select:true
                },
                {
                    id:1,
                    name:'坚果Pro 2S',
                    select:false
                },
                {
                    id:2,
                    name:'坚果R1',
                    select:false
                },
                {
                    id:3,
                    name:'坚果TNT工作站',
                    select:false
                },
                {
                    id:4,
                    name:'Smartisan OS',
                    select:false
                },
                {
                    id:5,
                    name:'欢喜云',
                    select:false
                },
                {
                    id:6,
                    name:'应用',
                    select:false
                },
                {
                    id:7,
                    name:'论坛',
                    select:false
                },
                {
                    id:8,
                    name:'荣誉与奖项',
                    select:false
                }
            ]
        },
        methods:{
            navli:function (index) {
                console.log(index);
                this.nav[index].select = true;
            }
        }
    })
    new Vue({
            el:'#c_nav',
            data:{
                nav:[
                    {
                        id:0,
                        name:'首页',
                        select:true
                    },
                    {
                        id:1,
                        name:'手机',
                        select:false
                    },
                    {
                        id:2,
                        name:'官方配件',
                        select:false
                    },
                    {
                        id:3,
                        name:'服饰箱包',
                        select:false
                    },
                    {
                        id:4,
                        name:'畅呼吸',
                        select:false
                    },
                    {
                        id:5,
                        name:'服务',
                        select:false
                    }
                ],
                navc:false,
                navcc:false,
                type:0,
                category:[
                    {
                        id:0,
                        first:[
                            {
                                id:0,
                                f_name:'手机',
                                secend:[
                                    {
                                        id:0,
                                        s_name:'手机',
                                        img:'image/index/phone.png'
                                    }
                                ]
                            },
                            {
                                id:1,
                                f_name:'官方配件',
                                secend:[
                                    {
                                        id:0,
                                        s_name:'数据线',
                                        img:''
                                    },
                                    {
                                        id:1,
                                        s_name:'充电器',
                                        img:''
                                    },
                                    {
                                        id:2,
                                        s_name:'线控耳机',
                                        img:''
                                    },
                                    {
                                        id:3,
                                        s_name:'移动电源',
                                        img:''
                                    },
                                    // {
                                    //     id:4,
                                    //     s_name:'拍照配件',
                                    //     img:''
                                    // }
                                ]
                            },
                            {
                                id:2,
                                f_name:'畅呼吸系列',
                                secend:[
                                    {
                                        id:0,
                                        s_name:'空气净化器',
                                        img:''
                                    },
                                    {
                                        id:1,
                                        s_name:'生活电器配件',
                                        img:''
                                    }
                                ]
                            },
                            {
                                id:3,
                                f_name:'服饰箱包',
                                secend:[
                                    {
                                        id:0,
                                        s_name:'箱包',
                                        img:''
                                    },
                                    {
                                        id:1,
                                        s_name:'男装',
                                        img:''
                                    },
                                    {
                                        id:2,
                                        s_name:'鞋',
                                        img:''
                                    }
                                ]
                            }
                        ]
                    },
                    {
                      id:1,
                      first:[
                          {
                              id:0,
                              f_name:'耳机',
                              secend: [
                                  {
                                      id:0,
                                      s_name:'线控耳机',
                                      img:''
                                  }
                              ]
                          },
                          {
                              id:1,
                              f_name:'手机充电配件',
                              secend:[
                                  {
                                      id:0,
                                      s_name:'数据线',
                                      img:''
                                  },
                                  {
                                      id:1,
                                      s_name:'充电器',
                                      img:''
                                  },
                                  {
                                      id:2,
                                      s_name:'移动电源',
                                      img:''
                                  }
                              ]
                          },
                          {
                              id:2,
                              f_name:'自拍杆',
                              secend:[
                                  {
                                      id:0,
                                      s_name:'自拍杆',
                                      img:''
                                  }
                              ]
                          },
                          {
                              id:3,
                              f_name:'音箱',
                              secend:[
                                  {
                                      id:0,
                                      s_name:'音箱',
                                      img:''
                                  }
                              ]
                          },
                          {
                              id:4,
                              f_name:'车载配件',
                              secend:[
                                  {
                                      id:0,
                                      s_name:'车载充电器',
                                      img:''
                                  }
                              ]
                          }
                      ]
                    },
                    {
                        id:2,
                        first:[
                            {
                                id:0,
                                f_name:'服饰',
                                secend:[
                                    {
                                        id:0,
                                        s_name:'T恤',
                                        img:''
                                    },
                                    {
                                        id:1,
                                        s_name:'POLO衫',
                                        img:''
                                    }
                                ]
                            },
                            {
                                id:1,
                                f_name:'鞋',
                                secend:[
                                    {
                                        id:0,
                                        s_name:'帆布鞋',
                                        img:''
                                    }
                                ]
                            },
                            {
                                id:2,
                                f_name:'箱包',
                                secend:[
                                    {
                                        id:0,
                                        s_name:'拉杆箱',
                                        img:''
                                    },
                                    {
                                        id:1,
                                        s_name:'包',
                                        img:''
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id:3,
                        first:[
                            {
                                id:0,
                                f_name:'生活电器',
                                secend:[
                                    {
                                        id:0,
                                        s_name:'空气净化器',
                                        img:''
                                    },
                                    {
                                        id:1,
                                        s_name:'生活电器配件',
                                        img:''
                                    }
                                ]
                            }
                        ]
                    }
                ],
                phone:[
                    {
                        id:0,
                        img:'',
                        name:'坚果 R1',
                        amout:'￥2999.00起'
                    },
                    {
                        id:1,
                        img:'',
                        name:'坚果 R1',
                        amout:'￥2999.00起'
                    },
                    {
                        id:2,
                        img:'',
                        name:'坚果 Pro 2s',
                        amout:'￥1798.00起'
                    },
                    {
                        id:3,
                        img:'',
                        name:'坚果 3',
                        amout:'￥1299.00起'
                    }
                ],
                service:[
                    {
                        id:0,
                        name:'服务政策'
                    },
                    {
                        id:1,
                        name:'在线客服'
                    },
                    {
                        id:2,
                        name:'发起售后'
                    }
                ],
                cnavp:false
            },
            methods: {
                over: function (id) {//弹框出现，动画不动
                    this.navc = true;
                    this.navcc = false;
                    this.type = id;
                },
                out: function () {//弹框消失，动画出现
                    this.navcc = true
                },
                paperscroll: function () {
                    var top = window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;
                    if(top>45){
                        this.cnavp = true;
                    }
                    else {
                        this.cnavp =false
                    }
                }
            },
            created:function () {
                window.addEventListener('scroll', this.paperscroll,true);
            }
        })
    new Vue({
        el:'#main',
        data:{
            k:0,
            img:[
               {
                   id:0,
                   url:'image/index/o_4.jpg',
                   show:true
               },
               {
                   id:1,
                   url:'image/index/o_5.jpg',
                   show:false
               }
           ],
            hot:[
                {
                    id:0,
                    name:'Smartisan 帆布鞋',
                    intro:'一双踏实、舒适的帆布鞋',
                    amout:'$199.00',
                    color:[
                        {
                            id:0,
                            co:'rgba(12,,12,12,1)',
                            img:'',
                            show:true
                        },
                        {
                            id:1,
                            co:'rgba(159,123,154,1)',
                            img:'',
                            show:false
                        },
                        {
                            id:2,
                            co:'rgba(59,200,200,1)',
                            img:'',
                            show:false
                        },
                        {
                            id:3,
                            co:'rgba(42,159,240,1)',
                            img:'',
                            show:false
                        }
                    ],
                    s_co:'rgba(12,,12,12,1)',
                    show:false
                },
                {
                    id:1,
                    name:'坚果“电池形电池”移动电源',
                    intro:'别具一格的“全能型”移动电源',
                    amout:'$69.00',
                    color:[
                        {
                            id:0,
                            co:'rgba(200,54,230,1)',
                            img:'',
                            show:true
                        },
                        {
                            id:1,
                            co:'rgba(62,48,206,1)',
                            img:'',
                            show:false
                        },
                        {
                            id:2,
                            co:'rgba(180,45,200,1)',
                            img:'',
                            show:false
                        },
                        {
                            id:3,
                            co:'rgba(89,89,89,1)',
                            img:'',
                            show:false
                        }
                    ],
                    s_co:'rgba(200,54,230,1)',
                    show:false
                },
                {
                    id:2,
                    name:'各色DNA检测套装',
                    intro:'千万级基因位点数据解读',
                    amout:'$499.00',
                    color:[
                        {
                            id:0,
                            co:'rgba(46,255,255,1)',
                            img:'',
                            show:true
                        }
                    ],
                    s_co:'rgba(46,255,255,1)',
                    show:false
                },
                {
                    id:3,
                    name:'Smartisan T恤 皇帝的新装',
                    intro:'',
                    amout:'$149.00',
                    color:[
                        {
                            id:0,
                            co:'rgba(225,220,220,1)',
                            img:'',
                            show:true
                        },
                        {
                            id:1,
                            co:'rgba(10,10,10,1)',
                            img:'',
                            show:false
                        },
                        {
                            id:2,
                            co:'rgba(196,196,196,1)',
                            img:'',
                            show:false
                        }
                    ],
                    s_co:'rgba(225,220,220,1)',
                    show:false
                },
                {
                    id:4,
                    name:'坚果砖式蓝牙小音箱',
                    intro:'一款设计出色、音质出众的随身音箱',
                    amout:'$149.00',
                    color:[
                        {
                            id:0,
                            co:'rgba(196,196,196,1)',
                            img:'',
                            show:true
                        },
                        {
                            id:1,
                            co:'rgba(159,25,63,1)',
                            img:'',
                            show:false
                        }
                    ],
                    s_co:'rgba(196,196,196,1)',
                    show:false
                },
                {
                    id:5,
                    name:'Smartisan 半入耳式耳机',
                    intro:'经典配色、专业调音、高品质麦克风',
                    amout:'$59.00',
                    color:[
                        {
                            id:0,
                            co:'rgba(10,240,240,1)',
                            img:'',
                            show:true
                        },
                        {
                            id:1,
                            co:'rgba(255,255,255,1)',
                            img:'',
                            show:false
                        },
                        {
                            id:2,
                            co:'rgba(12,12,12,1)',
                            img:'',
                            show:false
                        }
                    ],
                    s_co:'rgba(10,240,240,1)',
                    show:false
                },
                {
                    id:6,
                    name:'坚果彩虹数据线',
                    intro:'七彩配色随机发货，为生活增添一份小小惊喜',
                    amout:'$39.00',
                    color:[
                        {
                            id:0,
                            co:'',
                            img:'',
                            show:true
                        }
                    ],
                    s_co:'',
                    show:false
                },
                {
                    id:7,
                    name:'Smartisan 双口&快充车载充电器',
                    intro:'铝合金机身、双口&快充、智能调节',
                    amout:'$79.00',
                    color:[
                        {
                            id:0,
                            co:'rgba(0,0,0,1)',
                            img:'',
                            show:true
                        }
                    ],
                    s_co:'rgba(0,0,0,1)',
                    show:false
                }
            ],
            wid:'',
            lf:'0'
        },
        methods:{
            autpplay:function () {
                this.img[this.k].show = false;
                this.k++;
                if(this.k === this.img.length){
                    this.k = 0;
                }
                this.img[this.k].show = true;
            },
            play:function () {
                setInterval(this.autpplay,3000);
                var l = this.hot.length/4;
                if(l>parseInt(l)){
                    l = parseInt(l+1)
                }
                this.wid = l + '00%';
            },
            enter:function (id) {
                this.hot[id].show = true
            },
            out:function (id) {
                this.hot[id].show = false
            },
            liover:function (index,id) {
                for(var i = 0;i<this.hot[index].color.length;i++){
                    this.hot[index].color[i].show = false;
                }
                this.hot[index].color[id].show = true;
                this.hot[index].s_co = this.hot[index].color[id].co
            },
            left:function () {
                this.lf = '0%'
            },
            right:function () {
                this.lf = '-100%'
            }

        },
        created:function () {
            this.play()
        }
    })
};



