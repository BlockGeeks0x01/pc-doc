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
          "content": "[{\n    \"image\": \"http://dsadsadsa.png\",\n    \"link\": \"http://dsadsadsa.png\"\n}]",
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
            "type": "int",
            "optional": false,
            "field": "0",
            "description": "<p>成功</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100001",
            "description": "<p>未知错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100002",
            "description": "<p>参数错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100003",
            "description": "<p>用户未登录</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100004",
            "description": "<p>无权限访问</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100005",
            "description": "<p>资源不存在</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100006",
            "description": "<p>注册验证码短信发送太频繁</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100007",
            "description": "<p>验证码错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100008",
            "description": "<p>手机格式错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100009",
            "description": "<p>身份证号不合法</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "100010",
            "description": "<p>非认证用户，无法访问</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "110001",
            "description": "<p>产品节点无法参与</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "120001",
            "description": "<p>产品无法购买</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "120002",
            "description": "<p>产品状态无法改变</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130001",
            "description": "<p>预约额度超过产品剩余额度</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130002",
            "description": "<p>最迟打款日期晚于产品的最迟打款日期</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130003",
            "description": "<p>存在未完成订单</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130004",
            "description": "<p>不是订单管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130005",
            "description": "<p>订单初始化失败</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130006",
            "description": "<p>订单预约额度不正确</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130007",
            "description": "<p>订单流程错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130008",
            "description": "<p>分成金额不能大于剩余待打款金额</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "130009",
            "description": "<p>订单存续份额不足</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140001",
            "description": "<p>手机号已被注册</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140002",
            "description": "<p>初始化账户失败</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140003",
            "description": "<p>账号被冻结</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140004",
            "description": "<p>登录密码错误</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140005",
            "description": "<p>账号不存在</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140006",
            "description": "<p>当前有待处理的认证审核</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140007",
            "description": "<p>不是管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140008",
            "description": "<p>管理员无法退出机构</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140009",
            "description": "<p>用户已加入机构</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140010",
            "description": "<p>不能重复邀请</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140011",
            "description": "<p>无法邀请管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140012",
            "description": "<p>无法邀请自己的旗下理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140013",
            "description": "<p>无法邀请其他机构的旗下理财师</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140014",
            "description": "<p>邀请已取消</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "140015",
            "description": "<p>无法删除非在职人员</p>"
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
    "title": "用户角色",
    "name": "Role",
    "group": "Constant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "20",
            "description": "<p>创始人</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "21",
            "description": "<p>管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "22",
            "description": "<p>产品管理员</p>"
          },
          {
            "group": "Success 200",
            "type": "int",
            "optional": false,
            "field": "23",
            "description": "<p>理财师</p>"
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
    "url": "/api/customers",
    "title": "创建客户",
    "name": "CreateCustomer",
    "group": "Customer",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/customers.py",
    "groupTitle": "Customer"
  },
  {
    "type": "post",
    "url": "/api/customers/types",
    "title": "编辑客户类型",
    "name": "CreateCustomersTypes",
    "group": "Customer",
    "version": "1.0.0",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[{\n    \"id\": 1,\n    \"text\": \"客户类型\",\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/customers.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customers/:id",
    "title": "客户详情",
    "name": "CustomerDetail",
    "group": "Customer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"no\": \"8302183921889301\",  # 客户编号\n    \"name\": \"张东\",\n    \"type\": {\n        \"id\": 12,\n        \"text\": \"VIP客户\"\n    },\n    \"first_invest_time\": \"2017-12-16\",\n    \"last_invest_time\": \"2017-11-16\",\n    \"remark\": \"备注\",\n    \"order_amount\": {   # 成交金额\n        \"total\": {  # 累计\n            \"rmb\": 0,\n            \"dollar\": 0\n        },\n        \"existence\": {  #  存续\n            \"rmb\": 0,\n            \"dollar\": 0\n        }\n    },\n    \"profit\": {     # 收益\n        \"total\": {  # 账面收益\n            \"rmb\": 0,\n            \"dollar\": 0\n        },\n        \"finished\": {   # 已分配收益\n            \"rmb\": 0,\n            \"dollar\": 0\n        }\n    },\n    \"existence_percent_by_profit_type\": {\n        \"fixed\": 0.12,\n        \"float\": 0.88\n    },\n    \"existence_percent_by_currency\": {\n        \"rmb\": 0.9,\n        \"dollar\": 0.1\n    },\n    \"existence_percent_by_strategy\": {\n        \"主观多空\": 0.8,\n        \"其他\": 0.2\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/customers.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customers",
    "title": "客户列表",
    "name": "CustomersList",
    "group": "Customer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "type",
            "description": "<p>客户类型,-1未分类</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "org",
            "defaultValue": "0",
            "description": "<p>是否查看整个机构客户0:否，1:是</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>客户姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 3,\n    \"name\": \"张东\",\n    \"CFP_name\": \"理财师姓名\",\n    \"type\": {\n        \"id\": 12,\n        \"text\": \"VIP客户\"\n    },\n    \"total_invest_rmb\": 33, # 累计配置人民币/万\n    \"total_invest_dollar\": 99,  # 累计配置美金/万\n    \"product_count\": 3  # 产品数量\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/customers.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/customers/types",
    "title": "客户类型",
    "name": "CustomersTypes",
    "group": "Customer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"text\": \"VIP\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/customers.py",
    "groupTitle": "Customer"
  },
  {
    "type": "get",
    "url": "/api/user/reserve_product?product_id=XXX",
    "title": "",
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "group": "E__project_maice_purchasing_consortia_purchasing_consortia_frontend_user_py",
    "groupTitle": "E__project_maice_purchasing_consortia_purchasing_consortia_frontend_user_py",
    "name": "GetApiUserReserve_productProduct_idXxx"
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
            "type": "String",
            "optional": false,
            "field": "content",
            "description": "<p>反馈内容</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "resource_type",
            "description": "<p>关联类型, 0:无, 29:联合采购订单</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "resource_id",
            "description": "<p>关联订单单号</p>"
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
    "url": "/api/file/pub/:md5",
    "title": "访问文件(md5)",
    "name": "AccessFileByMd5",
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
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "md5",
            "description": "<p>OSS上的文件的md5值</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "size",
            "description": "<p>文件大小</p>"
          },
          {
            "group": "Parameter",
            "type": "bool",
            "optional": false,
            "field": "is_pub",
            "defaultValue": "false",
            "description": "<p>是否公开访问</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "access_permission",
            "defaultValue": "1",
            "description": "<p>访问权限 1:仅自己, 2:仅自己的管理员, 3:自己和自己的管理员, 4:所有机构成员</p>"
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
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "unread",
            "defaultValue": "1",
            "description": "<p>是否未读</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"date\": \"2017-4-2\",\n    \"data\": [{\n        \"id\": 1,\n        \"read\": false,\n        \"type\": 1,          # 通知类型,1:普通(不跳转), 2:订单, 3:产品, 4:认证未通过, 5:邀请, 6:分成发放\n        \"resource_id\": \"100932\",\n        \"msg_list\": [{\n            \"type\": 3,          # 信息类型, 1:文本, 2:产品\n            \"text\": \"年后\",\n            \"resource_id\": \"22333\"\n        }]\n    }]\n}]",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/notice.py",
    "groupTitle": "Notification"
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
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "precontract_amount",
            "description": "<p>预约额度/万</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "estimate_pay_time",
            "description": "<p>预计打款时间</p>"
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
    "url": "/api/orders/:order_no/bonus",
    "title": "创建订单分红记录",
    "name": "CreateOrderBONUS",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>赎回生效日期</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/distributions",
    "title": "创建订单分配记录",
    "name": "CreateOrderDistribution",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>赎回生效日期</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/redeem",
    "title": "创建订单赎回记录",
    "name": "CreateOrderRedeem",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "redemption_time",
            "description": "<p>赎回生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "redeem_value",
            "description": "<p>赎回日净值</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "fee",
            "description": "<p>手续费</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/:order_no/share_change",
    "title": "创建份额变更记录",
    "name": "CreateOrderShareChange",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>份额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>变更生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "direction",
            "description": "<p>1:增加,-1减少</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "post",
    "url": "/api/orders/org",
    "title": "创建机构产品订单",
    "name": "CreateOrgOrders",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "product_id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "customer_no",
            "description": "<p>客户编号</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "buy_time",
            "description": "<p>计息确认日</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "prospective_earning",
            "description": "<p>预期年化收益</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": true,
            "field": "expire_time",
            "description": "<p>到期时间</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "buy_duration",
            "description": "<p>购买期限</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "buy_value",
            "description": "<p>购买时净值</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "buy_share",
            "description": "<p>份额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no",
    "title": "删除订单",
    "name": "DeleteOrder",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/bonus/:id",
    "title": "删除订单分红记录",
    "name": "DeleteOrderBonus",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/distributions/:id",
    "title": "删除订单分配记录",
    "name": "DeleteOrderDistribution",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/redeem/:id",
    "title": "删除订单赎回记录",
    "name": "DeleteOrderRedeem",
    "group": "Order",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "1.34    # 剩余份额",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "delete",
    "url": "/api/orders/:order_no/share_change/:id",
    "title": "删除份额变更记录",
    "name": "DeleteOrderShareChange",
    "group": "Order",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/bonus",
    "title": "订单分红记录",
    "name": "OrderBonus",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"amount\": 13,   # 金额\n    \"bonus_time\": \"2017-01-01T17:00:00\",   # 分配时间\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/list/:order_no/book_profit_graph",
    "title": "订单账面收益图",
    "name": "OrderBookProfits",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"date\": \"2017-12-01\",\n    \"book_profit\": {\n        \"order\": 300,   # 订单\n        \"bank\": 300,    # 银行\n        \"csi300\": 229   # 沪深300\n    }\n}]",
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
    "url": "/api/orders/book_profit_graph_million",
    "title": "订单账面收益图（百万）",
    "name": "OrderBookProfitsMillion",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "org_id",
            "description": "<p>机构ID</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "customer_no",
            "description": "<p>客户编号</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"date\": \"2017-12-01\",\n    \"book_profit\": {\n        \"order\": 300,   # 订单\n        \"bank\": 300,    # 银行\n        \"csi300\": 229   # 沪深300\n    }\n}]",
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
    "url": "/api/orders/list/:order_no",
    "title": "订单详情",
    "name": "OrderDetails",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"amount\": 12,   # 认购金额\n    \"persistent_share\": 100,    # 存续份额\n    \"prospective_earning\": 0.11,    # 预期年化收益\n    \"buy_duration\": 12, # 期限\n    \"start_date\": \"2017-11-11T17:00:00\",    # 成立日\n    \"buy_time\": \"2017-11-11T17:00:00\",    # 认购日\n    \"last_redemption_time\": \"2017-11-11T17:00:00\",    # 最后赎回日\n    \"end_date\": \"2017-11-11T17:00:00\",    # 结束日\n    \"user_name\": \"理财师\",\n    \"remark\": \"备注\",\n    \"book_profit\": \"133\",   # 账面收益\n    \"currency\": 1,\n    \"distribution\": 999,    # 分配金额\n    \"book_profit_percent\": 0.12,    # 账面收益率\n    \"buy_value\": 1, # 认购日净值\n    \"last_redemption_value\": 1.33,  # 最后赎回净值\n    \"last_value_update_time\": \"2017-11-11T17:00:00\",    # 最新净值日\n    \"last_value\": 1.33,    # 最新净值\n    \"persistent_amount\": 933,    # 存续金额\n    \"bonus\": 933,    # 分红金额\n    \"survival\": true,   # 是否存续中\n}",
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
    "url": "/api/orders/:order_no/distributions",
    "title": "订单分配记录",
    "name": "OrderDistribution",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"amount\": 13,   # 金额\n    \"bonus_time\": \"2017-01-01T17:00:00\",   # 分配时间\n    \"finished\": true,   # 已分配\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/list",
    "title": "订单列表",
    "name": "OrderListV2",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "user_id",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "product_id",
            "description": "<p>产品ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "customer_no",
            "description": "<p>客户编号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "existence",
            "description": "<p>存续类型 0:已结束1:存续中</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "source",
            "description": "<p>来源,1:麦策2:机构</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
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
          "content": "{\n    \"order_no\": \"201708123301\",\n    \"user\": {\n        \"id\": 100094,\n        \"name\": \"理财师A\"\n    },\n    \"product\": {\n        \"id\": 1000001,\n        \"name\": \"产品名称\",\n        \"collect_account_name\": \"募集账户名\",\n        \"collect_account\": \"募集账号\",\n        \"bank_name\": \"开户行\",\n        \"remit_remark\": \"打款备注\",\n        \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    },\n    \"survival\": true,   # 是否存续中\n    \"self\": true,       # 是否是当前登录者创建的\n    \"customer_name\": \"客户名称\",\n    \"customer_no\": \"客户编号\",\n    \"actual_pay_time\": \"2017-03-30\",    # 实际打款日\n    \"created_time\": \"2017-03-01T15:33:22\",  # 订单创建时间\n    \"precontract_amount\": 300,          # 金额\n    \"currency\": 1,                      # 1:人民币,2:美元\n    \"type\": 1,                          # 订单当前大进度类型\n    \"sub_type\": 1,                      # 订单当前小进度类型\n    \"buy_share\": 100,   # 认购份额\n    \"persistent_share\": 100, # 存续份额\n    \"buy_time\": \"2017-12-16T16:00:00\"   # 认购日/计息确认日\n    \"buy_value\": 33,    # 认购时净值（浮动）\n    \"last_redemption_time\": \"2017-12-16T16:00:00\" # 浮动类最后一次的赎回日\n    \"last_redemption_value\": 3.14,  # 浮动类最后一次赎回的净值\n    \"buy_duration\": 12, # 购买期限\n    \"prospective_earning\": 3.14,    # 预期年化收益\n    \"last_value_update_time\": \"2017-12-16T16:00:00\" # 最新净值日\n    \"last_value\": 3.14,  # 最新净值\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/redeem",
    "title": "订单赎回记录",
    "name": "OrderRedeem",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"amount\": 13,   # 金额\n    \"redeem_value\": 1.4,    # 赎回时净值（浮动）\n    \"fee\": 13.31,   # 手续费\n    \"redemption_time\": \"2017-01-01T17:00:00\",   # 赎回生效日\n    \"remark\": \"备注\",\n    \"status\": 1,    # 状态1:等待，2：成功, 3:失败\n    \"market_value_change\": 1.33,    #市值变化\n    \"actual_profit\": 999,   # 实际收益\n    \"absolute_profit\": 999, # 绝对收益\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/share_change",
    "title": "订单份额变更记录",
    "name": "OrderShareChange",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"id\": 1,\n    \"amount\": 13,   # 金额\n    \"update_time\": \"2017-01-01T17:00:00\",\n    \"remark\": \"备注\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/orders/org",
    "title": "机构订单列表",
    "name": "OrgOrders",
    "group": "Order",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "source",
            "description": "<p>来源,1:麦策2:机构</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"order_no\": \"201708123301\",\n    \"user\": {\n        \"id\": 100094,\n        \"name\": \"理财师A\"\n    },\n    \"product\": {\n        \"id\": 1000001,\n        \"name\": \"产品名称\",\n        \"collect_account_name\": \"募集账户名\",\n        \"collect_account\": \"募集账号\",\n        \"bank_name\": \"开户行\",\n        \"remit_remark\": \"打款备注\",\n        \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    },\n    \"survival\": true,   # 是否存续中\n    \"self\": true,       # 是否是当前登录者创建的\n    \"customer_name\": \"客户名称\",\n    \"customer_no\": \"客户编号\",\n    \"actual_pay_time\": \"2017-03-30\",    # 实际打款日\n    \"created_time\": \"2017-03-01T15:33:22\",  # 订单创建时间\n    \"precontract_amount\": 300,          # 金额\n    \"currency\": 1,                      # 1:人民币,2:美元\n    \"type\": 1,                          # 订单当前大进度类型\n    \"sub_type\": 1,                      # 订单当前小进度类型\n    \"buy_share\": 100,   # 认购份额\n    \"persistent_share\": 100, # 存续份额\n    \"buy_time\": \"2017-12-16T16:00:00\"   # 认购日/计息确认日\n    \"buy_value\": 33,    # 认购时净值（浮动）\n    \"last_redemption_time\": \"2017-12-16T16:00:00\" # 浮动类最后一次的赎回日\n    \"last_redemption_value\": 3.14,  # 浮动类最后一次赎回的净值\n    \"buy_duration\": 12, # 购买期限\n    \"prospective_earning\": 3.14,    # 预期年化收益\n    \"last_value_update_time\": \"2017-12-16T16:00:00\" # 最新净值日\n    \"last_value\": 3.14,  # 最新净值\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/orders/:order_no/distributions/:id",
    "title": "上次订单分配记录",
    "name": "PriorOrderDistribution",
    "group": "Order",
    "success": {
      "examples": [
        {
          "title": "Success-Response: (返回None就是没有)",
          "content": "{\n    \"amount\": 13,   # 金额\n    \"bonus_time\": \"2017-01-01T17:00:00\",   # 赎回生效日\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/bonus/:id",
    "title": "更新订单分红记录",
    "name": "UpdateOrderBonus",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>分红日期</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/distributions/:id",
    "title": "更新订单分配记录",
    "name": "UpdateOrderDistribution",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "bonus_time",
            "description": "<p>赎回生效日期</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/redeem/:id",
    "title": "更新订单赎回记录",
    "name": "UpdateOrderRedeem",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "redemption_time",
            "description": "<p>赎回生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "redeem_value",
            "description": "<p>赎回日净值</p>"
          },
          {
            "group": "Parameter",
            "type": "float",
            "optional": true,
            "field": "fee",
            "description": "<p>手续费</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "1.34    # 剩余份额",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "put",
    "url": "/api/orders/:order_no/share_change/:id",
    "title": "更新份额变更记录",
    "name": "UpdateOrderShareChange",
    "group": "Order",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "amount",
            "description": "<p>金额</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>变更生效日期</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "remark",
            "description": "<p>备注</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "direction",
            "description": "<p>1:增加,-1减少</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/order.py",
    "groupTitle": "Order"
  },
  {
    "type": "get",
    "url": "/api/org/profile",
    "title": "机构信息",
    "name": "OrgProfile",
    "group": "Org",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"company_name\": \"机构名称\",\n    \"industry\": 12, # 行业\n    \"customers\": 99,\n    \"employees\": 100,\n    \"product_count\": {\n        \"total\": { # 总产品数\n            \"maice\": 3, # 麦策\n            \"org\": 2    # 机构\n        },\n        \"existence\": { # 存续产品数\n            \"maice\": 3,\n            \"org\": 99\n        }\n    },\n    \"order_amount\": {\n        \"total\": {  # 总配置\n            \"maice\": {\n                \"rmb\": 0,\n                \"dollar\": 0\n            },\n            \"org\": {\n                \"rmb\": 0,\n                \"dollar\": 0\n            }\n        },\n        \"existence\": {  #  存续\n            \"maice\": {\n                \"rmb\": 0,\n                \"dollar\": 0\n            },\n            \"org\": {\n                \"rmb\": 0,\n                \"dollar\": 0\n            }\n        }\n    },\n    \"income\": {         # 分成\n        \"rmb\": 0,\n        \"dollar\": 99\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/org.py",
    "groupTitle": "Org"
  },
  {
    "type": "post",
    "url": "/api/products/org",
    "title": "创建机构产品",
    "name": "CreateProduct",
    "group": "Product",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"name\": \"产品A\"，\n    \"profit_type\": 1,   # 产品类型 0：固定， 1：浮动，2：定期\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款时间 日期或时间格式字符串都行\n    \"strategy\": {       # 投资策略\n        \"value\": \"101010\",\n        \"text\": \"\"\n    },\n    \"sell_status\": 1,       # 1:停售, 2:在售\n    \"fund_manager\": \"管理人\",\n    \"count_day_num\": 365,   # 计息规则\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16\":     # 首次开放日\n    \"dividend_type\": 1, # 分红方式\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"max_fee_sale\": \"最高销售费用\",\n    \"repayment_source\": \"还款来源\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"contract_file_id\": 33,    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"features\": [1, 3, 5],  # 产品特点\n    \"relevant_files\": [33, 12], # 相关文件\n    \"remark\": \"备注\",\n    \"hide\": true,\n    \"top\": true,\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n        \"duration\": 23,             # 期限\n        \"expire_time\": \"2017-12-16T16:00:00\",   # 过期时间\n        \"description\": \"收益描述\"\n    }],\n    \"distribution\": [     # 收益分配时间\n        \"2017-12-16T16:00:00\"\n    ],\n    \"estimated_dividends_time_description\": \"预计打款时间描述\",\n    \"increment_size\": 3,        # 递增金额\n    \"period\": 3,                # 开放周期/月\n    \"advanced_pay_time\": 4,     # 提前打款时间/天\n    \"open_date_info\": \"开放日说明\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "post",
    "url": "/api/products/:pid/values",
    "title": "创建产品净值",
    "name": "CreateProductValues",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "total_value",
            "description": "<p>累计净值</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
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
            "type": "bool",
            "optional": false,
            "field": "follow",
            "description": "<p>是否关注</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products//myself/stats",
    "title": "我的产品统计",
    "name": "MyProductStat",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"order_amount\": {   # 成交金额\n        \"total\": {  # 累计\n            \"rmb\": 0,\n            \"dollar\": 0\n        },\n        \"existence\": {  #  存续\n            \"rmb\": 0,\n            \"dollar\": 0\n        }\n    },\n    \"product_count\": {\n        \"total\": { # 总产品数\n            \"maice\": 3, # 麦策\n            \"org\": 2    # 机构\n        },\n        \"existence\": { # 存续产品数\n            \"maice\": 3,\n            \"org\": 99\n        }\n    },\n    \"existence_percent_by_profit_type\": {   # 浮动/固定存续\n        \"fixed\": 0.12,\n        \"float\": 0.88\n    },\n    \"existence_percent_by_currency\": {  # 人民币/美元存续\n        \"rmb\": 0.9,\n        \"dollar\": 0.1\n    },\n    \"existence_percent_by_strategy\": {  # 存续产品策略\n        \"主观多空\": 0.8,\n        \"其他\": 0.2\n    },\n    \"rate\": {   # 汇率\n        \"value\": 1.3,\n        \"date\": \"2017-06-01\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/myself",
    "title": "我的产品列表",
    "name": "MyProducts",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "source",
            "description": "<p>来源,1:麦策2:机构</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "profit_type",
            "description": "<p>收益类型,0：固定，1：浮动</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "existence",
            "description": "<p>存续类型 0:已结束1:存续中</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "action",
            "description": "<p>1:已采购，2:已关注</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 113,\n    \"name\": \"产品名称\",\n    \"org_id\": 1,        # 如果来自麦策，就是null\n    \"profit_type\": 1,   # 收益类型\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"existence\": 1,\n    \"action\": 1,\n    \"total_amount\": 1000,     # 成交金额\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/org/:id",
    "title": "机构产品详情",
    "name": "OrgProductDetail",
    "group": "Product",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"name\": \"产品名称\"\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动, 2: 开放期\n    \"status\": 1,            # 产品状态 0: 待上架 ，1:筹备中,2:众筹中,3:已完成,-1:项目失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-16T16:00:00\",   # 最迟打款时间\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": {\n        \"value\": \"101001\",\n        \"text\": \"市场中性\"\n    },\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16T16:00:00\",\t\t# 产品开放日\n    \"open_date_description\": \"产品开放日描述\",\n    \"dividend_type\": 1, # 分红方式: 1份额2金额\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"max_fee_sale\": \"最高销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"estimated_dividends_time_description\": \"预计打款时间描述\",\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"features\": [{\"text\": \"特点1\", \"image\": \"http://xxxx.jpg\"}],  # 产品特点\n    \"feature_ids\": [33, 35, 11, 99],\n    \"relevant_files\": [{\n        \"name\": \"相关文件1\",\n        \"url\": \"/api/file/3\"\n    }]\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"repayment_source\": \"还款来源\",\n    \"hide\": true,       # 是否隐藏\n    \"increment_size\": 3,        # 递增金额\n    \"duration\": \"3 - 18 个月\",    # 期限\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n        \"duration\": 23,             # 期限\n        \"expire_time\": \"2017-12-16T16:00:00\",   # 过期时间\n        \"description\": \"收益描述\"\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"type\": 1,              # 节点类型, 1:普通, 2:可参与\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n                \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ],\n    \"sell_status\": 1,       # 1:停售, 2:在售\n    \"count_day_num\": 365,   # 计息规则\n    \"distribution\": [     # 收益分配时间\n        \"bonus_time\": \"2017-12-16T16:00:00\"\n    ],\n    \"open_date_info\": \"开放日说明\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/products/org/:id/stats",
    "title": "机构产品数据统计(机构维度)",
    "name": "OrgProductStats",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"currency\": 1,   # 货币类型\n    \"orders\": 21,      # 单量\n    \"customers\": 2 # 客户\n    \"total_amount\": 23,             # 累计金额\n    \"existence_amount\": 11,   # 存续金额\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/org",
    "title": "机构的产品列表",
    "name": "OrgProducts",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "source",
            "description": "<p>来源,1:麦策2:机构</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "profit_type",
            "description": "<p>收益类型,0：固定，1：浮动</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "sell_status",
            "description": "<p>1:停售, 2:在售</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 113,\n    \"name\": \"产品名称\",\n    \"org_id\": 1,        # 如果来自麦策，就是null\n    \"profit_type\": 1,   # 收益类型\n    \"sell_status\": 1,\n    \"currency\": 1,\n    \"surplus_size\": 1900,   # 剩余额度\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
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
            "type": "bool",
            "optional": false,
            "field": "participate",
            "description": "<p>参与/取消</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "mobile",
            "description": "<p>联系方式</p>"
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
          "content": "{\n    \"id\": 1,\n    \"name\": \"产品名称\"\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动, 2: 开放期\n    \"status\": 1,            # 产品状态 0: 待上架 ，1:筹备中,2:众筹中,3:已完成,-1:项目失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-16T16:00:00\",   # 最迟打款时间\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": {\n        \"value\": \"101001\",\n        \"text\": \"市场中性\"\n    },\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16T16:00:00\",\t\t# 产品开放日\n    \"open_date_description\": \"产品开放日描述\",\n    \"dividend_type\": 1, # 分红方式: 1份额2金额\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"max_fee_sale\": \"最高销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"estimated_dividends_time_description\": \"预计打款时间描述\",\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"features\": [{\"text\": \"特点1\", \"image\": \"http://xxxx.jpg\"}],  # 产品特点\n    \"feature_ids\": [33, 35, 11, 99],\n    \"relevant_files\": [{\n        \"name\": \"相关文件1\",\n        \"url\": \"/api/file/3\"\n    }]\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"repayment_source\": \"还款来源\",\n    \"hide\": true,       # 是否隐藏\n    \"increment_size\": 3,        # 递增金额\n    \"duration\": \"3 - 18 个月\",    # 期限\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n        \"duration\": 23,             # 期限\n        \"expire_time\": \"2017-12-16T16:00:00\",   # 过期时间\n        \"description\": \"收益描述\"\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"type\": 1,              # 节点类型, 1:普通, 2:可参与\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n                \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ],\n    \"sell_status\": 1,       # 1:停售, 2:在售\n    \"count_day_num\": 365,   # 计息规则\n    \"distribution\": [     # 收益分配时间\n        \"bonus_time\": \"2017-12-16T16:00:00\"\n    ],\n    \"open_date_info\": \"开放日说明\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/products/profit_intervals",
    "title": "产品收益区间",
    "name": "ProductProfitIntervals",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"condition_ceiling\": 133,   # 金额上限\n    \"condition_floor\": 21,      # 金额下线\n    \"prospective_earning\": 0.02 # 预期年化收益\n    \"duration\": 23,             # 期限\n    \"expire_time\": \"2017-12-16T16:00:00\",   # 过期时间\n    \"description\": \"收益描述\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/strategies",
    "title": "产品策略",
    "name": "ProductStrategies",
    "group": "Product",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "int",
            "description": "<p>type 1:浮动,2:固定</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"value\": \"101011\",\n    \"text\": \"主观多空\"\n}]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:pid/values",
    "title": "产品净值列表",
    "name": "ProductValues",
    "group": "Product",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 113,\n    \"update_time\": \"2017-12-16T16:00:00\",\n    \"total_value\": 1.3,        # 净值\n    \"increase\": 0.13,       # 涨幅\n}",
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
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/products/:pid/value_graph",
    "title": "产品净值图",
    "name": "ProductValuesGraph",
    "group": "Product",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"product\": [{\n        \"update_time\": \"2017-12-16T16:00:00\"\n        \"total_value\": 1.34\n    }],\n    \"CSI300\": [{    # 沪深300\n        \"update_time\": \"2017-12-16T16:00:00\"\n        \"total_value\": 1.34\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
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
            "type": "int",
            "optional": true,
            "field": "status",
            "description": "<p>产品状态 1:观察中,2:采购中,3:往期产品</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>产品名称</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "org_id",
            "description": "<p>机构ID</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "sell_status",
            "description": "<p>1:停售, 2:在售</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "source",
            "description": "<p>来源,1:麦策2:机构</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "profit_type",
            "description": "<p>收益类型,0：固定，1：浮动</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
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
          "content": "{\n    \"id\": 1,\n    \"name\": \"产品名称\"\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动, 2: 开放期\n    \"status\": 1,            # 产品状态 0: 待上架 ，1:筹备中,2:众筹中,3:已完成,-1:项目失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-16T16:00:00\",   # 最迟打款时间\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": {\n        \"value\": \"101001\",\n        \"text\": \"市场中性\"\n    },\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16T16:00:00\",\t\t# 产品开放日\n    \"open_date_description\": \"产品开放日描述\",\n    \"dividend_type\": 1, # 分红方式: 1份额2金额\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"max_fee_sale\": \"最高销售费用\",\n    \"currency\": 1,      # 1:人民币, 2:美元\n    \"estimated_dividends_time_description\": \"预计打款时间描述\",\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"features\": [{\"text\": \"特点1\", \"image\": \"http://xxxx.jpg\"}],  # 产品特点\n    \"feature_ids\": [33, 35, 11, 99],\n    \"relevant_files\": [{\n        \"name\": \"相关文件1\",\n        \"url\": \"/api/file/3\"\n    }]\n    \"remark\": \"备注\",\n    \"max_prospective_earning\": 0.334,   # 最高预期年化收益\n    \"surplus_time\": 2344444,    # 剩余时间/sec\n    \"surplus_size\": 23,         # 剩余额度/万\n    \"followed\": false,          # 是否关注\n    \"repayment_source\": \"还款来源\",\n    \"hide\": true,       # 是否隐藏\n    \"increment_size\": 3,        # 递增金额\n    \"duration\": \"3 - 18 个月\",    # 期限\n    \"profit_interval\": [{       # 收益区间\n        \"condition_ceiling\": 133,   # 金额上限\n        \"condition_floor\": 21,      # 金额下线\n        \"prospective_earning\": 0.02 # 预期年化收益\n        \"duration\": 23,             # 期限\n        \"expire_time\": \"2017-12-16T16:00:00\",   # 过期时间\n        \"description\": \"收益描述\"\n    }],\n    \"major_timeline\": [             # 产品流程\n          {\n            \"cnt\": 0,               # 子流程数量\n            \"name\": \"项目完成\",     # 进度名称\n            \"nodes\": [],            # 子流程\n            \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"开始采购\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"尽调研究\",\n            \"nodes\": [],\n            \"status\": 0\n          },\n          {\n            \"cnt\": 0,\n            \"name\": \"项目录入\",\n            \"nodes\": [\n              {\n                \"content\": \"gCBO8i4aj3fk\",      # 进度内容\n                \"created_time\": \"2017-03-22T17:08:20\",\n                \"id\": 2,\n                \"type\": 1,              # 节点类型, 1:普通, 2:可参与\n                \"participation_status\": 0       # 用户参与状态, 0:待审核，1:审核通过, 2:未参与\n                \"status\": 0             # 进度状态 0:待进行,1:进行中,2:已结束,3:失败\n              }\n            ],\n            \"status\": 1,\n            \"time\": \"2017-03-22T17:08:20\"       # 时间\n          }\n    ],\n    \"sell_status\": 1,       # 1:停售, 2:在售\n    \"count_day_num\": 365,   # 计息规则\n    \"distribution\": [     # 收益分配时间\n        \"bonus_time\": \"2017-12-16T16:00:00\"\n    ],\n    \"open_date_info\": \"开放日说明\"\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "put",
    "url": "/api/products/org/:id",
    "title": "更新机构产品",
    "name": "UpdateProduct",
    "group": "Product",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "get",
    "url": "/api/products/:id/stats",
    "title": "单个产品数据统计(用户维度)",
    "name": "UserProductStats",
    "group": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"currency\": 1,   # 货币类型\n    \"orders\": 21,      # 单量\n    \"customers\": 2 # 客户\n    \"total_amount\": 23,             # 累计金额\n    \"existence_amount\": 11,   # 存续金额\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "delete",
    "url": "/api/products/:pid/values/:id",
    "title": "删除产品净值",
    "name": "deleteProductValues",
    "group": "Product",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
  },
  {
    "type": "put",
    "url": "/api/products/:pid/values/:id",
    "title": "更新产品净值",
    "name": "updateProductValues",
    "group": "Product",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "float",
            "optional": false,
            "field": "total_value",
            "description": "<p>累计净值</p>"
          },
          {
            "group": "Parameter",
            "type": "datetime",
            "optional": false,
            "field": "update_time",
            "description": "<p>更新时间</p>"
          }
        ]
      }
    },
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product"
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
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "type",
            "description": "<p>类型,1:注册,2:忘记密码</p>"
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
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "company_name",
            "description": "<p>公司</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "work_year",
            "description": "<p>工作年限(1:1~3年, 2:3~5年, 3:5~10年, 4:10年以上)</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "industry",
            "description": "<p>行业(1:银行, 2:信托, 3:资管, 4:保险, 5:证券, 6:基金, 7:P2P, 8:三方)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "business_card_pic",
            "description": "<p>名片地址</p>"
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
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
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
    "type": "get",
    "url": "/api/user/invite/exist",
    "title": "是否存在待处理邀请",
    "name": "InviteExist",
    "group": "User",
    "version": "1.0.0",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "true/false",
          "type": "json"
        }
      ]
    },
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
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "work_year",
            "description": "<p>从业年限</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role",
            "description": "<p>角色</p>"
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
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
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
    "url": "/api/user/login",
    "title": "用户登录",
    "name": "Login",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
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
    "description": "<p>用户注销</p>",
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/user/org/members/:id/quit",
    "title": "辞退用户",
    "name": "MemberQuit",
    "group": "User",
    "version": "1.0.0",
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
          "content": "[{\n    \"id\": 2,\n    \"name\": \"理财师A\"，\n    \"position\": \"职位理财师\",\n    \"status\": 1,    # 状态 1: 待确认, 2:已确认, 3: 已离职, 4: 已拒绝\n    \"mobile\": \"150694324\",\n    \"work_year\": 3,\n    \"role\": 20              # 用户角色\n    \"total_amount\": {   # 累计成交金额\n        \"rmb\": 100,\n        \"dollar\": 199\n    }\n}]",
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
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/api/user/org/members/:id",
    "title": "机构成员详情",
    "name": "OrgMembersDetail",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"name\": \"理财师A\"，\n    \"position\": \"职位理财师\",\n    \"status\": 1,    # 状态 1: 待确认, 2:已确认, 3: 已离职, 4: 已拒绝\n    \"mobile\": \"150694324\",\n    \"work_year\": 1,\n    \"role\": 20              # 角色(20创始人, 21管理员, 22产品管理员, 23理财师)\n    \"order_count\": {\n        \"org\": 12,  # 机构\n        \"maice\": 12 # 麦策\n    },\n    \"product_count\": {\n        \"total\": { # 总产品数\n            \"maice\": 3, # 麦策\n            \"org\": 2    # 机构\n        },\n        \"existence\": { # 存续产品数\n            \"maice\": 3,\n            \"org\": 99\n        }\n    },\n    \"customer_count\": {\n        \"total\": 3,\n        \"existence\": 5, # 存续客户数\n    },\n    \"order_amount\": {\n        \"total\": {  # 总配置\n            \"maice\": {\n                \"rmb\": 0,\n                \"dollar\": 0\n            },\n            \"org\": {\n                \"rmb\": 0,\n                \"dollar\": 0\n            }\n        },\n        \"existence\": {  #  存续\n            \"maice\": {\n                \"rmb\": 0,\n                \"dollar\": 0\n            },\n            \"org\": {\n                \"rmb\": 0,\n                \"dollar\": 0\n            }\n        }\n    },\n    \"income\": {         # 分成\n        \"rmb\": 0,\n        \"dollar\": 99\n    }\n}",
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
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
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
    "url": "/api/user/reserve_product",
    "title": "用户预约产品",
    "name": "Reserve",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": "<p>用户id</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productid",
            "description": "<p>产品id</p>"
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
    "url": "/api/user/password/reset",
    "title": "忘记密码",
    "name": "ResetPassword",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "code",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
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
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "work_year",
            "description": "<p>年限</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../purchasing_consortia/frontend/user.py",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/user/org/members/:id",
    "title": "更新机构成员",
    "name": "UpdateOrgMembers",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "position",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "work_year",
            "description": "<p>从业年限</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": false,
            "field": "role",
            "description": "<p>角色</p>"
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
            "type": "string",
            "optional": true,
            "field": "avatar",
            "description": "<p>头像</p>"
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
    "url": "/api/user/center",
    "title": "个人中心",
    "name": "UserCenter",
    "group": "User",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"user_id\": 100409,\n    \"name\": \"王伟强\",\n    \"avatar\": \"http://www.xsadas.jpg\",\n    \"certification_status\": 1,  # 认证状态, 0:未认证,1:待审核,2:修改中,3:认证通过\n    \"certification_info\": {\n        \"company_name\": \"机构名称\",\n        \"position\": \"职位理财师\",\n        \"work_year\": 1,\n        \"industry\": 3,\n    }\n}",
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
    "url": "/api/user/customers/id_card",
    "title": "客户身份证信息",
    "name": "UserCustomersIDCard",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "name",
            "description": "<p>客户姓名</p>"
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
          "content": "{\n    \"user_id\": 100094,\n    \"mobile\": \"1321321312\"\n    \"is_admin\": true,\n    \"is_org_member\": true,\n    \"admin_id\": 100130,\n    \"name\": \"小明\",\n    \"avatar\": \"http://dsadsasjda.png\",  # 头像\n    \"certification_status\": 0,          # 认证状态, 0:未认证,1:待审核,2:修改中,3:认证通过\n    \"unread_notifications\": 33,         # 未读消息数\n    \"org_member_count\": 3,              # 旗下理财师人数\n    \"role\": 21                          # 角色\n}",
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
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "[{\n    \"order_no\": \"83092180982193012\",\n    \"product_name\": \"产品名称A\",\n    \"product_id\": 33,\n    \"amount\": 33,\n    \"currency\": 1,  # 1 人民币,2:美金\n    \"actual_time\": \"2015-12-11\",     # 实际打款时间\n}]",
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
            "type": "int",
            "optional": true,
            "field": "page",
            "description": "<p>第几页</p>"
          },
          {
            "group": "Parameter",
            "type": "int",
            "optional": true,
            "field": "per_page",
            "description": "<p>每页数量</p>"
          }
        ]
      }
    }
  }
] });
