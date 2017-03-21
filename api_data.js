define({ "api": [
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
    "filename": "../purchasing_consortia/frontend/file.py",
    "groupTitle": "File"
  },
  {
    "type": "get",
    "url": "/api/products",
    "title": "产品列表",
    "name": "Products",
    "group": "Product",
    "version": "1.0.0",
    "filename": "../purchasing_consortia/frontend/product.py",
    "groupTitle": "Product",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": 1,\n    \"brief_name\": \"产品简称\",\n    \"full_name\": \"产品全称\",\n    \"profit_type\": 1,       # 收益类型 0：固定， 1：浮动\n    \"status\": 1,            # 产品状态 0: 待上架 ，1：筹备中,2:众筹中,3:已成立,4:已结束,-1:预审失败,-2:众筹失败\n    \"minimum_size\": 12,     # 最小募集规模/万\n    \"maximum_size\": 33,     # 最大募集规模/万\n    \"current_precontract_size\": 12, # 当前预约额度/万\n    \"last_pay_time\": \"2017-12-3\",   # 最迟打款日期\n    \"minimum_subscription_size\": 10,    # 起够金额\n    \"strategy\": \"产品策略\",\n    \"fund_manager\": \"管理人\",\n    \"start_date\": \"2017-12-16T16:00:00\",    # 产品成立日\n    \"end_date\": \"2017-12-16T16:00:00\",    # 产品结束日\n    \"open_date\": \"2017-12-16T16:00:00\":     # 产品开放日\n    \"dividend_type\": \"分红方式\"\n    \"close_time\": \"封闭期\",\n    \"other_time_point\": \"其他时间节点\",\n    \"collect_account_name\": \"募集账户名\",\n    \"collect_account\": \"募集账号\",\n    \"bank_name\": \"开户行\",\n    \"remit_remark\": \"打款备注\",\n    \"invest_info\": \"投资方向\",\n    \"risk_info\": \"风控措施\",\n    \"fee_info\": \"产品费用\",\n    \"fee_sale\": \"销售费用\",\n    \"contract_file\": \"/api/file/3\",    # 合同文件\n    \"images\": [\"http://address1\", \"http://address2\"],   # 配图\n    \"tags\": \"tag1,tag2\",    # 标签\n    \"remark\": \"备注\",\n    \"major_timeline\": {},       # 产品流程\n}",
          "type": "json"
        }
      ]
    }
  }
] });