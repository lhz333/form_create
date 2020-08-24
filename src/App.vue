<template>
  <div id="app">
    <form-create ref="fc" :rule="rule" :option="option" @goods-name-change="change" />
  </div>
</template>

<script>
var $f;
export default {
  name: 'App',
  data () {
    return {
      formData: {},
      rule: this.mock(),
      option: {
        //显示表单重置按钮
        resetBtn: true,
        //表单提交事件
        onSubmit: function (formData) {
          alert(JSON.stringify(formData));
          //按钮进入提交状态
          $f.btn.loading();
          //重置按钮禁用
          $f.resetBtn.disabled();
          //按钮进入可点击状态
          //                    $f.btn.finish();
          //创建第二个表单
          // $f = this.$formCreate(this.mock, root);
        }
      }
    };
  },
  watch: {
    'formData.address': {
      handler: function (n) {
        console.log(n);
      },
      deep: true
    }
  },
  methods: {
    change: function (...arg) {
      console.log(arg);
    },
    mock () {
      return [
        {
          type: 'hidden',
          field: 'id',
          value: '14'
        },
        {
          type: "cascader",
          title: "所在区域",
          field: "address",
          value: ['陕西省', '西安市', '新城区'],
          props: {
            data: window.province_city_area,
          },
        },
        {
          type: "input",
          title: "商品名称",
          field: "goods_name",
          value: "",
          validate: [{
            required: true,
            message: '请输入商品名称',
            trigger: 'blur'
          },
          ],
        },

        {
          type: "radio",
          title: "是否包邮",
          field: "is_postage",
          value: "0",
          options: [{
            value: "0",
            label: "不包邮",
            disabled: false
          },
          {
            value: "1",
            label: "包邮",
            disabled: false
          },
          {
            value: "1",
            label: "未知",
            disabled: true
          },
          ]
        },

        {
          type: "checkbox",
          title: "标签",
          field: "label",
          value: ["1", "2", "3"],
          options: [{
            value: "1",
            label: "好用",
            disabled: true
          },
          {
            value: "2",
            label: "方便",
            disabled: false
          },
          {
            value: "3",
            label: "实用",
            disabled: false
          },
          {
            value: "4",
            label: "有效",
            disabled: false
          },
          ]
        },
        {
          type: "switch",
          title: "是否上架",
          field: "is_show",
          value: "1",
          props: {
            "trueValue": "1",
            "falseValue": "0",
          }
        },
        {
          type: "select",
          field: "cate_id",
          title: "产品分类",
          value: ["104", "105"],
          props: {
            "multiple": true
          },
          options: [{
            "value": "104",
            "label": "生态蔬菜",
            "disabled": false
          },
          {
            "value": "105",
            "label": "新鲜水果",
            "disabled": false
          },
          ],
        },
        {
          type: "DatePicker",
          field: "section_day",
          title: "活动日期",
          value: ['2018-02-20', new Date()],
          props: {
            "type": "datetimerange"
          },
        },
        {
          type: "TimePicker",
          field: "section_time",
          title: "活动时间",
          value: [],
          props: {
            "type": "timerange"
          },
        },
        {
          type: "InputNumber",
          field: "sort",
          title: "排序",
          value: 0,
        },
        {
          type: "ColorPicker",
          field: "color",
          title: "颜色",
          value: '#ff7271',
        },
        {
          type: "rate",
          field: "rate",
          title: "推荐级别",
          value: 3.5,
          props: {
            "count": 10,
          },
          validate: [{
            required: true,
            type: 'number',
            min: 3,
            message: '请大于3颗星',
            trigger: 'change'
          }]
        },
        {
          type: "slider",
          field: "slider",
          title: "滑块",
          value: [0, 50],
          props: {
            "min": 0,
            "max": 100,
            "range": true,
          },
        },
        {
          type: "Upload",
          field: "pic",
          title: "轮播图",
          value: ['http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg'],
          props: {
            "type": "select",
            "uploadType": "image",
            "action": "",
          },
          validate: [{
            required: true,
            type: 'array',
            min: 3,
            message: '请上传3张图片',
            trigger: 'change'
          }]
        },
        {
          type: "checkbox",
          title: "",
          field: "checked",
          value: "0",
          options: [{
            value: "1",
            label: "同意****用户协议",
            disabled: false
          },
          ],
        },
        {
          type: "frame",
          title: "素材",
          field: "fodder",
          value: ["http://img1.touxiang.cn/uploads/20131030/30-075657_191.jpg"],
          props: {
            type: "image",
            src: "iframe.html",
            maxLength: 2,
            height: "220px",
            width: "350px",
          },
          validate: [{
            required: true,
            type: 'array',
            min: 5,
            message: '请选择5张图片',
            trigger: 'change'
          }],
        },
      ]
    }
  },
  mounted: function () {
    $f = this.$refs.fc.$f;
    this.formData = $f.model();

    //动态添加表单元素
    //$f.append($r, 'pic');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
