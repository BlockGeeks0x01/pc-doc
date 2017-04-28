define({ "api": [
  {
    "type": "get",
    "url": "/api/config/banner",
    "title": "Banner页",
    "name": "Banner",
    "group": "Config",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"image\": \"http://dsadsadsa.png\",\n    \"link_type\": 18,    # 18 联合采购系统产品\n    \"resource_id\": 33,  # 跳转ID\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/config.py",
    "groupTitle": "Config"
  },
  {
    "type": "get",
    "url": "/",
    "title": "错误码",
    "name": "ErrorCode",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "0",
            "description": "<p>成功</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100001",
            "description": "<p>未知错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100002",
            "description": "<p>参数错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100003",
            "description": "<p>用户未登录</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100004",
            "description": "<p>无权限访问</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100005",
            "description": "<p>资源不存在</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100006",
            "description": "<p>注册验证码短信发送太频繁</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100007",
            "description": "<p>验证码错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100008",
            "description": "<p>手机格式错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100009",
            "description": "<p>身份证号不合法</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "100010",
            "description": "<p>非认证用户，无法访问</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "110001",
            "description": "<p>产品节点无法参与</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "120001",
            "description": "<p>产品无法购买</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "120002",
            "description": "<p>产品状态无法改变</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130001",
            "description": "<p>预约额度超过产品剩余额度</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130002",
            "description": "<p>最迟打款日期晚于产品的最迟打款日期</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130003",
            "description": "<p>存在未完成订单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130004",
            "description": "<p>不是订单管理员</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130005",
            "description": "<p>订单初始化失败</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130006",
            "description": "<p>订单预约额度不正确</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "130007",
            "description": "<p>订单流程错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140001",
            "description": "<p>手机号已被注册</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140002",
            "description": "<p>初始化账户失败</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140003",
            "description": "<p>账号被冻结</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140004",
            "description": "<p>登录密码错误</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140005",
            "description": "<p>账号不存在</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140006",
            "description": "<p>当前有待处理的认证审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140007",
            "description": "<p>不是管理员</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140008",
            "description": "<p>管理员无法退出机构</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140009",
            "description": "<p>用户已加入机构</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140010",
            "description": "<p>不能重复邀请</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140011",
            "description": "<p>无法邀请管理员</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140012",
            "description": "<p>无法邀请自己的旗下理财师</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140013",
            "description": "<p>无法邀请其他机构的旗下理财师</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140014",
            "description": "<p>邀请已取消</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "140015",
            "description": "<p>无法删除非在职人员</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "订单小进度类型",
    "name": "OrderSubType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "101",
            "description": "<p>等待管理员审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "102",
            "description": "<p>管理员审核不通过</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "103",
            "description": "<p>等待麦策审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "104",
            "description": "<p>麦策审核不通过</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "105",
            "description": "<p>待申领合同</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "106",
            "description": "<p>待资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "107",
            "description": "<p>合同已寄出（在资料报单之前）</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "108",
            "description": "<p>合同已寄出（在资料报单之后）</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "109",
            "description": "<p>等待资料报单审核</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "110",
            "description": "<p>待重新资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "111",
            "description": "<p>待合同寄还</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "112",
            "description": "<p>等待麦策确认合同扫描件有效性</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "113",
            "description": "<p>已确认合同有效，等待寄还</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "114",
            "description": "<p>等待项目成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "115",
            "description": "<p>待分成确认</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "116",
            "description": "<p>等待麦策确认订单结束</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "117",
            "description": "<p>订单结束</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "118",
            "description": "<p>等待麦策确认分成</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "119",
            "description": "<p>关闭</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "订单大进度类型",
    "name": "OrderType",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "1",
            "description": "<p>预约中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "2",
            "description": "<p>合同申领</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "3",
            "description": "<p>资料报单</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "4",
            "description": "<p>合同寄还</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "5",
            "description": "<p>项目成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "6",
            "description": "<p>分成确认</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "7",
            "description": "<p>订单完成</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "get",
    "url": "/",
    "title": "产品状态",
    "name": "ProductStatus",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "0",
            "description": "<p>待观察</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "1",
            "description": "<p>观察中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "2",
            "description": "<p>众筹中</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "3",
            "description": "<p>已成立</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "4",
            "description": "<p>已结束</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "-1",
            "description": "<p>淘汰</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "-2",
            "description": "<p>众筹失败</p> "
          },
          {
            "group": "Success 200",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "-3",
            "description": "<p>直接关闭</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/apidoc.py",
    "groupTitle": "Constant"
  },
  {
    "type": "post",
    "url": "/api/feedback",
    "title": "用户反馈",
    "name": "CreateFeedback",
    "group": "Feedback",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "content",
            "description": "<p>反馈内容</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "resource_type",
            "description": "<p>关联类型, 0:无, 29:联合采购订单</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "resource_id",
            "description": "<p>关联订单单号</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/feedback.py",
    "groupTitle": "Feedback"
  },
  {
    "type": "get",
    "url": "/api/file/:fid",
    "title": "访问文件",
    "name": "AccessFile",
    "group": "File",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/api/file/token",
    "title": "获取OSS授权token",
    "name": "GetOssToken",
    "group": "File",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": {\n        \"token\": \"9ksadd9dsdsaf9a=s9\",\n        \"access_key_id: \"STS.16IIP1f43HeTD93kZV6a\",\n        \"access_key_secret\": \"aipzne684tZdwAE2jd3J8LSdPwqsu9ccl7bFjdr1\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "post",
    "url": "/api/file",
    "title": "上传文件",
    "name": "UploadFile",
    "group": "File",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>文件名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "md5",
            "description": "<p>OSS上的文件的md5值</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "size",
            "description": "<p>文件大小</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "is_pub",
            "defaultValue": "false",
            "description": "<p>是否公开访问</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n    \"ec\": 0,\n    \"message\": \"Success\",\n    \"data\": \"http://dasjlkjlk21j3kjlkdsaj.png\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/api/notifications",
    "title": "消息列表",
    "name": "NotificationList",
    "group": "Notification",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"date\": \"2017-4-2\",\n    \"data\": [{\n        \"id\": 1,\n        \"read\": false,\n        \"type\": 1,          # 通知类型,1:普通(不跳转), 2:订单, 3:产品, 4:认证未通过, 5:邀请\n        \"resource_id\": \"100932\",\n        \"msg_list\": [{\n            \"type\": 3,          # 信息类型, 1:文本, 2:产品\n            \"text\": \"年后\",\n            \"resource_id\": \"22333\"\n        }]\n    }]\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/notice.py",
    "groupTitle": "Notification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/notifications/clear",
    "title": "读取全部消息",
    "name": "NotificationReadAll",
    "group": "Notification",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/notice.py",
    "groupTitle": "Notification"
  },
  {
    "type": "patch",
    "url": "/api/notifications/:id/read",
    "title": "消息标记已读",
    "name": "ReadNotification",
    "group": "Notification",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/notice.py",
    "groupTitle": "Notification"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/check",
    "title": "管理员审核",
    "name": "AdminCheckOrder",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "pass",
            "description": "<p>是否通过</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "msg",
            "description": "<p>原因</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/contract",
    "title": "申领合同",
    "name": "ClaimContract",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"province\": \"浙江省\",\n    \"city\": \"杭州市\",\n    \"district\": \"西湖区\",\n    \"address\": \"曙光路122号1006室\",\n    \"recipients\": \"小明\",\n    \"tel\": \"15068927843\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:product_id",
    "title": "创建订单",
    "name": "CreateOrder",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "precontract_amount",
            "description": "<p>预约额度/万</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "estimate_pay_time",
            "description": "<p>预计打款时间</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[{\n    \"precontract_amount\": 300,  # 预约额度\n    \"name\": \"客户姓名\",\n    \"estimate_pay_time\": \"2017-10-23\"\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/declaration",
    "title": "资料报单",
    "name": "Declaration",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"actual_pay_time\": \"2017-12-1\",     # 实际打款日期\n    \"customer_id_card_no\": \"3332132132132\", # 身份证号\n    \"pay_pic\": \"/api/file/3\",   # 打款凭证\n    \"bank_card_pic\": \"/api/file/4\",     # 银行卡照片\n    \"front_of_id_pic\": \"/api/file/5\",   # 身份证正面\n    \"back_of_id_pic\": \"/api/file/33\",   # 身份证背面\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/contract/scanning_copy",
    "title": "获取合同扫描件",
    "name": "GetOrderContractScanningCopy",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[\"/api/file/1\", \"/api/file/33\"]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no",
    "title": "订单详情",
    "name": "OrderDetail",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"order_no\": \"201708123301\",\n    \"user\": {\n        \"id\": 100094,\n        \"name\": \"理财师A\"\n    },\n    \"product\": {\n        \"id\": 1000001,\n        \"name\": \"产品名称\",\n        \"collect_account_name\": \"募集账户名\",\n        \"collect_account\": \"募集账号\",\n        \"bank_name\": \"开户行\",\n        \"remit_remark\": \"打款备注\"\n    },\n    \"self\": true,       # 是否是当前登录者创建的\n    \"customer_name\": \"客户名称\",\n    \"estimate_pay_time\": \"2017-03-22\",  # 预计打款日\n    \"actual_pay_time\": \"2017-03-30\",    # 实际打款日\n    \"created_time\": \"2017-03-01T15:33:22\",  # 订单创建时间\n    \"profit_info\": \"分成说明\",\n    \"precontract_amount\": 300,          # 金额\n    \"currency\": 1,                      # 1:人民币,2:美元\n    \"dividends_percentage\": 0.0008,     # 分成比例\n    \"type\": 1,                          # 订单当前大进度类型\n    \"sub_type\": 1,                      # 订单当前小进度类型\n    \"last_news\": \"最新进度\",\n    \"timeline\": [{                      # 时间线\n        \"name\": \"资料报单\",\n        \"status\": 1     # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n    }],\n    \"history\": [{                       # 订单动态历史\n        \"timestamp\": \"2017-04-12\",\n        \"event\": \"订单已创建，正在等待公司审核\",\n        \"status\": 1     # 进度状态 1:进行中,2:已结束\n    }]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/orders",
    "title": "订单列表",
    "name": "OrderList",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "type",
            "description": "<p>类型1:等待审核,2:合同寄还,3:资料报单,4:合同寄还,5:分成确认。不传表示所有订单</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "product_id",
            "description": "<p>产品ID</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"order_no\": \"201708123301\",\n    \"user\": {\n        \"id\": 100094,\n        \"name\": \"理财师A\"\n    },\n    \"product\": {\n        \"id\": 1000001,\n        \"name\": \"产品名称\",\n        \"collect_account_name\": \"募集账户名\",\n        \"collect_account\": \"募集账号\",\n        \"bank_name\": \"开户行\",\n        \"remit_remark\": \"打款备注\"\n    },\n    \"self\": true,       # 是否是当前登录者创建的\n    \"customer_name\": \"客户名称\",\n    \"estimate_pay_time\": \"2017-03-22\",  # 预计打款日\n    \"actual_pay_time\": \"2017-03-30\",    # 实际打款日\n    \"created_time\": \"2017-03-01T15:33:22\",  # 订单创建时间\n    \"profit_info\": \"分成说明\",\n    \"precontract_amount\": 300,          # 金额\n    \"currency\": 1,                      # 1:人民币,2:美元\n    \"dividends_percentage\": 0.0008,     # 分成比例\n    \"type\": 1,                          # 订单当前大进度类型\n    \"sub_type\": 1,                      # 订单当前小进度类型\n    \"last_news\": \"最新进度\",\n    \"timeline\": [{                      # 时间线\n        \"name\": \"资料报单\",\n        \"status\": 1     # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n    }],\n    \"history\": [{                       # 订单动态历史\n        \"timestamp\": \"2017-04-12\",\n        \"event\": \"订单已创建，正在等待公司审核\",\n        \"status\": 1     # 进度状态 1:进行中,2:已结束\n    }]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/profit_confirm",
    "title": "分成确认",
    "name": "OrderProfitConfirm",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>账户类型1:个人,2:对公</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "account_name",
            "description": "<p>账户名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "account",
            "description": "<p>账号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "bank_name",
            "description": "<p>开户行</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "back_of_card_pic",
            "description": "<p>银行卡背面照片地址</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/todo_stats",
    "title": "待办订单统计",
    "name": "OrderStats",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"waiting_admin_confirm\": 12,  # 待审核订单\n    \"waiting_ask_for_contract\": 99,   # 待申领合同\n    \"waiting_declaration\": 9,   # 待资料报单\n    \"waiting_return_contract\": 34,  # 待合同寄还\n    \"waiting_confirm_profit\": 2,    # 待分成确认\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/contract/scanning_copy",
    "title": "上传合同扫描件",
    "name": "UploadOrderContractScanningCopy",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>list</p> ",
            "optional": false,
            "field": "scanning_copy",
            "description": "<p>合同扫描件列表</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/products/:pid/follow",
    "title": "关注/取消关注产品",
    "name": "FollowProduct",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "follow",
            "description": "<p>是否关注</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/followed",
    "title": "已关注的产品列表",
    "name": "FollowedProducts",
    "group": "Product",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 113,\n    \"name\": \"产品名称\",\n    \"status\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    }
  },
  {
    "type": "patch",
    "url": "/api/products/activity/:node_id",
    "title": "参与/取消参与产品节点活动",
    "name": "ParticipateNode",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>bool</p> ",
            "optional": false,
            "field": "participate",
            "description": "<p>参与/取消</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "mobile",
            "description": "<p>联系方式</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"participate\": true,\n    \"name\": \"小明\",\n    \"mobile\": \"15068975727\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:id",
    "title": "产品详情",
    "name": "ProductDetail",
    "group": "Product",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"name\": \"产品名称\"\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动\n    \"status\": 1,            # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已成立,4:已结束,-1:预审失败,-2:众筹失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款日期\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": \"产品策略\",\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"产品开放日\",\n    \"dividend_type\": 1, # 分红方式: 1份额2金额\n    \"profit_info\": \"分成说明\",\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"dividends_percentage\": 0.063,  # 分成比例\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"features\": [{\"text\": \"特点1\", \"image\": \"http://xxxx.jpg\"}],  # 产品特点\n    \"feature_ids\": [33, 35, 11, 99],\n    \"relevant_files\": [{\n        \"name\": \"相关文件1\",\n        \"url\": \"/api/file/3\"\n    }]\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"duration\": 23,             # 期限\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n    }],\n    \"dividends_interval\": [{        # 预计分成打款时间\n        \"estimated_time\": \"2016-12-23\",     # 预计打款时间\n        \"percent\": 0.33\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"售中服务\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"type\": 1,              # 节点类型, 1:普通, 2:可参与\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n                \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/products",
    "title": "产品列表",
    "name": "Products",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "status",
            "description": "<p>产品状态 1:观察中,2:采购中,3:往期产品</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"name\": \"产品名称\"\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动\n    \"status\": 1,            # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已成立,4:已结束,-1:预审失败,-2:众筹失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款日期\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": \"产品策略\",\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"产品开放日\",\n    \"dividend_type\": 1, # 分红方式: 1份额2金额\n    \"profit_info\": \"分成说明\",\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"dividends_percentage\": 0.063,  # 分成比例\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"features\": [{\"text\": \"特点1\", \"image\": \"http://xxxx.jpg\"}],  # 产品特点\n    \"feature_ids\": [33, 35, 11, 99],\n    \"relevant_files\": [{\n        \"name\": \"相关文件1\",\n        \"url\": \"/api/file/3\"\n    }]\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"duration\": 23,             # 期限\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n    }],\n    \"dividends_interval\": [{        # 预计分成打款时间\n        \"estimated_time\": \"2016-12-23\",     # 预计打款时间\n        \"percent\": 0.33\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"售中服务\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"type\": 1,              # 节点类型, 1:普通, 2:可参与\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n                \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ]\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/products/purchased",
    "title": "已购的产品列表",
    "name": "PurchasedProducts",
    "group": "Product",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 113,\n    \"name\": \"产品名称\",\n    \"status\": 1,\n    \"amount\": 300,\n    \"currency\": 1,      # 1:人民币, 2:美元\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/sms",
    "title": "发送短信",
    "name": "SendSms",
    "group": "Sms",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "type",
            "description": "<p>类型,1:注册,2:忘记密码</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/sms.py",
    "groupTitle": "Sms"
  },
  {
    "type": "get",
    "url": "/",
    "title": "非分页返回的结构",
    "name": "NormalStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {},\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "get",
    "url": "/",
    "title": "分页返回的结构",
    "name": "PageStructure",
    "group": "Structure",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"has_next\": false,\n        \"has_prev\": false,\n        \"items\": [],\n        \"page\": 1,\n        \"total\": 100\n    },\n    \"ec\": 0,\n    \"msg\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/apidoc.py",
    "groupTitle": "Structure"
  },
  {
    "type": "post",
    "url": "/api/user/invite/:id/accept",
    "title": "接受邀请",
    "name": "AcceptInvite",
    "group": "User",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/unfreeze_apply",
    "title": "申请解冻",
    "name": "ApplyUnfreeze",
    "group": "User",
    "parameter": {
      "examples": [
        {
          "title": "手机号密码方式:",
          "content": "{\n    \"login\": \"15067125727\",\n    \"password\": \"dsa98d09sa\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/certificate",
    "title": "提交/修改认证资料",
    "name": "CertificateApply",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "company_name",
            "description": "<p>公司</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "position",
            "description": "<p>职位</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "work_year",
            "description": "<p>工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "industry",
            "description": "<p>行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "business_card_pic",
            "description": "<p>名片地址</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/signup/check",
    "title": "检查注册信息",
    "name": "CheckSignUpData",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/user/address/:id",
    "title": "删除地址",
    "name": "DeleteAddress",
    "group": "User",
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/user/org/members/:id",
    "title": "删除机构成员",
    "name": "DeleteOrgMembers",
    "group": "User",
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/certificate",
    "title": "获取当前用户认证信息",
    "name": "GetCertificate",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"小明\",\n    \"company_name\": \"公司A\",\n    \"position\": \"职位理财师\",\n    \"work_year\": 1,\n    \"industry\": 3,\n    \"business_card_pic\": \"/api/file/1\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/certificate/:id",
    "title": "获取某个认证信息",
    "name": "GetOneUserCertificate",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"小明\",\n    \"position\": \"职位理财师\",\n    \"work_year\": 1,\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/invite/:id/check",
    "title": "邀请检查",
    "name": "InviteCheck",
    "group": "User",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/invite",
    "title": "邀请用户",
    "name": "InviteUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "position",
            "description": "<p>职位</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "work_year",
            "description": "<p>从业年限</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "用户登录",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/logout",
    "title": "注销",
    "name": "Logout",
    "group": "User",
    "description": "<p>用户注销</p> ",
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/org/members",
    "title": "机构成员",
    "name": "OrgMembers",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 2,\n    \"name\": \"理财师A\"，\n    \"position\": \"职位理财师\",\n    \"status\": 1,    # 状态 1: 待确认, 2:已确认, 3: 已离职, 4: 已拒绝\n    \"mobile\": \"150694324\",\n    \"finished_order_count\": 3,  # 已成交订单\n    \"income\": 300,          # 分成\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/user/quit_org",
    "title": "退出机构",
    "name": "QuitOrg",
    "group": "User",
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/signup",
    "title": "用户注册",
    "name": "Register",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p> "
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/invite/:id/reject",
    "title": "拒绝邀请",
    "name": "RejectInvite",
    "group": "User",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/password/reset",
    "title": "忘记密码",
    "name": "ResetPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "patch",
    "url": "/api/user/address/:id",
    "title": "修改地址默认状态",
    "name": "UpdateAddress",
    "group": "User",
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user/certificate/:id",
    "title": "修改某个认证信息",
    "name": "UpdateOneUserCertificate",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": false,
            "field": "position",
            "description": "<p>职位</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "work_year",
            "description": "<p>年限</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/profile",
    "title": "修改当前用户信息",
    "name": "UpdateUserProfile",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "avatar",
            "description": "<p>头像</p> "
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/address",
    "title": "获取用户地址列表",
    "name": "UserAddresses",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"is_default\": false,\n    \"province\": \"浙江省\",\n    \"city\": \"杭州市\",\n    \"district\": \"西湖区\",\n    \"address\": \"曙光路122号1006室\",\n    \"recipients\": \"小明\",\n    \"tel\": \"15068927843\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/bank_account",
    "title": "银行账户信息",
    "name": "UserBankAccount",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"type\": 1,  # 账户类型,1:个人, 2:对公\n    \"account_name\": \"账户名\",\n    \"account\": \"账号\",\n    \"bank_name\": \"开户行\",\n    \"back_of_card_pic\": \"银行卡背面照片地址\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/center",
    "title": "个人中心",
    "name": "UserCenter",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"user_id\": 100409,\n    \"name\": \"王伟强\",\n    \"avatar\": \"http://www.xsadas.jpg\",\n    \"certification_status\": 1,  # 认证状态, 0:未认证,1:待审核,2:修改中,3:认证通过\n    \"is_admin\": true,\n    \"certification_info\": {\n        \"company_name\": \"机构名称\",\n        \"position\": \"职位理财师\",\n        \"work_year\": 1,\n        \"industry\": 3,\n    },\n    \"personal_statistic\": {     # 个人配置统计\n        \"finished_order_count\": 12, # 累计成交订单\n        \"customer_count\": 3,    # 累计客户\n        \"income_rmb\": 333.33,       # 累计分成人民币\n        \"income_dollar\": 333.33,       # 累计分成美元\n        \"total_invest_rmb\": 33, # 累计配置人民币\n        \"total_invest_dollar\": 999, # 累计配置美元\n    },\n    \"org_statistic\": {          # 机构配置统计\n        \"finished_order_count\": 12, # 累计成交订单\n        \"customer_count\": 3,    # 累计客户\n        \"income_rmb\": 333.33,       # 累计分成人民币\n        \"income_dollar\": 333.33,       # 累计分成美元\n        \"total_invest_rmb\": 33, # 累计配置人民币\n        \"total_invest_dollar\": 999, # 累计配置美元\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/customers",
    "title": "客户列表",
    "name": "UserCustomers",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"name\": \"张东\",\n    \"total_invest_product_count\": 33,   # 累计配置产品数\n    \"existence_invest_product_count\": 1,    # 存续产品数\n    \"total_invest_rmb\": 33, # 累计配置人民币/万\n    \"total_invest_dollar\": 99,  # 累计配置美金/万\n    \"total_existence_invest_rmb\": 33,   # 存续人民币/万\n    \"total_existence_invest_dollar\": 999,   #存续美金/万\n    \"last_invest_time\": \"2017-12-01\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/user/customers/id_card",
    "title": "客户身份证信息",
    "name": "UserCustomersIDCard",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>string</p> ",
            "optional": true,
            "field": "name",
            "description": "<p>客户姓名</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"name\": \"张东\",\n    \"id_card_no\": \"330905199704860582\",     # 身份证号\n    \"front_of_id_pic\": \"/api/file/3\",       # 身份证正面\n    \"back_of_id_pic\": \"/api/file/34\"        # 身份证背面\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/profile",
    "title": "获取当前用户信息",
    "name": "UserProfile",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"user_id\": 100094,\n    \"mobile\": \"1321321312\"\n    \"is_admin\": true,\n    \"admin_id\": 100130,\n    \"name\": \"小明\",\n    \"avatar\": \"http://dsadsasjda.png\",  # 头像\n    \"certification_status\": 0,          # 认证状态, 0:未认证,1:待审核,2:修改中,3:认证通过\n    \"unread_notifications\": 33,         # 未读消息数\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/profit",
    "title": "采购分成列表",
    "name": "UserProfitList",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": false,
            "field": "finished",
            "description": "<p>是否已打款, 1:是, 0否</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>int</p> ",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p> "
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"order_no\": \"83092180982193012\",\n    \"product_name\": \"产品名称A\",\n    \"product_id\": 33,\n    \"amount\": 33,\n    \"currency\": 1,  # 1 人民币,2:美金\n    \"estimated_time\": \"2015-12-11\",     # 预计打款时间\n    \"actual_time\": \"2015-12-11\",     # 实际打款时间\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/user/profit/summary",
    "title": "采购分成",
    "name": "UserProfitSummary",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"total\": {\n        \"income_rmb\": 999,\n        \"income_dollar\": 2011\n    },\n    \"waiting\": {        # 待打款\n        \"income_rmb\": 999,\n        \"income_dollar\": 2011\n    },\n    \"finished\": {       # 已打款\n        \"income_rmb\": 999,\n        \"income_dollar\": 2011\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  }
] });